import { useState } from 'react';
import useSound from 'use-sound';
import { motion, AnimatePresence } from 'framer-motion';

import './card.scss';


function Card({hero, text, music, clouseCard}){

    const [count, setCount] = useState(0);

    const [lifeCard, setLifeCard] = useState(true);

    const onClouseCard = ()=>{

        setLifeCard(lifeCard => !lifeCard);

        setTimeout(()=>{
            clouseCard('null');
        }, 800);
    }

    const onChangeCount = ()=>{
        setCount(count => count + 1)
    }

    const [play] = useSound(music);

    const variants = {
        animateLeft: {
            rotate: [0, 0, 45],
            background: 'black',
        },

        animateRight: {
            rotate: [0, 0, -45],
            background: 'black',
        },

        transition: {
            duration: 1,
            times: [0.3, 0.6, 0.9],
        },

    }

    return (
        <AnimatePresence>{
            lifeCard && (
                <motion.section className='card' exit={{opacity: 0}} transition={{duration: .6}}>

                    <aside>
                        <div className='list-hero'></div>
                    </aside>
                   

                    <div className='card__main-content'>

                        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: .6}} id={`${hero}-btn`} onClick={play} onPointerDown={()=> onChangeCount()} className='card__btn-hero'></motion.div>
                        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: 1.2}} className='card__text'>{text} {count}</motion.div>
                    
                    </div>

                   <aside className='sidebar'>
                        <motion.div whileHover={{scale: 1.1}} onClick={()=> onClouseCard()} transition={{duration: .3}} className='card__btn-exit'>
            
                            <motion.span animate={variants.animateRight} transition={variants.transition} className='card__btn-exit__left'></motion.span>
                            <motion.span animate={variants.animateLeft} transition={variants.transition} className='card__btn-exit__right'></motion.span>

                        </motion.div>

                        <motion.div id={`sidebar-${hero}`} className='sidebar-scale'>
                            
                            <motion.div className='sidebar-scale__line'>
                                <motion.div className='sidebar-scale__line__img'></motion.div>
                            </motion.div>

                            <p className='sidebar-scale__count'>Кликов для достижения цели: 0</p> {/* Сделать отображение количества оставшихся кликов */}
    
                        </motion.div>
                   </aside>

                </motion.section>
            )}  
        </AnimatePresence>
    )
}

export default Card;