import { SORT_TRUSTPILOT } from './actions'

function sorting(state, action) {
  switch (action.type) {
    case SORT_TRUSTPILOT:
      return Object.assign({}, state, {
        trustpilot: action.order
      })
      break;
    default:
      return state
  }
}

function companies(state, action) {
  switch (action.type) {
    case SORT_TRUSTPILOT:
      console.log('sorting')
      return state.sort((a, b) => {
        let aTrust = (a.trustpilot) ? a.trustpilot : 0
        let bTrust = (b.trustpilot) ? b.trustpilot : 0
        switch (action.order) {
          case "2":
            return bTrust - aTrust
            break;
          case "3":
            return aTrust - bTrust
            break;
          default:
            return bTrust
        }
      })
      break;
    default:
      return state
  }
}

export default function appStore(state, action) {
  switch(action.type) {
    case SORT_TRUSTPILOT:
      return Object.assign({}, state, {
        sorting: sorting(state.sorting, action),
        companies: companies(state.companies, action)
      })
      break;
    default:
      return state
  }
}
