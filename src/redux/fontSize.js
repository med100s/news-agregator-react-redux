export default function fontSize(state = 22, action) {
  switch (action.type) {
    case 'INCREMENT_FONTSIZE':
      return state + 1
    case 'DECREMENT_FONTSIZE':
      return state - 1
    default:
      return state
  }
}