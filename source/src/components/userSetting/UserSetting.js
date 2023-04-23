import {useState} from 'react';
import {motion}   from 'framer-motion';
import userDate from '../../resources/script/storageDate.js'

import './userSetting.scss';

function UserSetting(){

    const [modalActive, setModalActive] = useState(false);

    return (
        <div className='user-setting'>

            <div id={`icon-${userDate.avatar}`} className='user-setting__icon'></div>

            <Glimpse />

            <ModalUserSetting nickname={userDate.nickname}/>
        </div>
    )
}

function Glimpse(){

    
    const [styleGlimpseLine, setStyleGlimpseLine] = useState({});
    const [styleGlimpse, setStyleGlimpse] = useState({});
    const [positionCursor, setPositionCursor] = useState({x: 0, y: 0});

    const onHoverOver = ()=>{
        setStyleGlimpseLine({
            opacity: .8,
            x: 25,
            y: -80,
            rotate: '-45deg',
        });

        let colorShadow = 'black'

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
        <motion.div animate={styleGlimpse} transition={[1]} onMouseOver={()=> onHoverOver()} onMouseOut={()=> onHoverOut()} className='user-setting__glimpse'>
            <motion.span animate={styleGlimpseLine} transition={[1]} className='user-setting__glimpse__line'></motion.span>
        </motion.div>
    )
}

function ModalUserSetting({nickname}){

    return (
        <div className='user-setting__modal'>
            <p className='user-setting__modal__nick user-setting__modal__text'>{nickname}</p>
            <button className='user-setting__modal__btn user-setting__modal__text'>Достижения</button>
            <button className='user-setting__modal__btn user-setting__modal__text'>Настройки</button>
        </div>
    )
}

export default UserSetting;