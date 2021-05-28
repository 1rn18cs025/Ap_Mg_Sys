import React, { useEffect, useState } from 'react';
import get_obj from '../requests_objects/get'
import { BASE_URL } from '../config';
import { Table} from 'antd';
import { MyLayout } from './MyLayout';
import Login from './Login'
const Complain = () => {
  const [data,setdata] = useState()

  useEffect(()=>{
    async function fetchdata(){
      const response = await fetch(`${BASE_URL}view_complains`,get_obj)
      const responsejson = await response.json()
      setdata(responsejson)
    //   console.log(responsejson)
      
    }

    fetchdata()
  },[])

  const columns = [
    {
      title: 'C_id',
      dataIndex: 'c_id',
      // key: 'name',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      // key: 'age',
    },
    // {
    //   title: 'Resident Id',
    //   dataIndex: 'r_id',
    //   // key: 'address',
    // },
    {
      title: 'Flat Number',
      dataIndex: 'f_no',
      // key: 'address',
    },
  ];

  if (!sessionStorage.getItem('token')) {
    return <Login/>
  }
  return (
    <MyLayout children = {<Table columns={columns} dataSource={data} />} children1={['5']} children2 = {'Complains'}>  
    </MyLayout>
    )
}

export default Complain;