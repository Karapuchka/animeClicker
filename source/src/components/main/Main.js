import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import UserSetting from '../userSetting/UserSetting';

import './Main.scss';

function Main (){
    return (
        <main className="main">
            <div className='container'><UserSetting /></div>
        </main>
    )
}

export default Main;