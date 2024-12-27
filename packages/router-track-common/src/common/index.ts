export let BASE_PATE: string = "/router-track";

export const SET_BASE_PATE = (path: string) => {
  BASE_PATE = path;
};

export enum FrameType {
  VUE2 = "vue2",
  VUE3 = "vue3",
  REACT = "react",
}
