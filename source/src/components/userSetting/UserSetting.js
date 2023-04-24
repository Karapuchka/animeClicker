import {useState} from 'react';
import {motion, AnimatePresence}   from 'framer-motion';

import userDate from '../../resources/script/storageDate.js'

import './userSetting.scss';

function UserSetting(){

    const [openModal, setOpenModal] = useState(false);

    const changeOpenModal = ()=>{
        setOpenModal(openModal => !openModal)
    }

    return (
        <div className='user-setting'>

            <div id={`icon-${userDate.avatar}`} className='user-setting__icon'></div>

            <Glimpse funcOpenModal={changeOpenModal}/>

            <ModalUserSetting nickname={userDate.nickname} openModal={openModal} funcOpenModal={changeOpenModal}/>

        </div>
    )
}

function Glimpse({funcOpenModal}){
    
    const [styleGlimpseLine, setStyleGlimpseLine] = useState({}); // Стили для отблеска
    const [positionCursor, setPositionCursor]     = useState({x: 0, y: 0}); // Позиция курсора
    const [styleGlimpse, setStyleGlimpse]         = useState({}); // Стили для родительского компонента отблеска

    // Анимация при наведении курсора
    const onHoverOver = ()=>{

        setStyleGlimpseLine({
            opacity: .8,
            x: 25,
            y: -80,
            rotate: '-45deg',
        });

        let colorShadow = 'black' // Перменная для хранения цвета. В зависимости от значения avatar хранить в себе цвет тени

        if(userDate.avatar === 'default'){

            setStyleGlimpse({
                boxShadow: `2px 2px ${colorShadow}`,
            });

        } else if (userDate.avatar === 'meg'){

            colorShadow = '#c84d20';

            setStyleGlimpse({
                boxShadow: `2px 2px ${colorShadow}`,
            });

        } else if (userDate.avatar === 'kasik'){

            colorShadow = '#30d69f'

            setStyleGlimpse({
                boxShadow: `2px 2px ${colorShadow}`,
            });
            
        } else if (userDate.avatar === 'darkneska'){

            colorShadow = '#d6d330'

            setStyleGlimpse({
                boxShadow: `2px 2px ${colorShadow}`,
            });
            
        }
    }

    // Анимация при отведении курсора
    const onHoverOut = ()=>{
        setStyleGlimpseLine({
            opacity: 0,
            x: 10,
            y: 20,
            rotate: '-45deg',
        })

        setStyleGlimpse({
            boxShadow: '0',
        });
    }

    return(
        <motion.div animate={styleGlimpse} transition={[1]} onClick={()=> funcOpenModal()} onMouseOver={()=> onHoverOver()} onMouseOut={()=> onHoverOut()} className='user-setting__glimpse'>
            <motion.span animate={styleGlimpseLine} transition={[1]} className='user-setting__glimpse__line'></motion.span>
        </motion.div>
    )
}

function ModalUserSetting({nickname, openModal, funcOpenModal}){

    return (
        <AnimatePresence> 
            {openModal && (
                <motion.div animate={{opacity: 1}} transition={{duration: .7}} exit={{opacity: 0}} className='user-setting__modal'>
                    <p className='user-setting__modal__nick user-setting__modal__text'>{nickname}</p>
                    <button className='user-setting__modal__btn user-setting__modal__text'>Достижения</button>
                    <button className='user-setting__modal__btn user-setting__modal__text'>Настройки</button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default UserSetting;