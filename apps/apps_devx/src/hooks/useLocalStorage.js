import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  // init state wiht value from localStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage: ", error);
      return initialValue;
    }
  });

  // update localstorage whenever the value change
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
