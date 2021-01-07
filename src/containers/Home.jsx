import React, { useState } from 'react';
import axios from "axios";

const Home = () => {

    const [joke, setJoke] = useState("");
    const [punchline, setPunchline] = useState("");
    const [showPunchline, setShowPunchline] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click")
        setShowPunchline(false)

        axios({
            method: "GET",
            url: "https://silly-poitras-9c824a.netlify.app/.netlify/functions/API"
        }).then(res => {
            console.log(res);
            const {setup, punchline} = res.data.body[0];
            setJoke(setup);
            setPunchline(punchline);
        }).catch(err => {
            console.log(err);
        })
    }

    const handleTellMe = () => {
        setShowPunchline(true);
    }

    return (
        <div>
            <h1>Want to hear a joke?</h1>
            <button onClick={(e) => handleSubmit(e)}>Yes</button>
            <p>{joke}</p>
            {joke.length ? <button onClick={handleTellMe}>Tell me!</button> : <></>}
            {showPunchline ? <p>{punchline}</p> : <></>}
        </div>
    );
};

export default Home;