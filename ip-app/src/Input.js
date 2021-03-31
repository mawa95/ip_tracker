import React, {
  useState,
  useEffect
} from 'react';
function Input () {
  const [value, setValue] = useState('');
  
  return(
    <section>
      <input placeholder = "type Ip"></input>
      <input type="submit" value="Submit" />
    </section>
  )
}

export default Input;