/* eslint-disable react/prop-types */
// import { createContext, useState, useMemo } from 'react';

// export const EmailContext = createContext([]);

// export default function SetEmail({ children }) {
//   const [email, setEmail] = useState([]);
//   const value = useMemo(() => ({ email, setEmail }), [email]);
//   return <EmailContext.Provider value={value}>{children}</EmailContext.Provider>;
// }

import { createContext, useState, useMemo } from 'react';

export const Context = createContext([]);

export default function UseContext({ children }) {
  const [context, setContext] = useState([]);
  const value = useMemo(() => ({ context, setContext }), [context]);
  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  );
}
