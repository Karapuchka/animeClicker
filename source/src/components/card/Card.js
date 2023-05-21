import { useState } from 'react';
import useSound from 'use-sound';
import { motion, AnimatePresence } from 'framer-motion';

import countClick from '../../resources/script/countClick.js';

import './card.scss';

countClick.validHeros(['meg', 'kaz', 'dark']);

function Card({hero, text, music, clouseCard}){

    const [remainderClick, setRemainderClick] = useState(100);

    const [lifeCard, setLifeCard] = useState(true);

    const [lineShow, setLineShow] = useState({x: 0});

    const [lineImgShow, setLineImgShow] = useState({rotate: 0});

    const showIndivator = ()=>{
        let objLine = Object.assign(lineShow);
    
        objLine.x = Number(Number((270 / 100).toFixed(1)) + Number(lineShow.x.toFixed(1)));

        setLineShow(objLine);

        let objImg = Object.assign(lineImgShow);

        if(objImg.rotate === -15){

            objImg.rotate = 0;

        } else {

            objImg.rotate = -15;

        }

        setLineImgShow(objImg);

        setRemainderClick(remainderClick => remainderClick - 1);
    }

    const onClouseCard = ()=>{

        setLifeCard(lifeCard => !lifeCard);

        setTimeout(()=>{
            clouseCard('null');
        }, 800);
    }

    const variantsBtnExit = {
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
                   
                    <MainBtn hero={hero} text={text} music={music} funcIndicatro={showIndivator} remainderClick={remainderClick}/>

                   <aside className='sidebar'>
                        <motion.div whileHover={{scale: 1.1}} onClick={()=> onClouseCard()} transition={{duration: .3}} className='card__btn-exit'>
            
                            <motion.span animate={variantsBtnExit.animateRight} transition={variantsBtnExit.transition} className='card__btn-exit__left'></motion.span>
                            <motion.span animate={variantsBtnExit.animateLeft} transition={variantsBtnExit.transition} className='card__btn-exit__right'></motion.span>

                        </motion.div>

                        <motion.div id={`sidebar-${hero}`} className='sidebar-scale'>
                            
                            <motion.div className='sidebar-scale__indicator'>

                                <motion.div animate={lineShow} transition={{duration: .4}} className='sidebar-scale__indicator__line sidebar-scale__indicator__line--show'>
                                    <motion.div animate={lineImgShow} transition={{duration: .4}} className='sidebar-scale__indicator__line__img'></motion.div>
                                </motion.div>

                                <motion.div className='sidebar-scale__indicator__line'></motion.div>

                            </motion.div>

                            <p className='sidebar-scale__count'>Кликов для достижения цели: {remainderClick}</p> {/* Сделать отображение количества оставшихся кликов */}
    
                        </motion.div>
                   </aside>

                </motion.section>
            )}  
        </AnimatePresence>
    )
}

function MainBtn({hero, text, music, funcIndicatro, remainderClick}){

    const [count, setCount] = useState(Number(window.localStorage.getItem(hero)));

    const [btnMainShow, setBtnMainShow] = useState({animate: {opacity: 1, y: 0, rotate: 0}, transition: {duration: 0.7, delay: 0.2}});

    const [play] = useSound(music);

    const onChangeCount = ()=>{

        if(remainderClick !== 0){

            setCount(count => count + 1)


            let objMainBtn = Object.assign(btnMainShow);
            
            if(objMainBtn.animate.rotate === 0){

                objMainBtn.animate.rotate = -5;
                objMainBtn.transition.duration = .2;
                objMainBtn.transition.delay = 0; 

            } else if(objMainBtn.animate.rotate === -5) {

                objMainBtn.animate.rotate = 5;

            } else {

                objMainBtn.animate.rotate = -5; 
            }

            setBtnMainShow(objMainBtn);

            play();

            countClick.setCount(hero, Number(window.localStorage.getItem(hero)) + 1)

            funcIndicatro();
        }
        /* Код для вывода достижения */
    }   

    switch (hero) {
        case 'meg':

            return(
                <div className='card__main-content'>
                    <motion.div initial={{opacity: 0, y: 10}} animate={btnMainShow.animate} transition={btnMainShow.transition} id={`${hero}-btn`} onPointerDown={()=> onChangeCount()} className='card__btn-hero'></motion.div>
                    <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: .4}} className='card__text'>{text} {count}</motion.div>
                </div>                
            )

            break;

        case 'kaz': 

            return(
                <div className='card__main-content'>
                    <motion.div initial={{opacity: 0, y: 10}} animate={btnMainShow.animate} transition={btnMainShow.transition} id={`${hero}-btn`} onPointerDown={()=> onChangeCount()} className='card__btn-hero'></motion.div>
                    <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: .4}} className='card__text'>{text} {count}</motion.div>
                </div>
            )

            break;

        case 'dark': 

            return(
                <div className='card__main-content'>
                    <motion.div initial={{opacity: 0, y: 10}} animate={btnMainShow.animate} transition={btnMainShow.transition} id={`${hero}-btn`} onPointerDown={()=> onChangeCount()} className='card__btn-hero'></motion.div>
                    <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: .4}} className='card__text'>{text} {count}</motion.div>
                </div>
            )
            break;

        default:
            break;
    }

}

export default Card;