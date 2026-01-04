import rss, { pagesGlobToRssItems } from "@astrojs/rss";

import { AppConfig } from "@/utils/AppConfig.js";

export async function GET(context) {
  return rss({
    title: AppConfig.title,
    description: AppConfig.description,
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./posts/*.md")),
    customData: `<language>en-us</language>`,
  });
}
