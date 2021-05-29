import React from 'react'
import './item.css'

export default function index(props) {
    return (
        <div id = 'container'>
            <span id = 'suggestionText'>
                {props.value}
            </span>
        </div>
    )
}
