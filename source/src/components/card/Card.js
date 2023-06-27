import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { motion, AnimatePresence } from 'framer-motion';

import countClick from '../../resources/script/countClick.js';
import ModalAchiev from '../modalAchiev/ModalAchiev.js';
import AchievPanel from '../achievPanel/AchievPanel.js';
import mobileDetect from '../../resources/script/detect.js';

import './card.scss';

countClick.validHeros(['meg', 'kaz', 'dark']);

function Card({hero, text, music, clouseCard}){

    const [remainderClick, setRemainderClick] = useState();

    const [lifeCard, setLifeCard] = useState(true);

    const [lineShow, setLineShow] = useState({x: 0});

    const [lineImgShow, setLineImgShow] = useState({rotate: 0});

    const [achievShow, setAchievShow] = useState(false);

    const [scoreItem, setScoreItem] = useState(0);

    const [showBurgerBtn, setShowBurgerBtn] = useState({lineOne: {rotate: 0, x: '0', y: '5%'}, lineTwo: {opacity: 1}, lineThree:{ rotate: 0, x: '0', y: '5%'},});

    const [showMobileAchievPanel, setShowMobileAchievPanel] = useState({x: '-100%', opacity: 0});

    useEffect(()=>{
        let countHero = window.localStorage.getItem(hero);

        let objLine = Object.assign(lineShow);

        if(countHero < 100){

            setRemainderClick(100 - (countHero));

            objLine.x = 270 / 100 * countHero;

            setLineShow(objLine);

        } else if(countHero < 300){

            setRemainderClick((300 - 100) - (countHero - 100));

            objLine.x = 270 / 100 / 3 * countHero;

            setLineShow(objLine);

        } else if(countHero < 500){

            setRemainderClick((500 - 300) - (countHero - 300));

            objLine.x = 270 / 100 / 5 * countHero;

            setLineShow(objLine);

        } else if(countHero < 800){

            setRemainderClick((800 - 500) - (countHero - 500));

            objLine.x = 270 / 100 / 8 * countHero;

            setLineShow(objLine);

        } else if(countHero < 1000){

            setRemainderClick((1000 - 800) - (countHero - 800));

            objLine.x = 270 / 100 / 10 * countHero;

            setLineShow(objLine);

        } else if (countHero > 1000){

            setRemainderClick(Infinity);

        }

    })

    const showIndivator = ()=>{

        let heroScore = window.localStorage.getItem(hero);

        if(heroScore == 100 || heroScore == 300 || heroScore == 500 || heroScore == 800 || heroScore == 1000){
            onShowModalAchiev();
        }

        let objLine = Object.assign(lineShow);

        let step = 0;

        if(heroScore < 100){
            step = 1;
        } else if (heroScore < 300) {
            step = 3;
        }else if (heroScore < 500) {
            step = 5;
        }else if (heroScore < 800) {
            step = 8; 
        }

        objLine.x = 270 / 100 / step + Number(lineShow.x);

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

    const onShowModalAchiev = ()=>{
        setAchievShow(achievShow => !achievShow);
    }

    const onClouseCard = ()=>{

        setLifeCard(lifeCard => !lifeCard);

        setTimeout(()=>{
            clouseCard('null');
        }, 800);
    }

    const onShowBurgerBtn = ()=>{
        if(showBurgerBtn.lineOne.rotate == 0){

            let x = document.querySelector('.card-mobile__btn-exit').offsetLeft;

            setShowBurgerBtn({lineOne: {rotate: 45, x: x, y: 8}, lineTwo: {opacity: 0, x: x}, lineThree: {rotate: -45, x: x, y: -8}});
            
            setShowMobileAchievPanel({x: 0, opacity: 1});

        } else {

            setShowBurgerBtn({lineOne: {rotate: 0, x: 0, y: 0}, lineTwo: {opacity: 1, x: 0}, lineThree: {rotate: 0, x: 0, y: 0}});
            
            setShowMobileAchievPanel({x: -400, opacity: 0});
            
        }
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

    if(mobileDetect){
        if(achievShow){
            return (
                <ModalAchiev hero={hero} score={scoreItem} fucnShowAchiev={onShowModalAchiev} funcScoreItem={setScoreItem}/>
            )
        } else {
            return (
                <AnimatePresence>{
                    lifeCard && (
                        <motion.section className='card card-mobile' exit={{opacity: 0}} transition={{duration: .6}}>

                            <section className='card-mobile__navigator'>

                                <div onClick={()=> onShowBurgerBtn()} className='card-mobile__navigator__burger'>
                                    <motion.span animate={showBurgerBtn.lineOne} transition={{duration: .7}} className='card-mobile__navigator__burger__line'></motion.span>
                                    <motion.span animate={showBurgerBtn.lineTwo} transition={{duration: .7}} className='card-mobile__navigator__burger__line'></motion.span>
                                    <motion.span animate={showBurgerBtn.lineThree} transition={{duration: .7}} className='card-mobile__navigator__burger__line'></motion.span>
                                </div>

                                <motion.div whileHover={{scale: 1.1}} onClick={()=> onClouseCard()} transition={{duration: .3}} className='card__btn-exit card-mobile__btn-exit'>
                    
                                    <motion.span animate={variantsBtnExit.animateRight} transition={variantsBtnExit.transition} className='card__btn-exit__left'></motion.span>
                                    <motion.span animate={variantsBtnExit.animateLeft} transition={variantsBtnExit.transition} className='card__btn-exit__right'></motion.span>

                                </motion.div>

                            </section>
        
                            <motion.aside animate={showMobileAchievPanel} transition={{duration: .7}} className='sidebar sidebar-mobile'>
                                <AchievPanel hero={hero} score={window.localStorage.getItem(hero)} fucnShowAchiev={onShowModalAchiev} funcScoreItem={setScoreItem}/>
                            </motion.aside>
                           
                            <MainBtn hero={hero} text={text} music={music} funcIndicatro={showIndivator} remainderClick={remainderClick}/>
        
                           <section className='sidebar'>
                            
                                <motion.div id={`sidebar-${hero}`} className='sidebar-scale'>
                                    
                                    <motion.div className='sidebar-scale__indicator'>
        
                                        <motion.div animate={lineShow} transition={{duration: .4}} className='sidebar-scale__indicator__line sidebar-scale__indicator__line--show'>
                                            <motion.div animate={lineImgShow} transition={{duration: .4}} className='sidebar-scale__indicator__line__img'></motion.div>
                                        </motion.div>
        
                                        <motion.div className='sidebar-scale__indicator__line'></motion.div>
        
                                    </motion.div>
        
                                    <p className='sidebar-scale__count'>Кликов для достижения цели: {remainderClick}</p>
            
                                </motion.div>
                           </section>
        
                        </motion.section>
                    )}  
                </AnimatePresence>
            )
        }
    } else {
        if(achievShow){
            return (
                <ModalAchiev hero={hero} score={scoreItem} fucnShowAchiev={onShowModalAchiev} funcScoreItem={setScoreItem}/>
            )
        } else {
            return (
                <AnimatePresence>{
                    lifeCard && (
                        <motion.section className='card' exit={{opacity: 0}} transition={{duration: .6}}>
        
                            <aside className='sidebar'>
                                <AchievPanel hero={hero} score={window.localStorage.getItem(hero)} fucnShowAchiev={onShowModalAchiev} funcScoreItem={setScoreItem}/>
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
        
                                    <p className='sidebar-scale__count'>Кликов для достижения цели: {remainderClick}</p>
            
                                </motion.div>
                           </aside>
        
                        </motion.section>
                    )}  
                </AnimatePresence>
            )
        }
    }
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
    }   

    switch (hero) {
        case 'meg':

            if(mobileDetect){
                return(
                    <section className='card__main-content card-mobile__main-content'>
                        <motion.div initial={{opacity: 0, y: 10}} animate={btnMainShow.animate} transition={btnMainShow.transition} id={`${hero}-btn`} onPointerDown={()=> onChangeCount()} className='card__btn-hero card-mobile__btn-hero'></motion.div>
                        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: .4}} className='card__text card-mobile__text'>{text} {count}</motion.div>
                    </section>                
                )
            } else {
                return(
                    <section className='card__main-content'>
                        <motion.div initial={{opacity: 0, y: 10}} animate={btnMainShow.animate} transition={btnMainShow.transition} id={`${hero}-btn`} onPointerDown={()=> onChangeCount()} className='card__btn-hero'></motion.div>
                        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: .4}} className='card__text'>{text} {count}</motion.div>
                    </section>                
                )
            }

            break;

        case 'kaz': 

            if(mobileDetect){
                return(
                    <section className='card__main-content card-mobile__main-content'>
                        <motion.div initial={{opacity: 0, y: 10}} animate={btnMainShow.animate} transition={btnMainShow.transition} id={`${hero}-btn`} onPointerDown={()=> onChangeCount()} className='card__btn-hero card-mobile__text'></motion.div>
                        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: .4}} className='card__text card-mobile__text'>{text} {count}</motion.div>
                    </section>
                )
            } else {
                return(
                    <section className='card__main-content'>
                        <motion.div initial={{opacity: 0, y: 10}} animate={btnMainShow.animate} transition={btnMainShow.transition} id={`${hero}-btn`} onPointerDown={()=> onChangeCount()} className='card__btn-hero'></motion.div>
                        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: .4}} className='card__text'>{text} {count}</motion.div>
                    </section>
                )
            }



            break;

        case 'dark': 

            if(mobileDetect){
                return(
                    <section className='card__main-content card-mobile__main-content'>
                        <motion.div initial={{opacity: 0, y: 10}} animate={btnMainShow.animate} transition={btnMainShow.transition} id={`${hero}-btn`} onPointerDown={()=> onChangeCount()} className='card__btn-hero card-mobile__text'></motion.div>
                        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: .4}} className='card__text card-mobile__text'>{text} {count}</motion.div>
                    </section>
                )
            } else {

                return(
                    <section className='card__main-content'>
                        <motion.div initial={{opacity: 0, y: 10}} animate={btnMainShow.animate} transition={btnMainShow.transition} id={`${hero}-btn`} onPointerDown={()=> onChangeCount()} className='card__btn-hero'></motion.div>
                        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: .4}} className='card__text'>{text} {count}</motion.div>
                    </section>
                )
            }

            break;

        default:
            break;
    }

}

export default Card;