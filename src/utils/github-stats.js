/**
 * Shared GitHub stats fetcher with deduplication and localStorage caching.
 * All ProjectCards share a single fetch queue to avoid duplicate API calls.
 */

const CACHE_KEY = 'gh-stats-v2';
const CACHE_TTL = 1000 * 60 * 60 * 4; // 4 hours

// In-flight promise map — prevents duplicate requests for the same repo
const pending = new Map();
let rateLimited = false;

function getCache() {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
  } catch {
    return {};
  }
}

function setCache(cache) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {}
}

export function parseRepo(url) {
  const match = url?.match(/github\.com\/([^/]+\/[^/]+)/);
  return match ? match[1].replace(/\.git$/, '') : null;
}

export async function getStats(repo) {
  if (!repo) return null;

  // Check cache first
  const cache = getCache();
  const entry = cache[repo];
  if (entry && Date.now() - entry.ts < CACHE_TTL) {
    return entry.data;
  }

  // Skip if already rate limited this session
  if (rateLimited) return null;

  // Deduplicate: return existing in-flight promise if one exists
  if (pending.has(repo)) {
    return pending.get(repo);
  }

  const promise = (async () => {
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      });

      if (res.status === 403 || res.status === 429) {
        rateLimited = true;
        return null;
      }
      if (!res.ok) return null;

      const data = await res.json();
      const result = { stars: data.stargazers_count, forks: data.forks_count };

      // Update cache
      const c = getCache();
      c[repo] = { data: result, ts: Date.now() };
      setCache(c);

      return result;
    } catch {
      return null;
    } finally {
      pending.delete(repo);
    }
  })();

  pending.set(repo, promise);
  return promise;
}

export function formatCount(n) {
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + 'k';
  return String(n);
}
