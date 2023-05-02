import { useState } from 'react';
import useSound from 'use-sound';
import { motion, AnimatePresence } from 'framer-motion';

import './card.scss';


function Card({hero, text, music}){

    const [count, setCount] = useState(0);

    const onChangeCount = ()=>{
        setCount(count => count + 1)
    }

    const [play] = useSound(music);

    const variants = {
        animateLeft: {
            opacity: [0, 1, 1],
            rotate: [0, 0, 45],
            background: 'black',
        },

        animateRight: {
            opacity: [0, 1, 1],
            rotate: [0, 0, -45],
            background: 'black',
        },

        transition: {
            duration: 1,
            times: [0.3, 0.6, 0.9],
        },

    }

    return (
        <section className='card'>
            <motion.div className='card__btn-exit'>
                <motion.span animate={variants.animateRight} transition={variants.transition} className='card__btn-exit__left'></motion.span>
                <motion.span animate={variants.animateLeft} transition={variants.transition} className='card__btn-exit__right'></motion.span>
            </motion.div>
            <div id={`${hero}-btn`} onClick={play} onPointerDown={()=> onChangeCount()} className='card__btn-hero'></div>
            <div className='card__text'>{text} {count}</div>
        </section>
    )
}

/* Доделать анимацию при наведении на кнопку выхода
    Доделать анимацию при нажатии на кнопку перса
    Доделать анимацию при удалении компонента
    Сделать смену персов
    Добавить других персов
    Добавить шкалу
    Добавить достижения */

export default Card;