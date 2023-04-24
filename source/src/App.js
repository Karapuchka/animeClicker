import { useEffect, useState } from 'react';

import detect   from './resources/script/detect.js';
import userDate from './resources/script/storageDate.js'

import Preloader from './components/preloader/Preloader.js';
import Main      from './components/main/Main.js';

import './App.scss';

function App() {

  return (
    <div className='wrapper'>
        <Preloader />
        <Main />
    </div>
)
}

export default App;