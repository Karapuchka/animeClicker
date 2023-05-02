import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './listCard.scss'

const listHero = ['kaz', 'meg', 'dark'];

function ListCard({funcOpenCard}){

    const [lifeList, setLifeList] = useState(true);

    const onCloseList = (hero)=>{

        if(hero === 'kaz' || hero === 'dark'){
            console.log('Персонаж ещё не готов!');
        } else {
            setLifeList(lifeList => !lifeList);

            moveCard.time.delay = 0;
    
            setTimeout(()=>{
                funcOpenCard(hero); 
            }, 750);
        }
    }

    const moveCard = {

        initial: {
            opacity: 0,
            y: -20,
        },

        animate: {
            opacity: 1,
            y: 0,
        },

        exit: {
            opacity: 0,
            y: 20,
        },

        time: {
            duration: .7,
            delay: .9,
        }
    }

    return (
        <AnimatePresence>
            {lifeList && (
                <motion.ul initial={moveCard.initial} animate={moveCard.animate} exit={moveCard.exit} transition={moveCard.time} className="list-card">
                    {listHero.map(item => <IconHero key={item} onCloseList={onCloseList} hero={item}/>)}
                </motion.ul>
            )}
        </AnimatePresence>
    )
}

function IconHero({hero, onCloseList}){

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
        <li id={hero} onClick={()=> onCloseList(hero)} className='list-card__item'>
            <p className='list-card__item__title'>{nameHero}</p>
        </li>
    )
}

export default ListCard;