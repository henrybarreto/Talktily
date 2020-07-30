import { createStore } from "redux";
import { enterReducer } from "./reduces"

const appStore = createStore(enterReducer)

export default appStore