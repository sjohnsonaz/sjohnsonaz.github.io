"use client";

import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useRef,
} from "react";

export const CopyContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setValue: (value: string) => {},
  copy: async () => {},
});

export const CopyContextProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const valueRef = useRef("");

  const setValue = useCallback((value: string) => {
    valueRef.current = value;
  }, []);

  const copy = useCallback(() => {
    return navigator.clipboard.writeText(valueRef.current);
  }, []);

  return (
    <CopyContext.Provider value={{ setValue, copy }}>
      {children}
    </CopyContext.Provider>
  );
};

export const useCopyContext = () => useContext(CopyContext);
