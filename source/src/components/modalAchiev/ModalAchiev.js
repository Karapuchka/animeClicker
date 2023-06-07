import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { PropTypes } from 'prop-types';

import './modalAchiev.scss';

let achievements = {

    'meg': {

        100: "https://www.youtube-nocookie.com/embed/x6THwTryQlc",

        300: "https://www.youtube-nocookie.com/embed/AsGy6hQ5Ap4",

        500: "https://www.youtube.com/embed/cakvds6Wgh8",

        800: "https://www.youtube.com/embed/XqNsnO3gQ1Q",

        1000: "https://www.youtube.com/embed/jar1LTxxAeM",
    },

    'kaz': {

        100: '',

        300: '',

        500: '',

        800: '',

        1000: '',

    } , 

    'dark': {

        100: '',

        300: '',

        500: '',

        800: '',

        1000: '',
        
    },
}

function ModalAchiev({hero, score, fucnShowAchiev}){

    const [lifeModal, setLifeModal] = useState(true);

    const onClouseModal = ()=>{
        fucnShowAchiev();
        setLifeModal(lifeModal => !lifeModal);
    }

    return(
        <AnimatePresence>
            { lifeModal && (
                <motion.div initial={{opacity: 0, width: window.innerWidth, height: window.innerHeight}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .7}} className='modal-achiev'>
                    <div onClick={()=> onClouseModal()} className='modal-achiev__btn-exit'></div>
                    <iframe width={window.innerWidth - 100} height={window.innerHeight - 100} src={achievements[hero][score]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </motion.div>
            )}
        </AnimatePresence>
       /* 
                Доделаить отображение результатов достижения и сделать проверку
       */
    );
}



export default ModalAchiev;