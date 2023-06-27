import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PropTypes } from 'prop-types';

import infoHero from '../../resources/script/infoHero.js'
import mobileDetect from '../../resources/script/detect.js';

import './sliderCard.scss';


function SliderCard({openCard}){

    const [lifeSlider, setLifeSlider] = useState(true);

    const onChangeLife = (hero)=> {
        setLifeSlider(lifeSlider => !lifeSlider);
        moveSlider.transition.delay = 0;

        setTimeout(()=>{
            openCard(hero);
        }, 850)

    }

    const moveSlider = {
        initial: {
            opacity: 0,
            y: -10,
        },

        animate: {
            opacity: 1,
            y: 0,
        },

        exit: {
            opacity: 0,
        },

        transition: {
            duration: .8,
            delay: .9,
        }
    }

    if(mobileDetect){
        return (
            <AnimatePresence>
                {lifeSlider && (
                    <motion.section initial={moveSlider.initial} animate={moveSlider.animate} exit={moveSlider.exit} transition={moveSlider.transition} className='slider-card slider-card--mobile'>
                        {infoHero.map(item => <SliderCardItem key={item.id} title={item.name} hero={item.id} funcOpenCard={onChangeLife}/>)}
                    </motion.section>
                    )
                }
            </AnimatePresence>
        )
    } else {
        return (
            <AnimatePresence>
                {lifeSlider && (
                    <motion.section initial={moveSlider.initial} animate={moveSlider.animate} exit={moveSlider.exit} transition={moveSlider.transition} className='slider-card'>
                        {infoHero.map(item => <SliderCardItem key={item.id} title={item.name} hero={item.id} funcOpenCard={onChangeLife}/>)}
                    </motion.section>
                    )
                }
            </AnimatePresence>
        )
    }

    
}

function SliderCardItem({title, hero, funcOpenCard}){

    return (
        <motion.div id={`${hero}-icon`} onClick={()=> funcOpenCard(hero)} className='slider-card__item'>
            <p className='slider-card__item__text'>{title}</p>
        </motion.div>
    )
}

SliderCard.propTypes = {
    openCard: PropTypes.func,
}

SliderCard.defaultProps = {
    openCard: function(){
        console.log('Нет функции!');
    }
}

SliderCardItem.propTypes = {
    title: PropTypes.string,
    hero: PropTypes.string,
    funcOpenCard: PropTypes.func,
}

SliderCardItem.defaultProps ={
    title: 'Количество кликов: ',
    hero: 'default',
}

export default SliderCard;