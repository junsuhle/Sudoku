export default function reducer(state={
    selectorHidden: true
  }, action) {
    switch (action.type) {
      case "SHOW_SELECTOR": {
        return {...state, selectorHidden: false}
      }
      case "HIDE_SELECTOR": {
        return {...state, selectorHidden: true}
      }
      default:
      	return state; 
    }
}