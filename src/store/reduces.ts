const ENTER_INITIAL_STATE = { username: "", yn: false, terms: false }

export function enterReducer(state = ENTER_INITIAL_STATE, action: any)
{
  switch(action.type)
  {
    case "ENTER":
      return ({ ...state, username: action.username, yn: action.yn, terms: action.terms })
    default:
      return state
  }
}