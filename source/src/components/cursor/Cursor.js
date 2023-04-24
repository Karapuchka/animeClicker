import {useState} from 'react';

import './cursor.scss'

function Cursor({person}){

    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0}); 
    const [cursorPointer, setCursorPointer]   = useState(false);
  
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

    window.onmousedown = changeClass;
  
    window.onmouseup = changeClass;
  
    return (
        <div className={`cursor ${cursorPointer ? `cursor-${person}-pointer` : `cursor-${person}`}`} style={{left: cursorPosition.x - 16, top: cursorPosition.y - 8,}}></div>
    );
}

export default Cursor;