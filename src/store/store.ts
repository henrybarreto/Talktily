import { createStore } from "redux";
import { enterReducer } from "./reduces"
// import { enterAction } from "./actions"

const TalktilyStore = createStore(enterReducer)

export default TalktilyStore