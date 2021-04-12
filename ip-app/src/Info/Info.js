import React from 'react';

const Info = ({info}) => {
  
  
  return(
   
    <section className="info">
      <div>
        <p>IP address:</p>
        <p>{(info !== undefined) ? info.ip:''}</p>
      </div>
      <div>
        <p>Location:</p>
        <p>{info ? `${info.location.city}, ${info.location.country}`:''}</p>
      </div>
      <div>
        <p>Timezone:</p>
        <p>{info ? info.location.timezone:''}</p>
      </div>

      <div>
        <p>ISP:</p>
        <p>{info ? info.isp:''}</p>
      </div>
    </section>
 )
}


 
export default Info;