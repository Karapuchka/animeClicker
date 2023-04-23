import './Preloader.scss';

import { useState } from 'react';
import { motion }   from "framer-motion"

function Preloader(cursor){
    
    const [life, setLife] = useState(false);

    const onDeleteBlock = ()=>{

        setTimeout(()=>{
            setLife(life => !life);
        }, 8000)
    }

    window.addEventListener('DOMContentLoaded', onDeleteBlock());

    if(life){
        return null;
    } else {
        return (
        
            <motion.div 
                animate={{opacity: [1, 0]}} 

                transition={{
                    delay: 4,
                    duration: 2,
                    times: [0, 1]}} 
                    
                className='preloader'>
    
    
                <TextPreloader content={'(¬ ‿¬)'} position={-20} />
                <TextPreloader content={'Аниме счетчик'} position={20} />
    
            </motion.div>
        
        )
    }
}

function TextPreloader({content, position}){

    let positionY = {
        positionStart: 0,
        positionEnd: 0,
    }

    if(position > 0){

        positionY.positionStart = position - 25;
        positionY.positionEnd = position;

    } else {

        positionY.positionStart = position + 25;
        positionY.positionEnd = position;

    }


    return(
    
        <motion.p 

            animate={{
                opacity: [0, 1, 1, 1, 1, 0], 
                y: [positionY.positionEnd, 0, positionY.positionStart, 0, 0, positionY.positionEnd]}} 

            transition={{
                duration: 3, 
                ease: "easeOut",            
                delay: .9,
                times: [0, 0.18, 0.28, 0.4, 0.9, 1],
            }} 

            className='preloader__text'

        >{content}</motion.p>

    )
}

export default Preloader;