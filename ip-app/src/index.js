import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'; //entrypoint  injecting js
import './index.scss';
import Input from './Input';
import Info from './Info';
import Map from './Map';




const ip = '8.8.8.8'
const url = api + ip

function App() {
  const [info, setInfo] = useState([]);
  const getInfo = async () => {
    const info = await axios(url)
   

    setInfo(info)
  }

  useEffect(() => {
    getInfo();


  }, [])
  return (
    <section>
      <Input/>
      <Info info={info}/>
      <Map info={info}/>
    </section>
  )
};

ReactDOM.render( <App/> , document.getElementById('root'));


