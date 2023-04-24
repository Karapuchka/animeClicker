import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import UserSetting from '../userSetting/UserSetting';
import Cursor      from '../cursor/Cursor';

import './Main.scss';

function Main (){

    const [cursor, setCursor] = useState('default');

    const changeCursor = (value)=>{
        setCursor(cursor => value)
    }

    return (
        <main className="main">
            <div className='container'>
                <UserSetting/>
                <div className='main__content'></div>
            </div>

            <Cursor person={cursor}/>
        </main>
    )
}

export default Main;