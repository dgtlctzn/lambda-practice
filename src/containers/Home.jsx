import React, { useState } from 'react';
import axios from "axios";

const Home = () => {

    const [joke, setJoke] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click")

        axios({
            method: "GET",
            url: "https://silly-poitras-9c824a.netlify.app/.netlify/functions/API"
        }).then(res => {
            console.log(res);
            setJoke(res.data.body.setup + "\n" + res.data.body.punchline);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <h1>Want to hear a joke?</h1>
            <button onClick={(e) => handleSubmit(e)}>Yes</button>
            <p>{joke}</p>
        </div>
    );
};

export default Home;