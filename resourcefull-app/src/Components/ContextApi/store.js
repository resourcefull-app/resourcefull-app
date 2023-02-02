import { createContext, useState } from "react";

const store = createContext({
  validate: true,
  handleValidate: () => {},
});

export const ContextProvider = (props) => {
  const [state, setstate] = useState(true);

  const stateUpdateHandler = () => {
    setstate(true);
  };

  return (
    <store.Provider
      value={{ validate: state, handleValidate: stateUpdateHandler }}
    >
      {props.children}
    </store.Provider>
  );
};

export default store;
