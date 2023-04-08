import { 
    SEARCH_JOKE,
    SEARCH_SUCCESS,
    SEARCH_FAIL 
} from '../actions/index';

const initialState = {
    joke:'general',
    setup:'',
    punchline:'',
    error: '',
    isFetching: false
};


function reducer(state = initialState, action){
    console.log('reducer', state.joke);
    switch(action.type){
        case SEARCH_JOKE:
            console.log("reducer was updated!")
            return {
                ...state,
                joke: action.payload,
                isFetching: true,
                error:''
            };
        case SEARCH_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error:''
            }
        case SEARCH_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;