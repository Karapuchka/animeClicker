import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

import countClick from '../../resources/script/countClick.js'

import './modalAchiev.scss';

function ModalAchiev({hero}){

    const [lifeModal, setLifeModal] = useState(true);

    return(
        <AnimatePresence>
            { lifeModal && (
                <motion.div initial={{opacity: 0, width: window.innerWidth, height: window.innerHeight}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .7}} className='modal-achiev'>
                    {countClick.achievements[hero][score]}
                </motion.div>
            )}
        </AnimatePresence>
       /* 
                Доделаить отображение результатов достижения и сделать проверку
       */
    );
}

export default ModalAchiev;