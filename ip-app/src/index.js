import React from 'react';
import ReactDOM from 'react-dom'; //entrypoint  injecting js
import './index.scss';
import Input from './input';
import Info from './info';
import Map from './map';

function App() {
  return (
    <section>
      <Input/>
      <Info/>
      <Map/>
    </section>
  )
};

ReactDOM.render( <App/> , document.getElementById('root'));


