export function normalizeCommandSearch(value) {
  return value.toLowerCase().trim();
}

export function matchesCommandSearch(command, query) {
  const normalized = normalizeCommandSearch(query);
  if (!normalized) return true;

  const haystack = [
    command.syntax,
    command.title,
    command.description,
    command.category,
    command.example,
    command.note,
    command.noteText,
    ...(command.aliases || [])
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(normalized);
}
