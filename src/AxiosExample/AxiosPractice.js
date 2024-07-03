import React, { useEffect,useState } from 'react'
import axios from 'axios';

function AxiosPractice() {

  const [data,setdata]=useState([])
  
  useEffect(()=>{
    axios({
        method: 'get',
        url: 'http://jsonplaceholder.typicode.com/posts?id=3',
      })
        .then(function (response) {
           console.log(response)
        }).catch(function(response){
            console.log("error occured")
        }).finally(function(){
            console.log("Finally block")
        });
  },[])
  
  return (
    <div>Axios Example Demo</div>
  )
}

export default AxiosPractice