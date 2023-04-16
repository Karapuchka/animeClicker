import { useState } from 'react';

import Count from './components/count/Count.js'

import './App.scss';

function App() {

  return (
    <div className='wrapper'>
        <Count name={'name'} />
    </div>
  )
}

export default App;