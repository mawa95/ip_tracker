import React from 'react';
import axios from 'axios';
function Info (){
  const apiLink = 'https://geo.ipify.org/api/v1?';
  const apiKey = 'apiKey=';
  const ipAdress = '&ipAddress=8.8.8.8';
  const url = apiLink + apiKey + ipAdress;
  axios.get(url)
  .then(res => {
    console.log(res)

    const ip = res.data.location.city;
    console.log(ip)
  })
  return(
    <section>
      <div>
        <p>IP address</p>
        <p></p>
      </div>
      <div>
        <p>Location</p>
        <p></p>
      </div>
      <div>
        <p>Timezone</p>
        <p></p>
      </div>

      <div>
        <p>isp</p>
        <p></p>
      </div>
    </section>
  )
}

export default Info;