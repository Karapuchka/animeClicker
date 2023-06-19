import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import './achievPanel.scss';

function AchievPanel({hero, score, fucnShowAchiev, funcScoreItem}){

    const [lifePanel, setLifePanel] = useState(true);

    const [arrayLinksAchiev, setArrayLinksAchiev] = useState([['100', true], ['300', true], ['500', true], ['800', true], ['1000', true]]);

    useEffect(()=>{

        if(score >= 1000){

            setArrayLinksAchiev([['100', false], ['300', false], ['500', false], ['800', false], ['1000', false]]);

        } else if (score >= 800) {

            setArrayLinksAchiev([['100', false], ['300', false], ['500', false], ['800', false], ['1000', true]]);

        }else if (score >= 500) {
            
            setArrayLinksAchiev([['100', false], ['300', false], ['500', false], ['800', true], ['1000', true]]);


        }else if (score >= 300) {

            setArrayLinksAchiev([['100', false], ['300', false], ['500', true], ['800', true], ['1000', true]]);

        }else if (score >= 100) {

            setArrayLinksAchiev([['100', false], ['300', true], ['500', true], ['800', true], ['1000', true]]);

        }
    });
    
    return(
        <AnimatePresence>{
            lifePanel && (
                <motion.div className="hero-achiev">
                    <ul className="hero-achiev__list">
                        {arrayLinksAchiev.map(item => <ItemAchiev key={hero.toString() + item[0].toString()} id={`${hero.toString()}-${item[0].toString()}`} score={+item[0]} blockAchiev={item[1]} fucnShowAchiev={fucnShowAchiev} funcScoreItem={funcScoreItem}/>)}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

function ItemAchiev({id, blockAchiev, score, fucnShowAchiev, funcScoreItem}){

    const [lifeItemAchiev, setLifeItemAchiev] = useState(true);

    const [animateDoorLoock, setAnimateDoorLoock] = useState({rotate: [0], scale: 1});

    const [transitionDoorLoock, setTransitionDoorLoock] = useState({duration: .2});

    const [animatePlayBtn, setAnimatePlayBtn] = useState({scale: 1})

    const [transitionPlayBtn, setTransitionPlayBtn] = useState({duration: .2});

    const onScaleDoorLoock = ()=> {
        if(animateDoorLoock.scale == 1){
            setAnimateDoorLoock({rotate: [0], scale: 1.3})
        } else {
            setAnimateDoorLoock({rotate: [0], scale: 1})
        }
    }

    const onRotateDoorLoock = ()=> {
        if(animateDoorLoock.rotate[0] == 0){
            setTransitionDoorLoock({duration: .2, time: [0, 0.25, 0.5, 1]})
            setAnimateDoorLoock({rotate: [1, 15, -15, 0], scale: 1.3})
        } else {
            setTransitionDoorLoock({duration: .2})
            setAnimateDoorLoock({rotate: [0], scale: 1.3})
        }
    }

    const onScalePlayBtn = ()=>{
        if(animatePlayBtn.scale == 1){
            setAnimatePlayBtn({scale: [1, .8, 1]})
            setTransitionPlayBtn({duration: 0.5, time:[0, .5, 1]})
        } else {
            setAnimatePlayBtn({scale: 1})
            setTransitionPlayBtn({duration: 0.5})
        }
    }

    const onShowAchiev = ()=>{
        fucnShowAchiev()
        funcScoreItem(score)
    }

    if(blockAchiev){

        return(
            <AnimatePresence>{
                lifeItemAchiev && (
                    <motion.li className="hero-achiev__list__item">

                        <div onMouseOver={() => onScaleDoorLoock()} onMouseOut={() => onScaleDoorLoock()} onMouseDown={()=> onRotateDoorLoock()} onMouseUp={()=> onRotateDoorLoock()} className="hero-achiev__list__item__use-panel">
                            <motion.span whileHover={{scale: 1.3}} animate={animateDoorLoock} transition={transitionDoorLoock} className="hero-achiev__list__item__use-panel__door-loock"></motion.span>
                        </div>

                        <div id={id} className="hero-achiev__list__item__images"></div>
                    
                    </motion.li>
                )}
            </AnimatePresence>
        )
    } else {

        return(
            <AnimatePresence>{
                lifeItemAchiev && (
                    <motion.li onClick={()=> onShowAchiev()} className="hero-achiev__list__item">

                        <div onMouseDown={() => onScalePlayBtn()} onMouseUp={()=> onScalePlayBtn()} className="hero-achiev__list__item__use-panel">
                            <motion.span whileTap={{scale: [1, .8, 1]}} animate={animatePlayBtn} transition={transitionPlayBtn} className="hero-achiev__list__item__use-panel__play"></motion.span>
                        </div>

                        <div id={id} className="hero-achiev__list__item__images"></div>
                    
                    </motion.li>
                )}
            </AnimatePresence>
        )
    }

}

export default AchievPanel;