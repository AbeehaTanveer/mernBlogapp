import React, { useState } from 'react';
import { createContext } from 'react';

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState({ username: '', name: '' });

  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
export { DataContext };
