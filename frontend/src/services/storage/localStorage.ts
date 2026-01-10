import { STORAGE_KEYS } from '../../constants/config';

export class LocalStorageService {
  private isAvailable(): boolean {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  get<T>(key: string, defaultValue?: T): T | null {
    if (!this.isAvailable()) {
      console.warn('localStorage is not available');
      return defaultValue || null;
    }

    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        return defaultValue || null;
      }
      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`Error getting item ${key} from localStorage:`, error);
      return defaultValue || null;
    }
  }

  set<T>(key: string, value: T): boolean {
    if (!this.isAvailable()) {
      console.warn('localStorage is not available');
      return false;
    }

    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error setting item ${key} in localStorage:`, error);
      return false;
    }
  }

  remove(key: string): boolean {
    if (!this.isAvailable()) {
      console.warn('localStorage is not available');
      return false;
    }

    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing item ${key} from localStorage:`, error);
      return false;
    }
  }

  clear(): boolean {
    if (!this.isAvailable()) {
      console.warn('localStorage is not available');
      return false;
    }

    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  }

  has(key: string): boolean {
    if (!this.isAvailable()) {
      return false;
    }

    return localStorage.getItem(key) !== null;
  }

  getFormProgress(): any {
    return this.get(STORAGE_KEYS.FORM_PROGRESS);
  }

  setFormProgress(data: any): boolean {
    return this.set(STORAGE_KEYS.FORM_PROGRESS, data);
  }

  clearFormProgress(): boolean {
    return this.remove(STORAGE_KEYS.FORM_PROGRESS);
  }

  getThemeMode(): 'light' | 'dark' | null {
    return this.get<'light' | 'dark'>(STORAGE_KEYS.THEME_MODE);
  }

  setThemeMode(mode: 'light' | 'dark'): boolean {
    return this.set(STORAGE_KEYS.THEME_MODE, mode);
  }

  getUserPreferences(): any {
    return this.get(STORAGE_KEYS.USER_PREFERENCES);
  }

  setUserPreferences(preferences: any): boolean {
    return this.set(STORAGE_KEYS.USER_PREFERENCES, preferences);
  }

  getRecentSearches(): string[] {
    return this.get<string[]>(STORAGE_KEYS.RECENT_SEARCHES, []) || [];
  }

  addRecentSearch(search: string): boolean {
    const searches = this.getRecentSearches();
    const filtered = searches.filter((s) => s !== search);
    filtered.unshift(search);
    const limited = filtered.slice(0, 10);
    return this.set(STORAGE_KEYS.RECENT_SEARCHES, limited);
  }

  clearRecentSearches(): boolean {
    return this.remove(STORAGE_KEYS.RECENT_SEARCHES);
  }

  getLanguage(): string | null {
    return this.get<string>(STORAGE_KEYS.LANGUAGE);
  }

  setLanguage(language: string): boolean {
    return this.set(STORAGE_KEYS.LANGUAGE, language);
  }
}

export const localStorageService = new LocalStorageService();
export default localStorageService;