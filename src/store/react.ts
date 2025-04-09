import {createContext, useContext} from "react";
import {Store} from "./store.ts";

export const StoreContext = createContext<Store | null>(null);

export function useStore(): Store {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("Store is not defined");
  }
  return store;
}