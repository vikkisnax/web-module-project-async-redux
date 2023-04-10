import React, {useState} from 'react';
import { connect } from 'react-redux';

//import actions
import { searchJoke } from '../actions/index';


const Jokes = (props) => {
    console.log('props:', props.setup)

    const handleSubmit = e => {
        e.preventDefault();
        props.searchJoke();
    }

    if (props.error) {
        return <h2>There's an error: {error}</h2>
    }
    if (props.isFetching) {
        return <h2>Fetching joke</h2>
    }

        return (
            <div className='joke-container'>
                {/* <h3>Jokes Comp</h3> */}
                <p/>
                <button onClick={handleSubmit}>
                    Random Joke
                </button>
                {/* <p>joke should here</p> */}
                <p>{props.setup}</p>
                <p>{props.punchline}</p>
            </div>
        );
    }

//connect store to this comp. what props do you need from initial state?
const mapStateToProps = state => {
    return {
        // joke: state.joke,
        setup: state.setup,
        punchline: state.punchline,
        error: state.error,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {searchJoke})(Jokes);