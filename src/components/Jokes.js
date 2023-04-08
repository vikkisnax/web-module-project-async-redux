import React, {useState} from 'react';
import { connect } from 'react-redux';

//import actions
import { searchJoke } from '../actions/index';


const Jokes = (props) => {
    console.log('props:', props.setup)
    // const { joke, setup, punchline, error, isFetching } = props;
    const [joke, setJoke] = useState('');
    
    const handleChanges = e => {
        setJoke(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.searchJoke('cat');
        console.log("jokes:", joke);
    }

        return (
            <div className='joke-search-container'>
                <h3>Jokes Comp</h3>
                <div className='joke-input'>
                    <h4>Search Type of Joke:</h4>
                {/* look at 1:08 help */}
                    <input
                    onChange={handleChanges}
                    type="text"
                    id="jokeInput"
                    name="jokeInput"
                    />
                </div>
                <button 
                    onClick={handleSubmit}>Search
                </button>
            <div className='joke-container'>
                <p>hi</p>
                <p>{props.setup}</p>
            </div>
            </div>
        );
    }

//connect store to this comp. what props do you need from initial state?
const mapStateToProps = state => {
    return {
        joke: state.joke,
        setup: state.setup,
        punchline: state.punchline
    }
}

export default connect(mapStateToProps, {searchJoke})(Jokes);