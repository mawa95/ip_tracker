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
  const [isLoading, setIsLoading] = useState(true);
   const [isError, setIsError] = useState(false);
  const getInfo = async (ip) => {

   try  {
      const apiKey = `${process.env.REACT_APP_API_KEY}`
      const api = 'https://geo.ipify.org/api/v1?apiKey=at_' + apiKey;
     
      // const ipUrl = 'ipAddress=' + ip;
      const domainUrl = "domain=" + ip;
      const url = ip ? api + domainUrl: api;
      const info = await axios.get(url);
      console.log(info);
      setInfo(info)
   }  catch(error){
    console.log({error});
   }
  }
  const handleClick = (value) =>{
    getInfo(value);
  }
  const locateMe=()=>{
    getInfo();
  }
  useEffect( () => {
    getInfo();
  }, [])
 
  return (
    <section>
      <button className="locateMeButton tooltip" onClick={() => locateMe()}>
      ?
        <span className="tooltiptext">Locate me</span>
      </button>
      <Input info={info.data} onClick={handleClick}/>
      {/* <Info info={info.data}/> */}
      <Map info={info.data}/>
    </section>
  )
};

ReactDOM.render( <App/> , document.getElementById('root'));


