import { FETCH_TODOS } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payloads
    default:
      return state
  }
}
