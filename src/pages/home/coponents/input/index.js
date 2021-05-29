import { React, useState, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import Item from './item'
import './input.css';

const suggestions = [
    'Pikachu',
    'Pikachu1',
    'Pikachu2',
    'Pikachu3',
    'Pikachu4',
    'Pikachu5'
]
export default function Input() {
    const [shouldShowSuggestion, setShouldShowSuggestion] = useState(false);
    const inputEl = useRef(null);
    const onChange = () => {
        console.log("change");
    }
    const onFocus = () => {
        setShouldShowSuggestion(true);
    }
    const onBlur = () => {
        console.log("onBlur");
        setShouldShowSuggestion(false);
    }

    return (
        <div className='container'>
            <div className='inputContainer'>
                <input
                    placeholder="Search..."
                    onFocus={ onFocus }
                    onBlur={ onBlur }
                    onChange={ onChange } />
                <div className='iconContainer'>
                    <FiSearch size='20px' color='rgb(173, 173, 173)' />
                </div>
            </div>
            <div id='sugesstion_container'
                style={ shouldShowSuggestion
                    ? {maxHeight: '320px'}
                    : { maxHeight: '0px'}}
                >
                <hr id='device' />
                <div id = 'listItem'>
                    {suggestions.map(suggestion => 
                        <Item value={suggestion}/>)
                    }
                </div>
                
            </div>
        </div>
    )
}
