const initialState = {
data:{},
}

const weatherReducer = (state = initialState, action) => {
    console.log(action, state, "state and action values")
    switch (action.type) {
        case 'WEATHERINFO':
            console.log(state,action)
            return {
                    ...state,
                   data: action.payload
            }
        default:
            return state;
    }

}
export default weatherReducer;