import React, { useEffect } from 'react';

import store from '../redux/store'

export default function Options() {

    store.subscribe(() => {
        let counter = document.querySelector('.fontSize')
        let newsCounter = document.querySelector('.newsPerPage')

        counter.textContent = store.getState().fontSize
        newsCounter.textContent = store.getState().newsNumber
    })

    useEffect(() => {
        store.dispatch({ type: 'INIT_APPLICATION' })
    }, [])

    return (
        <div>
            This is Options
            <p>
                this is text optinos
                <button onClick={() => store.dispatch({ type: 'DECREMENT_FONTSIZE' })}>DECREMENT</button>
                <button onClick={() => store.dispatch({ type: 'INCREMENT_FONTSIZE' })}>INCREMENT</button>
                <span className='fontSize'></span>
            </p>

            <p>
                this is theme optinos
                <button onClick={() => store.dispatch({ type: 'CHANGE_THEME' })}>CHANGE_THEME</button>
            </p>

            <p>
                this is news options(max 20)
                <input
                    onKeyDown={e => {
                        let value = parseInt(e.target.value)
                        if (e.key === 'Enter' && typeof (value) === 'number' && value >= 1) {
                            value = Math.floor(value)
                            store.dispatch({ type: 'CHANGE_NEWS_NUMBER', number: e.target.value })
                        }
                    }} />
                <span className='newsPerPage'></span>
            </p>
            <p>
                <button onClick={() => console.log(store.getState())}>GETSTATE</button>
            </p>


        </div>
    )
}