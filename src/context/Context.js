import React from "react";

export const ThongkeContext = React.createContext({
  contextData: [10, 9, 7, 3, 6.5, 9, 7.6, 5.3, 9.4, 6, 8, 2.9],
  setContextData: () => { }
});
