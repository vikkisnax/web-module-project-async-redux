import { 
    SET_IS_FETCHING,
    PUNCHLINE,
    SEARCH_SUCCESS,
    SEARCH_FAIL 
} from '../actions/index';

const initialState = {
    // joke:'general',
    setup:'',
    punchline:'',
    error: '',
    isFetching: false
};


function reducer(state = initialState, action){
    // console.log('reducer', state.joke);
    switch(action.type){
        case SET_IS_FETCHING:
            // console.log('reducer-set-is-fetching:', action);
            return {
                ...state,
                isFetching: action.payload
            }
        case SEARCH_SUCCESS:
            console.log('reducer-success:', action);
            return{
                ...state,
                isFetching: false,
                setup: action.payload,
                error:''
            }
        case PUNCHLINE:
            console.log('reduer-punchline:', action);
            return{
                ...state,
                isFetching: false,
                punchline: action.payload,
                error: ''
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