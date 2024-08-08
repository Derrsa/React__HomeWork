import * as a from "./actionTypes.ts";
export const addConfig = (newConfig) => {
  return {
    type: a.ADD_CONFIG,
    payload: newConfig,
  };
};
