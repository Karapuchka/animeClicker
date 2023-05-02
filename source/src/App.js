import { useEffect, useState } from 'react';

import detect   from './resources/script/detect.js';

import Main      from './components/main/Main.js';

import './App.scss';

function App() {

  return (
    <div className='wrapper'>
        <Main />
    </div>
)
}

export default App;