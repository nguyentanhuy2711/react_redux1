const initialState = {
    list: [
        {
            id: 1,
            title: "Listen to music"
        },
    ],
    activeID: null,
}


const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newStateList = [...state.list];
            newStateList.push(action.payload);
            return {
                ...state,
                list: newStateList,
            }
        }
        case 'SET_ACTIVE_HOBBY': {
            const newActiveId = action.payload.id;
            console.log("aa", newActiveId);
            return {
                ...state,
                activeID: newActiveId,
            }
        }
        default: return state;
    }

}
export default hobbyReducer;