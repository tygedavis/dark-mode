import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {

//State Properties---
  const [storedValue, setStoredValue] = useState(() => {
    //Get from local storage by key---
    const item = window.localStorage.getItem(key);
    //Parse and return stored json or if undefined return initialValue---
    return item ? JSON.parse(item) : initialValue;

//Functions---
    const setValue = value => {
      //Save State
      setStoredValue(value);
      //Save to local storage
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  });
  //Return storedValue in an array
  return [storedValue, setValue];
};

export default useLocalStorage;