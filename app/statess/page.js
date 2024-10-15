 "use client"
import React from 'react';

export default function UsoState() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = React.useState(0);

    function HandleClick (){
        console.log("Like clique")
        setLikes(likes + 1)
    }

    return (
        <div>
            <header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={HandleClick}>Like ({likes}) e</button>
        </div>

    );
}