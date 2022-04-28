
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import store from '../redux/store'

let query = 'tesla'
let page = 1
const apiKey = 'a9e662d79851404b867ac06b5a038b8e';
export default function News() {

    const [value, setValue] = useState([])

    let posts = []
    function loadNews(query, page) {
        console.log(query, page)
        axios.get(`https://newsapi.org/v2/everything?q=${query}&page=${page}&sortBy=publishedAt&apiKey=${apiKey}`)
            .then(res => {
                res.data.articles.forEach(element => {
                    posts.push(element)
                });
                posts.splice(store.getState()['newsNumber'])//пишу через сплайс потому что не нашел параметр в доках(вроде бы его там нет)

                setValue(posts)
            }) 
    };

    useEffect(() => {
        loadNews('tesla', page)
    }, [])


    return (
        <div>
            <div className='searchOptions'>
            {page}
            <input onKeyDown={e => {
                if (e.key === 'Enter') {
                    page = (1)
                    query = (e.target.value)
                    loadNews(e.target.value, page)
                }
            }} />

            <button onClick={() => {
                page = (page - 1);
                if (page === 0) page = (1);
                loadNews(query, page)
            }}>prev</button>

            <button onClick={() => {
                page = (page + 1);
                loadNews(query, page)
            }}>next</button>
            </div>
            <div className='newsContainer'>
            {value.map(el => {
                return (
                    <div className='newspaperElement'> 
                        <img src={el.urlToImage} className='newspaperImage'/>
                        <div><h3>{el.title}</h3></div>
                        <div> {el.content} </div>
                        <a href={el.url}>go to </a>
                        <div>Author: {el.author}</div>
                    </div>
                )
            })}
            </div>
        </div>
    );
}