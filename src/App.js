import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search';
import Dropdown from  './components/Dropdown'

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

const options =[
     { label :"The color Red",
       value : "red"
     },

     { label :"The color Blue",
     value : "Blue"
     },

   { label :"The color Green",
   value : "Green"
    }
]

export default () => {
    return (
        <div>
            <Dropdown options = {options} />
        </div>
    );
};