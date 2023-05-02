import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import ListCard from '../listCard/ListCard';
import Card from '../card/Card';

import './Main.scss';

function Main (){

    const [openCard, setOpenCard] = useState('list');

    const onChangeOpenCard = (value)=>{
        setOpenCard(value);
    }

    const moveBtnExit = {

        initialBtn: {
            opacity: 0,
        },

        animateLeft: {
            rotate: '45deg',
            opacity: 1,
        },

        animateRight: {
            rotate: '-45deg',
            opacity: 1,
        },

        exitBtn: {
            opacity: 0,
        },

        time: {
            duration: .7,
        }
    }

    switch (openCard) {

        case 'list':

            return (
                <main className="main">
                    <ListCard funcOpenCard={onChangeOpenCard}/>
                </main>
            )
            
        break;


        case 'meg':

            return (
                <main className="main">
                    <motion.div onClick={()=>onChangeOpenCard('list')} className='main__btn-exit' whileHover={{scale: 1.1}} whileTap={{scale: .8}}>
                        <motion.div initial={moveBtnExit.initialBtn} animate={moveBtnExit.animateLeft}  exit={moveBtnExit.exitBtn} transition={moveBtnExit.time} className='main__btn-exit__left'></motion.div>
                        <motion.div initial={moveBtnExit.initialBtn} animate={moveBtnExit.animateRight} exit={moveBtnExit.exitBtn} transition={moveBtnExit.time} className='main__btn-exit__right'></motion.div>
                    </motion.div>
                    <Card textForTitle={'Этот мир был одарён взрывами: '} iconForBtnScore={'meg'}/>
                </main>
            )
                
        break;

        case 'dark':

            return (
                <main className="main">
                    <motion.div onClick={()=>onChangeOpenCard('list')} className='main__btn-exit' whileHover={{scale: 1.1}} whileTap={{scale: .8}}>
                        <motion.div initial={moveBtnExit.initialBtn} animate={moveBtnExit.animateLeft}  exit={moveBtnExit.exitBtn} transition={moveBtnExit.time} className='main__btn-exit__left'></motion.div>
                        <motion.div initial={moveBtnExit.initialBtn} animate={moveBtnExit.animateRight} exit={moveBtnExit.exitBtn} transition={moveBtnExit.time} className='main__btn-exit__right'></motion.div>
                    </motion.div>
                    <Card />
                </main>
            )
            
        break;

        case 'kaz':

            return (
                <main className="main">
                   <motion.div onClick={()=>onChangeOpenCard('list')} className='main__btn-exit' whileHover={{scale: 1.1}} whileTap={{scale: .8}}>
                        <motion.div initial={moveBtnExit.initialBtn} animate={moveBtnExit.animateLeft}  exit={moveBtnExit.exitBtn} transition={moveBtnExit.time} className='main__btn-exit__left'></motion.div>
                        <motion.div initial={moveBtnExit.initialBtn} animate={moveBtnExit.animateRight} exit={moveBtnExit.exitBtn} transition={moveBtnExit.time} className='main__btn-exit__right'></motion.div>
                    </motion.div>
                    <Card />
                </main>
            )
            
        break;

        default: 
    }
}

export default Main;