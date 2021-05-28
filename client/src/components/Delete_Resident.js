import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { BASE_URL } from '../config';
import Login from './Login';

const Delete_Resident = () => {
  // const [data,setdata] = useState()
  // useEffect(()=>{
  //   async function fetchdata(){
  //     const response = await fetch('http://localhost:3001')
  //     const responsejson = await response.json()
  //     setdata(responsejson)
  //     console.log(responsejson)
      
  //   }

  //   fetchdata()
  // },[])
  // // console.log(responsejson)
  // console.log(data)



  // function onFinish(values){
  //   if values.username = 'Avinash' and valu = '12345678'{
  //     return 0
  //   }
  // }
  
  const [r_id, setR_id] = useState("");


  async function fetchdata(){
    await fetch(`${BASE_URL}delete_resident`,{
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': sessionStorage.getItem('token')
          },
        //make sure to serialize your JSON body
        body: JSON.stringify({
          r_id: r_id 
        })
      }
    )
    .then(alert('Resident deleted'))
    // .catch(alert("ERROR....Try Again"))
    
    }

//   const onSubmits = ()=>{
//     if ((name == 'Avinash') & (password == '12345678')){
//         <Link to='/Home'>Home</Link>
//         // console.log('Avinash')
//         // return(
//         // <div>
//         //     <Home/>
//         // </div>
            
//         //     )

//     }
//   }

  const inputEvent = (event)=>{
    // console.log(event.target.value);
    setR_id(event.target.value);
  }
  if (!sessionStorage.getItem('token')) {
    return <Login />
  }

  return (
    <div>
        <h1>Enter Details of Resident</h1>
        <input  
          type = 'text'
          placeholder = 'Resident ID'
          onChange = {inputEvent}
          value = {r_id}
          />
        <br />
        {/* <Link to= {`/Home/${name}/${password}`} > SUBMIT</Link> */}
        <button onClick = {fetchdata} type = "submit">Delete</button>
    </div>

    
  //  <div>
  //    { 
  //      data?.map((detail)=>{
  //        return(
  //          <ul key={detail.f_id}>
  //            <li>{detail.name}</li>
  //          </ul>
  //        )
  //      })
  //     }
  //  </div>
  );

  
}

export default Delete_Resident;
