import { useEffect, useState } from 'react';

import Count from './components/count/Count.js'

import './App.scss';

function App() {

  const [person, setPerson] = useState('none') //Хранит в себе информацию о выбранном персонаже

  return (
    <div className='wrapper'>
        <Count name={'name'} />
        <Cursor person={person}/>
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

    // Меняет катинку "курсора" при клике
    const changeClass = ()=>{
      setCursorPointer(cursorPointer => !cursorPointer);
    }

    window.addEventListener('mousedown', changeClass);
    window.addEventListener('mouseup', changeClass);    

  }, []);

  return <div className={`cursor ${cursorPointer ? 'cursor-meg-pointer' : 'cursor-meg'}`} style={{left: cursorPosition.x - 16, top: cursorPosition.y - 8,}}></div>
}

export default App;