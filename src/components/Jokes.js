import React, {useState} from 'react';
import { connect } from 'react-redux';

//import actions
import { searchJoke } from '../actions/index';


const Jokes = (props) => {
    console.log('props:', props)
    const [joke, setJoke] = useState('');
    
    const handleChanges = e => {
        setJoke(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.searchJoke(joke);
        console.log("jokes:", joke);
    }

        return (
            <div className='joke-container'>
                <h3>Jokes Comp</h3>
                <div className='joke-input'>
                    <h4>Search Type of Joke:</h4>
                    <input
                    onChange={handleChanges}
                    type="text"
                    id="jokeInput"
                    name="jokeInput"
                    // value={joke}
                    />
                </div>
                <button 
                    onClick={handleSubmit}>Search
                </button>
            </div>
        );
    }

//connect store to this comp. what props do you need from initial state?
const mapStateToProps = state => {
    return {
        type: state.type,
        setup: state.setup,
        punchline: state.punchline
    }
}

export default connect(mapStateToProps, {searchJoke})(Jokes);