import React from "react";
import { ColorTags } from "astro-boilerplate-components"; // Assuming this exports an object/enum

// Helper function to map ColorTags to Tailwind classes
const getTagClasses = (color) => {
  const colorMap = {
    [ColorTags.FUCHSIA]: "bg-fuchsia-400 text-fuchsia-900",
    [ColorTags.LIME]: "bg-lime-400 text-lime-900",
    [ColorTags.SKY]: "bg-sky-400 text-sky-900",
    [ColorTags.PINK]: "bg-pink-400 text-pink-900",
    [ColorTags.ROSE]: "bg-rose-400 text-rose-900",
    [ColorTags.SLATE]: "bg-slate-400 text-slate-900",
    [ColorTags.GRAY]: "bg-gray-400 text-gray-900",
    [ColorTags.ORANGE]: "bg-orange-400 text-orange-900",
    [ColorTags.AMBER]: "bg-amber-400 text-amber-900",
    [ColorTags.YELLOW]: "bg-yellow-400 text-yellow-900",
    [ColorTags.EMERALD]: "bg-emerald-400 text-emerald-900",
    [ColorTags.TEAL]: "bg-teal-400 text-teal-900",
    [ColorTags.CYAN]: "bg-cyan-400 text-cyan-900",
    [ColorTags.BLUE]: "bg-blue-400 text-blue-900",
    [ColorTags.INDIGO]: "bg-indigo-400 text-indigo-900",
    [ColorTags.VIOLET]: "bg-violet-400 text-violet-900",
    [ColorTags.PURPLE]: "bg-purple-400 text-purple-900",
    [ColorTags.RED]: "bg-red-400 text-red-900",
    [ColorTags.GREEN]: "bg-green-400 text-green-900",
    // Add any other colors from ColorTags if necessary
  };
  return colorMap[color] || "bg-gray-400 text-gray-900"; // Default fallback
};

// Component to render description with line breaks
// Using dangerouslySetInnerHTML is simpler if the source is trusted (like your own data file)
// Alternatively, split by newline and map to <p> or <br>, but that requires careful styling.
const Description = ({ text }) => {
  if (!text) return null;
  // Basic sanitization (replace potential script tags - more robust needed for untrusted input)
  const sanitizedHtml = text.trim().replace(/<script.*?>.*?<\/script>/gi, "");
  // Replace newlines with <br> tags for HTML rendering
  const htmlWithBreaks = sanitizedHtml.replace(/\n/g, "<br />");
  return (
    <p
      className="prose prose-invert mt-3 text-gray-300" // prose applies basic text styling
      style={{ maxWidth: "none" }} // Override prose width limit if needed
      dangerouslySetInnerHTML={{ __html: htmlWithBreaks }}
    />
  );
};

// Main CareerItem component
const CareerItem = ({ career }) => {
  if (!career) return null; // Handle cases where career data might be missing

  return (
    <div className="flex flex-col gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
      {/* Optional Logo */}
      <div className="mb-4 shrink-0 md:mb-0 md:w-36">
        {career.logo && career.logo.src ? (
          <img
            src={career.logo.src}
            alt={career.logo.alt || `${career.company} Logo`}
            className="h-36 w-36 rounded-md object-contain"
            loading="lazy"
          />
        ) : (
          <div className="h-36 w-36 rounded-md bg-slate-700"></div> // Placeholder box if no logo
        )}
      </div>

      {/* Details */}
      <div className="flex-grow">
        <div className="flex flex-col items-start gap-y-1 md:flex-row md:items-center md:gap-y-2">
          <h3 className="text-xl font-semibold">{career.title}</h3>
          <span className="text-lg text-gray-400 md:ml-2">
            @ {career.company}
          </span>
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
          <span>{career.time}</span>
          {career.location && <span>| {career.location}</span>}
          {career.salary && <span>| {career.salary}</span>}
        </div>

        {career.description && <Description text={career.description} />}

        {career.keywords && career.keywords.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {career.keywords.map((keyword) => (
              <span
                key={keyword.name}
                className={`rounded-md px-2 py-1 text-xs font-semibold ${getTagClasses(
                  keyword.color
                )}`}
              >
                {keyword.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerItem; // Use default export for simpler import in Astro
