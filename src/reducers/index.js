import { SEARCH_JOKE } from '../actions/index';

const initialState = {
    type:'hi',
    setup:'',
    punchline:'',
    id:''
};


function reducer(state = initialState, action){
    switch(action.type){
        case (SEARCH_JOKE):
            console.log("reducer was updated!")
            return ({
                ...state,
                type: action.payload
            });
        default:
            return (state);
    }
}

export default reducer;