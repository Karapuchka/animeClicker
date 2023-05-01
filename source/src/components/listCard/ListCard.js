import { useState } from 'react';
import { motion } from 'framer-motion';

import './listCard.scss'

const listHero = ['kaz', 'meg', 'dark'];

function ListCard({funcOpenCard}){

    const moveCard = {

        start: {
            opacity: 0,
            y: -20,
        },

        end: {
            opacity: 1,
            y: 0,
        }
    }

    return (
        <motion.ul initial={moveCard.start} animate={moveCard.end} transition={{duration: .7, delay: .9}} className="list-card">
            {listHero.map(item => <IconHero key={item} funcOpenCard={funcOpenCard} hero={item}/>)}
        </motion.ul>
    )
}

function IconHero({hero, funcOpenCard}){

    let nameHero;

    switch (hero) {

        case 'meg':

            nameHero = 'Мегумин';

            break;

        case 'kaz':
        
            nameHero = 'Казумусик';

            break;

        case 'dark':
        
            nameHero = 'Даркнесс';

            break;
    }
    
    return (
        <li id={hero} onClick={()=> funcOpenCard(hero)} className='list-card__item'>
            <p className='list-card__item__title'>{nameHero}</p>
        </li>
    )
}

export default ListCard;