import React from 'react';
import axios from "axios";

const Home = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click")

        axios({
            method: "GET",
            url: "https://silly-poitras-9c824a.netlify.app/.netlify/functions/API"
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <h1>Try some lambda!</h1>
            <button onSubmit={handleSubmit}>Press</button>
        </div>
    );
};

export default Home;