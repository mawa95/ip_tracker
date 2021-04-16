import React from 'react';

const Info = ({info}) => {

  return(
   
    <section className="info">
      <div className="wrapper">
        <p className="description">IP ADRESS:</p>
        <p className="bold">{(info !== undefined) ? info.ip:''}</p>
      </div>
      <div className="border"></div>
      <div className="wrapper">
        <p className="description">LOCATION:</p>
        <p className="bold">{info ? `${info.location.city}, ${info.location.country}`:''}</p>
      </div>
      <div className="border"></div>
      <div className="wrapper">
        <p className="description">TIMEZONE:</p>
        <p className="bold">{info ? info.location.timezone:''}</p>
      </div>
      <div className="border"></div>
      <div className="wrapper">
        <p className="description">ISP:</p>
        <p className="bold">{info ? info.isp:''}</p>
      </div>
    </section>
 )
}


 
export default Info;