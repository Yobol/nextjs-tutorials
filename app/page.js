import { useState } from 'react';

function Header(props) {
    // The use the title prop, add curly braces {}.
    return <h1>{`Cool ${props.title ? props.title : 'Default'}`}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="React" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{ name }</li>
                ))}
            </ul>
            {/* In React, event names are camelCased. */}
            <button onClick={handleClick}>Like({likes})</button>
        </div>
    )
}
