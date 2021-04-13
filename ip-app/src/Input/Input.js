import React, {
  useState,
  useEffect
} from 'react';
function Input ({onClick}) {
  const [value, setValue] = useState('');
 
  return(
    <section className="header">
      <h1>IP Adress Tracker</h1>
    
       <section>
          <input placeholder = "Search for any IP adress or domain" value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button type="submit"  onClick={() => onClick(value)}>
         <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
        </button>
       </section>
     
    </section>
  )
}

export default Input;