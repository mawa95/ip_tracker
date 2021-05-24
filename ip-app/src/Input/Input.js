import React, {
  useState,
  useEffect
} from 'react';
import Info from '../Info/Info';

function Input ({onClick, info, serverError}) {
  const [value, setValue] = useState('');
  const [isTypoError, setIsTypoError] = useState(false);
  
  const handleSubmit = e =>{
    e.preventDefault();

    const regexIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

    const regexDomain = /^(?=.{1,253}\.?$)(?:(?!-|[^.]+_)[A-Za-z0-9-_]{1,63}(?<!-)(?:\.|$)){2,}$/


    if (value.match(regexIp) || value.match(regexDomain) ){
      setIsTypoError(false)
      onClick(value);
    
    } else  {
      setIsTypoError(true);
      
    }
  }

  return(
    <section className="header">  
     
      <h1>IP Address Tracker</h1>
    
    
      <form className="form" onSubmit={handleSubmit}>
       
        <input placeholder = "Search for any IP adress or domain" value={value} onChange={(e) => setValue(e.target.value)}></input>
       
        <button type="submit"  >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
        </button>

        {(isTypoError || serverError) ? <p className="error">Please enter a valid IP adress or domain</p> : <p></p>}
      </form>

      <Info info={info}/>

    </section>
  )
}

export default Input;