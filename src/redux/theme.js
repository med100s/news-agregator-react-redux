export default function theme(state = 'dark', action) {
    switch (action.type) {
        case 'CHANGE_THEME':
            if (state === 'dark') state = 'light'
            else state = 'dark'
            return state
        default:
            return state
    }
}