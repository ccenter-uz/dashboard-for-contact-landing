import { useContext, useState } from "react";
import { createContext } from "react";

export const Context = createContext();
const MainContext = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <Context.Provider value={[data, setData]}>{children}</Context.Provider>
  );
};

export default MainContext;

const useData = () => {
  const [data, setData] = useContext(Context);
  return {
    data,
    setData,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export { useData };
