import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { BASE_URL } from '../config';
import Login from './Login';

const Insert_Staff = () => {
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
  
  const [name, setName] = useState("");
  const [aadhar,setAadhar] = useState('');
  const [phone,setPhone] = useState('');

  async function fetchdata(){
    await fetch(`${BASE_URL}insert_staff`,{
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-auth-token': sessionStorage.getItem('token')
          },
        //make sure to serialize your JSON body
        body: JSON.stringify({
          name: name,
          aadhar: aadhar,
          phone: phone
        })
      }
    )
    .then(alert("Staff Added"))
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
    setName(event.target.value);
  }
  const inputEvent2 = (event)=>{
    // console.log(event.target.value);
    setAadhar(event.target.value);
  }
  const inputEvent3 = (event)=>{
    // console.log(event.target.value);
    setPhone(event.target.value);
  }

  if (!sessionStorage.getItem('token')) {
    return <Login />
  }

  return (
    <div>
        <h1>Enter Details of Resident</h1>
        <input  
          type = 'text'
          placeholder = 'Staff Name'
          onChange = {inputEvent}
          value = {name}
          />
        <br />
        <input  
          type = 'text'
          placeholder = 'Aadhar Id'
          onChange = {inputEvent2}
          value = {aadhar}
          />
        <input  
          type = 'text'
          placeholder = 'Contact Number'
          onChange = {inputEvent3}
          value = {phone}
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

export default Insert_Staff;
