import { useEffect, useState } from 'react';

import detect   from './resources/script/detect.js';
import userDate from './resources/script/storageDate.js'

import Count     from './components/count/Count.js'
import Preloader from './components/preloader/Preloader.js';
import Main      from './components/main/Main.js';

import './App.scss';

function App() {

  const [cursor, setCursor] = useState('default');

  const changeCursor = (value)=>{
    setCursor(cursor => value)
  }

  return (
    <div className='wrapper'>
        <Preloader />
        <Main />
        <Cursor person={cursor}/>
    </div>
  )
}

function Cursor({person}){

  const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0}); 
  const [cursorPointer, setCursorPointer]   = useState(false);

  useEffect(()=>{

    
    window.addEventListener('mousemove', (e)=>{ 
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      })
    })

  }, []);

  // Меняет катинку "курсора" при клике
    const changeClass = ()=>{
      setCursorPointer(cursorPointer => !cursorPointer);
    }

  window.onmousedown = changeClass;

  window.onmouseup = changeClass;

  return <div className={`cursor ${cursorPointer ? `cursor-${person}-pointer` : `cursor-${person}`}`} style={{left: cursorPosition.x - 16, top: cursorPosition.y - 8,}}></div>
}

export default App;