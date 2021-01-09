import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

// function useLocalStorage(key) {
//   // pull the initial value from local storage if it is already set
//   const [state, setState] = useState(() => {
//     const exValue = window.localStorage.getItem(key)
//     if (exValue) {
//       return JSON.parse(exValue)
//     }
//     return null
//   })

//   // save the new value when it changes
//   useEffect(() => window.localStorage.setItem(key, JSON.stringify(state)), [state])

//   // memoize a storage watcher callback back because everything in hooks should be memoized
//   const storageWatcher = useCallback((e) => {
//     if (e.newValue) {
//       // update ours if we
//       setState((currState) => {
//         const newDat = JSON.parse(e.newValue || "null")
//         return newDat == state ? newDat : currState
//       })
//     }
//     console.log(state)
//   }, [state])

//   // install the watcher
//   useEffect(() => {
//     window.addEventListener("storage", storageWatcher)
//     // stop listening on remove
//     return () => {
//       window.removeEventListener("storage", storageWatcher)
//     }
//   }, [state])
//   return [state, setState]
// }

export default useLocalStorage;