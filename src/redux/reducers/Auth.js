
const initialState= {
    token: localStorage.getItem('auth_token'),
    user: null,
    loading: false,
    message: ''
}

const auth = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
                loading: false
            }
        case 'SIGNOUT_SUCCESS': {
            return {
                ...state,
                token: null,
                redirect: '/',
                loading: false
            }
        }
        case 'SHOW_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'SHOW_AUTH_MESSAGE':
            return {
                ...state,
                message: action.message
            }
        case 'HIDE_AUTH_MESSAGE':
            return {
                ...state,
                message: ''
            }
        default:
            return state
    }
}

export default auth