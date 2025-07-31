import { useDebugValue, useSyncExternalStore } from "react";

const createStore = (createState) => {
  let state;
  const listeners = new Set();

  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state =
        replace || typeof nextState !== "object" || nextState === null
          ? nextState
          : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };

  const getState = () => state;
  const getInitialState = () => state;

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const api = { setState, getState, getInitialState, subscribe };
  state = createState(setState, getState, api);
  return api;
};

const identity = (arg) => arg;

export function useStore(api) {
  return useSyncExternalStore(
    api.subscribe,
    () => api.getState(),
    () => api.getInitialState()
  );
}

export function useStoreSelector(api, selector = identity) {
  const slice = useSyncExternalStore(
    api.subscribe,
    () => selector(api.getState()),
    () => selector(api.getInitialState())
  );
  useDebugValue(slice);
  return slice;
}

const initStore = (createState) => {
  const api = createStore(createState);

  const useBoundStore = (selector) => useStoreSelector(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};

export const create = (createState) =>
  createState ? initStore(createState) : initStore;

export default {
  create,
  useStore,
  useStoreSelector,
};
