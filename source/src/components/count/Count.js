import {useState, useEffect} from 'react';
import useScound from 'use-sound';
import {motion} from 'framer-motion';

import explosion from "../../resources/music/explosion.mp3";
import './Count.scss';

function Count({textForTitle, iconForBtnScore}) {

    const [score, setScore] = useState(0); // Счетчик

    const [music] = useScound(explosion); // Функция для воспроизведения звука

    const [styleResBtn, setStyleResBtn] = useState({style: {background: 'black', x: 0,}, active: false}); // Изначальные стили для анимации кнопки "Реализм"
    
    const replaceStyleResBtn = ()=>{ // Стили анимации для кнопки "Реализм"

        if(styleResBtn.active){
            setStyleResBtn({
                style: {
                    background: '#000000',
                    x: 0,
                },
                active: false,
            });
        } else {
            setStyleResBtn({
                style: {
                    background: '#c84d20',
                    x: 15,
                },
                active: true,
            });
        }
    }
    
    const [styleMainBtn, setStyleMainBtn] = useState({rotate: 0, scale: 1});

    const replaceStyleMainBtn = ()=>{
        setStyleMainBtn({
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1, 1],
        })
    }

    const updateScore = ()=>{ // Обновление счетчика

        setScore(score => score + 1);
        
        setStyleMainBtn({
            rotate: 0,
            scale: 1,
        })
    }

    return(
        <div className='count'>

            <motion.div onTapStart={updateScore} onTap={replaceStyleMainBtn} animate={styleMainBtn} transition={{duration: 1, times: [.25, .5, 0.75, 1], ease: 'easeInOut',}} onPointerDown={music} id={`btn-${iconForBtnScore}`} className='count__btn-score'></motion.div>

            <div className='count__text'>{textForTitle} {score}</div>
            
            <div className='count__text count__text--weight'>Включить реализм</div>

            <motion.div onTap={replaceStyleResBtn} className='count__btn-realism'>
                <motion.span whileHover={{opacity: .8}} animate={styleResBtn.style} transition={{duration: .1}} className='count__btn-realism__circle'></motion.span>
            </motion.div>

        </div>
    )
}

export default Count;