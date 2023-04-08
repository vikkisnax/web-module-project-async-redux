import axios from 'axios';

export const SEARCH_JOKE = 'SEARCH_JOKE'; //action type
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

export const searchJoke = (joke) => dispatch => { // action
    console.log("actions:", joke);

    dispatch({ 
        type: SEARCH_JOKE, 
        //need the payload to update joke property in initial state
        payload: joke
    });
    axios
        .get(`https://official-joke-api.appspot.com/random_joke`)
        .then(res => {
            console.log(res);
            dispatch(searchSuccess(res.data.results))}
        )
        .catch(err => 
            dispatch(searchFail)
        );
};

export const searchSuccess = (success) => {
    return({type: SEARCH_SUCCESS, payload: success});
}

export const searchFail = () => {
    return({type: SEARCH_FAIL, 
        // payload: err.response.status
    });
}