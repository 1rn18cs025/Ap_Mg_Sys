import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { BASE_URL } from '../config';
import Login from './Login';

const Insert_Bill = () => {
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
  
  const [electricity, setElecericity] = useState("");
  const [water,setWater] = useState('');
  const [r_id,setR_id] = useState('');
  const [f_id,setF_id] = useState('');


  async function fetchdata(){
    await fetch(`${BASE_URL}insert_bill`,{
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': sessionStorage.getItem('token')
          },
        //make sure to serialize your JSON body
        body: JSON.stringify({
          electricity: electricity,
          water: water,
          r_id: r_id,
          f_id:f_id
        })
      }
    )
    .then(alert("Bill Added"))
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
    setElecericity(event.target.value);
  }
  const inputEvent2 = (event)=>{
    // console.log(event.target.value);
    setWater(event.target.value);
  }
  const inputEvent3 = (event)=>{
    // console.log(event.target.value);
    setR_id(event.target.value);
  }
  const inputEvent4 = (event)=>{
    // console.log(event.target.value);
    setF_id(event.target.value);
  }
  if (!sessionStorage.getItem('token')) {
    return <Login />
  }
  return (
    <div>
        <h1>Enter Details of Resident</h1>
        <input  
          type = 'text'
          placeholder = 'Electricity'
          onChange = {inputEvent}
          value = {electricity}
          />
        <br />
        <input  
          type = 'text'
          placeholder = 'Water'
          onChange = {inputEvent2}
          value = {water}
          />
        <input  
          type = 'text'
          placeholder = 'Resident Id'
          onChange = {inputEvent3}
          value = {r_id}
          />
        <input  
          type = 'text'
          placeholder = 'Flat Number'
          onChange = {inputEvent4}
          value = {f_id}
          />
        {/* <Link to= {`/Home/${name}/${password}`} > SUBMIT</Link> */}
        <button onClick = {fetchdata} type = "submit">Add</button>
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

export default Insert_Bill;
