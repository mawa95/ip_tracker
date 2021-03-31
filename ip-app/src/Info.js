import React, {useState, useEffect} from 'react';

const Info = ({info}) => {
  let { data , config} = info
  console.log(data)
  return(
  
    <section>
      <div>
        <p>IP address</p>
        <p></p>
      </div>
      <div>
        <p>Location:</p>
        <p></p>
      </div>
      <div>
        <p>Timezone:</p>
        <p></p>
      </div>

      <div>
        <p>ISP:</p>
        <p></p>
      </div>
    </section>
 )
}


 
export default Info;