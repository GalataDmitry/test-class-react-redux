
const initialState = {
    quotes: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'QUOTES_LOADED':
            return {
                quotes: action.payload
            }

        default:
            return state
    }

}

export default reducer