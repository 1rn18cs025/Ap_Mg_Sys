import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Home from './Home';
// import '../css/background.css';
import { BASE_URL } from '../config';
// const photo= require('../css/building.jpg')
function App() {
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
  const history = useHistory();

  // useEffect(() => {
  //   if (sessionStorage.getItem('token')) {
  //     <Redirect to='/Home' />

  //   }
  // })

  const [name, setName] = useState("");

  const [password, setPassword] = useState('');


  // const [loggedin, setLoggedin] = useState(false);

  // const [token,setToken] = useState('')

  async function verify(e) {
    e.preventDefault();
    await fetch(`${BASE_URL}login`, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //make sure to serialize your JSON body
      body: JSON.stringify({
        name: name,
        password: password
      })
    }
    )
    .then((response) => response.text())
    .then((value)=>{
      if(value){
        // console.log(respo_json)
        // setToken(respo_json)
        // console.log(document.cookie)
        sessionStorage.setItem('token', value)
        // setLoggedin(true)
        history.push('/Home')
      }
      else{
        console.log('in else')
        history.replace('/')
      }
    })
    .catch((error)=>{
      console.log('in error')
      history.push('/Login')

    })
   
  }

  const inputEvent = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  }
  const inputEvent2 = (event) => {
    // console.log(event.target.value);
    setPassword(event.target.value);
  }


// if(loggedin) {
//   history.push('/Home')
// }
// console.log(history.action);
// console.log(history.length);

// if(loggedin){
//   // history.push('/Home')
//   console.log('avinassss')
//   return <Home/>
// }
  return (
    <div class='login_div'>

      <h1>LOGIN</h1>
      
      <div class='textbox'>
      <i class="fas fa-user"></i>
      <input
        type='text'
        placeholder='Enter Name'
        onChange={inputEvent}
        value={name}
        on
        />
      </div>
      <br />
      <div class='textbox'>
      <i class="fas fa-lock"></i>
        <input
        type='password'
        placeholder='Enter Password'
        onChange={inputEvent2}
        value={password}
        />
      </div>
      <button onClick={verify} type="submit">LOG IN</button>
      {/* {loggedin?<Redirect to='/Home'/>:<Redirect to='/'/>} */}
      {/* <Link to= {`/Home`} > LOG IN </Link> */}
      
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

export default App;
