import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { PropTypes } from 'prop-types';
import ReactPlayer from 'react-player';

import meg100Video from '../../resources/videos/meg-100.webm'
import meg300Video from '../../resources/videos/meg-300.webm'
import meg500Video from '../../resources/videos/meg-500.webm'
import meg800Video from '../../resources/videos/meg-800.webm'
import video1000 from '../../resources/videos/1000.webm'

import kaz100Video from '../../resources/videos/kaz-100.webm'
import kaz300Video from '../../resources/videos/kaz-300.webm'
import kaz500Video from '../../resources/videos/kaz-500.webm'
import kaz800Video from '../../resources/videos/kaz-800.webm'
import kaz1000Video from '../../resources/videos/kaz-1000.webm'

import dark100Video from '../../resources/videos/dark-100.webm'
import dark300Video from '../../resources/videos/dark-300.webm'
import dark500Video from '../../resources/videos/dark-500.webm'
import dark800Video from '../../resources/videos/dark-800.webm'
import dark1000Video from '../../resources/videos/dark-1000.webm'

import './modalAchiev.scss';

let achievements = {

    'meg': {
        100: meg100Video,
        300: meg300Video,
        500: meg500Video,
        800: meg800Video,
        1000: video1000,
    }, 

    'kaz': {
        100: kaz100Video,
        300: kaz300Video,
        500: kaz500Video,
        800: kaz800Video,
        1000: kaz1000Video,
    }, 

    'dark': {
        100: dark100Video,
        300: dark300Video,
        500: dark500Video,
        800: dark800Video,
        1000: dark1000Video,
    }, 
}

function ModalAchiev({hero, score, fucnShowAchiev, funcScoreItem}){

    if(score == 0){
        score = window.localStorage.getItem(hero);
    }

    const [lifeModal, setLifeModal] = useState(true);

    const [startVide, setStartVideo] = useState(false);

    const onClouseModal = ()=>{
        funcScoreItem(0);
        fucnShowAchiev();
        setLifeModal(lifeModal => !lifeModal);
    }

    useEffect(()=>{
        setTimeout(()=>{
            setStartVideo(true)
        }, 1700)
    })

    return(
        <AnimatePresence>
            { lifeModal && (
                <motion.div initial={{width: window.innerWidth, height: window.innerHeight}} exit={{opacity: 0}} transition={{duration: 1, delay: 2}} className='modal-achiev'>
                    <motion.div initial={{opacty: 0}} animate={{opacity: 1}} transition={{duration: .7, delay: 1}} onClick={()=> onClouseModal()} className='modal-achiev__btn-exit'></motion.div>
                    <motion.div initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: .7, delay: 1}}  className='modal-achiev__video'>
                        <ReactPlayer width={window.innerWidth - 20}  height={window.innerHeight - 20} url={achievements[hero][score]} playing={startVide} onEnded={()=> onClouseModal()}/>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
       /* 
                Доделаить отображение результатов достижения и сделать проверку
       */
    );
}



export default ModalAchiev;