function normalize(value) {
  return value.toLowerCase().trim();
}

export function scoreSearch(item, query) {
  const q = normalize(query);
  if (!q) return 0;

  const title = normalize(item.title || "");
  const syntax = normalize(item.syntax || "");
  const description = normalize(item.description || "");
  const example = normalize(item.example || "");
  const aliases = (item.aliases || []).map(normalize);
  const keywords = (item.keywords || []).map(normalize);
  const category = normalize(item.category || "");

  let score = 0;

  if (title === q || syntax === q) score += 120;
  if (title.startsWith(q) || syntax.startsWith(q)) score += 80;
  if (aliases.includes(q) || keywords.includes(q)) score += 70;
  if (title.includes(q) || syntax.includes(q)) score += 50;
  if (category.includes(q)) score += 30;
  if (description.includes(q) || example.includes(q)) score += 20;
  if (aliases.some((alias) => alias.includes(q))) score += 20;
  if (keywords.some((keyword) => keyword.includes(q))) score += 20;

  return score;
}

