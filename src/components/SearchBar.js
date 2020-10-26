import React, { useState } from 'react';

const SearchBar = ({onTermSubmit}) =>{
    const [term, setTerm] = useState('');

    // arrow function are need if you're going to pass a function as a call to a child element
    const onFormSubmit = (event) =>{
        event.preventDefault(); //this prevents an auto refresh of page once submit is pushed
        //TODO: Make sure we call callback from parent component. onTermSubmit is a props from the passed from the parent
        onTermSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div classNames="field">
                    <label>Video Search</label>
                    <input 
                        type="text"
                        onChange={event => setTerm(event.target.value)} 
                        value={term} />
                </div>
            </form>
        </div>
     );
}

export default SearchBar;