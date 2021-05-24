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
  const [isServerError, setIsServerError] = useState('');

  const getInfo = async (ip) => {

   try  {
      setIsServerError(false)
      setIsLoading(true)
      const apiKey = `${process.env.REACT_APP_API_KEY}`
      const api = 'https://geo.ipify.org/api/v1?apiKey=at_' + apiKey;
     
      // const ipUrl = 'ipAddress=' + ip;
      const domainUrl = "domain=" + ip;
      const url = ip ? api + domainUrl: api;
      const info = await axios.get(url);
      setInfo(info)
      setIsLoading(false)
      setIsServerError(false)
   }  catch(error){
      setIsServerError(error);
      setIsLoading(false)
     
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
      {isLoading && <div className="loader"></div>}
      <button className="locateMeButton tooltip" onClick={() => getInfo()}>?
        <span className="tooltiptext">Locate me</span>
      </button>
      <Input serverError={isServerError} info={info.data} onClick={handleClick}/>
     
      
      <Map info={info.data} loading={isLoading}/>
      
    </section>
    
  )
};

ReactDOM.render( <App/> , document.getElementById('root'));


