import {
    createContext,
    useContext,
    useState,
} from 'react';

const SavedContext = createContext(null);

export function SavedProvider({ children }) {
  const [savedResources, setSavedResources] = useState([]);

  const toggleSaved = (resource) => {
    setSavedResources((current) => {
      const alreadySaved = current.some(
        (item) => item.id === resource.id
      );

      if (alreadySaved) {
        return current.filter(
          (item) => item.id !== resource.id
        );
      }

      return [...current, resource];
    });
  };

  const isSaved = (id) => {
    return savedResources.some(
      (item) => item.id === id
    );
  };

  return (
    <SavedContext.Provider
      value={{
        savedResources,
        toggleSaved,
        isSaved,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  const context = useContext(SavedContext);

  if (!context) {
    throw new Error(
      'useSaved must be used inside SavedProvider'
    );
  }

  return context;
}