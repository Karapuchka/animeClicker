import { useState } from 'react';
import { motion } from 'framer-motion';

import detect from './resources/script/detect.js';
import infoHero from './resources/script/infoHero.js'

import SliderCard from './components/sliderCard/SliderCard.js';
import Card from './components/card/Card.js'

import './App.scss';

function App() {

  const [openCard, setOpenCard] = useState('null');

  const onOpenCard = (name)=>{
    setOpenCard(`${name}`);
  }

  switch (openCard) {
    case 'null':
      return (
        <div className='wrapper'>
          <SliderCard openCard={onOpenCard}/>
        </div>
      )
      break;
  
    case 'meg':
      return (
        <motion.div animate={{background: '#fff'}} className='wrapper'>
          <Card hero={infoHero[0].id} text={infoHero[0].text} music={infoHero[0].music} clouseCard={onOpenCard}/>
        </motion.div>
      )
      break;

    case 'kaz':
      return (
        <motion.div animate={{background: '#fff'}} className='wrapper'>
          <Card hero={infoHero[1].id} text={infoHero[1].text} music={infoHero[1].music} clouseCard={onOpenCard}/>
        </motion.div>
      )
    break;

    case 'dark':
      return (
        <motion.div animate={{background: '#fff'}} className='wrapper'>
          <Card hero={infoHero[2].id} text={infoHero[2].text} music={infoHero[2].music} clouseCard={onOpenCard}/>
        </motion.div>
      )
    break;
  }
}

export default App