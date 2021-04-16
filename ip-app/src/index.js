import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'; //entrypoint  injecting js
import './index.scss';
import Input from './Input/Input';
import Info from './Info/Info';
import Map from './Map/Map';



const App = () => {
  const [info, setInfo] = useState({});
 
  const getInfo = async (ip) => {

   try  {
      const api = 'https://geo.ipify.org/api/v1?apiKey=';
      const ipUrl = 'ipAddress=' + ip;
      const url = ip ? api + ipUrl: api;
      const info = await axios.get(url);

      setInfo(info)
   }  catch(error){
     console.log(error);
   }
  }
  const handleClick = (value) =>{
    getInfo(value);
  }
  
  useEffect( () => {
    getInfo();
  }, [])
 
  return (
    <section>
      <Input info={info.data} onClick={handleClick}/>
      {/* <Info info={info.data}/> */}
      <Map info={info.data}/>
    </section>
  )
};

ReactDOM.render( <App/> , document.getElementById('root'));


