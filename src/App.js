import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search';

const items = [
    {
     title: 'Is Antartica a continent?',
     content:" Antartica is a continent, located in the most southern most hemisphere"   
    },

    {
        title: "what is the Aurerea Borealis",
        content: "The Aurerea Borealis is the most populare of the .."
    },

    {
        title: "Do fishes survive in Antatica?",
        content: "We have fishes living in the Antartic but of limited species"
    }
]


export default () => {
    return (
        <div>
            <Search />
        </div>
    )
};