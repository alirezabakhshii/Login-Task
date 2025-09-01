export function setItem<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Error saving item "${key}" to localStorage:`, err);
  }
}

export function getItem<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch (err) {
    console.error(`Error reading item "${key}" from localStorage:`, err);
    return null;
  }
}

export function removeItem(key: string) {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error(`Error removing item "${key}" from localStorage:`, err);
  }
}

export function clearAll() {
  try {
    localStorage.clear();
  } catch (err) {
    console.error("Error clearing localStorage:", err);
  }
}
