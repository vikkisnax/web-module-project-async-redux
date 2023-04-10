import axios from 'axios';

//action type
export const PUNCHLINE = 'PUNCHLINE'; 
export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

export const searchJoke = () => dispatch => { // action
    // console.log("actions:", setup);
    dispatch(setIsFetching(true)); //updating isFetching in initial state
    axios
        .get('https://official-joke-api.appspot.com/random_joke')
        .then(res => {
            console.log(res);
            const joke = res.data.setup;
            const answer = res.data.punchline;
            dispatch(searchSuccess(joke));
            setTimeout(() => {
                dispatch(punchline(answer));}, 5000);
        })
        .catch(err => {
            const msg = err.message;
            // or is it \/ ??
            // const msg = error.message;
            dispatch(searchFail(msg))}
        );
};

const setIsFetching = (isfetching) => {
    return{
        type: SET_IS_FETCHING, payload: isfetching
    }
}

const searchSuccess = (joke) => {
    return({
        type: SEARCH_SUCCESS, 
        payload: joke
    });
}

const punchline = (answer) => {
    return({
        type: PUNCHLINE,
        payload: answer
    })
}

const searchFail = (error) => {
    return({
        type: SEARCH_FAIL, 
        payload: error
        // i passed the error msg in the .catch to searchFail's payload
    });
}