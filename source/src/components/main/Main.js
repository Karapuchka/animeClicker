import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import ListCard from '../listCard/ListCard';
import Card from '../card/Card';

import './Main.scss';

function Main (){

    const [openCard, setOpenCard] = useState('list');

    const onChangeOpenCard = (value)=>{
        setOpenCard(value);

        console.log(openCard);
    }

    const onChangeCard = (cardName) => {
        setOpenCard(cardName);
    }

    switch (openCard) {

        case 'list':

            return (
                <main className="main">
                    <ListCard closeList={onChangeOpenCard}/>
                </main>
            )
            
        break;


        case 'meg':

            return (
                <main className="main">
                    <Card />
                </main>
            )
                
        break;

        case 'dark':

            return (
                <main className="main">
                    <Card />
                </main>
            )
            
        break;

        case 'kaz':

            return (
                <main className="main">
                    <Card />
                </main>
            )
            
        break;

        default: 
    }
}

export default Main;