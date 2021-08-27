import {defaultStyles, defaultTitle} from "@/constans";
import {clone} from "@core/utils";

export const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
  openedDate: new Date().toJSON()
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: '',
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState);
}
