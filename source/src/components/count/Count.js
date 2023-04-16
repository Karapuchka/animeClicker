import {useState, useEffect} from 'react';
import useScound from 'use-sound';

import explosion from "./mp3/explosion.mp3";
import './Count.scss';

function Count() {

    const [score, setScore] = useState(0); // Счетчик

    const [classBtnScore, setClassBtnScore] = useState(false); // Для смены класса кнопки с картинкой

    const [classBtnRealism, setClassBtnRealism] = useState(false); // Для смены класса кнопки с реализмом

    const [music] = useScound(explosion);

    const updateScore = ()=>{

        setClassBtnScore(classBtnScore => !classBtnScore);

        setScore(score => score + 1);

        if(classBtnScore){
            setTimeout(()=>{
                setClassBtnScore(classBtnScore => !classBtnScore);
            }, 200);
        }
    }

    return(
        <div className='count'>

            <div onClick={()=> updateScore()} onPointerDown={music} className={`count__btn-score ${classBtnScore ? 'count__btn-score--active' : ''}`}></div>

            <div className='count__text'>Этот мир был одарён взрывами {score}</div>
            
            <div className='count__text count__text--weight'>Включить реализм</div>

            <div className='count__btn-realism'>
                <span onClick={()=> setClassBtnRealism(classBtnRealism => !classBtnRealism)} className={`count__btn-realism__circle ${classBtnRealism ? 'count__btn-realism__circle--active' : '' }`}></span>
            </div>

        </div>
    )
}

export default Count;