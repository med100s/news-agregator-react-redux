export default function newsNumber(state = 10, action) {
    switch (action.type) {
        case 'CHANGE_NEWS_NUMBER':
            action.number = Math.floor(action.number)
            state = action.number
            if (isNaN(state)) state = 5
            return state
        default:
            return state
    }
}