import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import countClick from "../../resources/script/countClick.js";

import './achievPanel.scss';

function AchievPanel({hero, score}){

    const [lifePanel, setLifePanel] = useState(true);

    const [arrayLinksAchiev, setArrayLinksAchiev] = useState([]);

    useEffect(()=>{

        if(arrayLinksAchiev.length == 0){

            let newArray = arrayLinksAchiev;

            for (const key in countClick.achievements[hero]) {

                if (countClick.achievements[hero].hasOwnProperty.call(countClick.achievements[hero], key)) {

                    newArray.push(countClick.achievements[hero][key])
                }
            }

            setArrayLinksAchiev(newArray);
        }
    })

    return(
        <AnimatePresence>{
            lifePanel && (
                <motion.div className="hero-achiev">
                    <ul className="hero-achiev__list">
                        {arrayLinksAchiev.map(item => <ItemAchiev hero={hero} score={score} blockAchiev={true} link={item} />)}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

function ItemAchiev({hero, score, blockAchiev, link}){

    const [lifeItemAchiev, setLifeItemAchiev] = useState(true);

    const [animateDoorLoock, setAnimateDoorLoock] = useState({rotate: [0], scale: 1});

    const [transitionDoorLoock, setTransitionDoorLoock] = useState({duration: .2})

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

    if(blockAchiev){

        return(
            <AnimatePresence>{
                lifeItemAchiev && (
                    <motion.li className="hero-achiev__list__item">

                        <div onMouseOver={() => onScaleDoorLoock()} onMouseOut={() => onScaleDoorLoock()} onMouseDown={()=> onRotateDoorLoock()} onMouseUp={()=> onRotateDoorLoock()} className="hero-achiev__list__item__block-panel">
                            <motion.span whileHover={{scale: 1.3}} animate={animateDoorLoock} transition={transitionDoorLoock} className="hero-achiev__list__item__block-panel__door-loock"></motion.span>
                        </div>

                        <iframe width={150} height={150} src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    
                    </motion.li>
                )}
            </AnimatePresence>
        )
    } else {

        return(
            <AnimatePresence>{
                lifeItemAchiev && (
                    <motion.li className="hero-achiev__list__item">
                        
                        <iframe width={150} height={150} src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    
                    </motion.li>
                )}
            </AnimatePresence>
        )
    }

}

export default AchievPanel;