const STORAGE_KEY = 'shortened_links';

export function saveMappings(mappings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mappings));
  } catch (err) {
    console.error('Failed to save mappings:', err);
  }
}

export function loadMappings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to load mappings:', err);
    return [];
  }
}