class LocalStorageService {
    // Get an item from localStorage
    static get(key: string): any | null {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
  
    // Set an item in localStorage
    static set(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    // Remove an item from localStorage
    static remove(key: string): void {
      localStorage.removeItem(key);
    }
  
    // Clear all items from localStorage
    static clear(): void {
      localStorage.clear();
    }
}

export default LocalStorageService;