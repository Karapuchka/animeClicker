import { useEffect, useState } from 'react';

import detect   from './resources/script/detect.js';
import userDate from './resources/script/storageDate.js'

import Main      from './components/main/Main.js';
import Cursor from './components/cursor/Cursor.js';

import './App.scss';

function App() {

  const [cursor, setCursor] = useState('default');

  const changeCursor = (value)=>{
      setCursor(cursor => value)
  }

  return (
    <div className='wrapper'>
        <Main />
        <Cursor person={cursor}/>
    </div>
)
}

export default App;