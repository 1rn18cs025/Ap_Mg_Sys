import React, { useEffect, useState } from 'react';
import get_obj from '../requests_objects/get'
import { BASE_URL } from '../config';
import { Table} from 'antd';
import { MyLayout } from './MyLayout';
import Login from './Login'


const Bill = () => {
  const [data,setdata] = useState()

  useEffect(()=>{
    async function fetchdata(){
      const response = await fetch(`${BASE_URL}view_bills`,get_obj)
      const responsejson = await response.json()
      setdata(responsejson)
    //   console.log(responsejson)
      
    }

    fetchdata()
  },[])

  const columns = [
    {
      title: 'B_id',
      dataIndex: 'b_id',
      // key: 'name',
    },
    {
      title: 'Electricity Bill',
      dataIndex: 'electricity_bill',
      // key: 'age',
    },
    {
      title: ' Water Bill',
      dataIndex: 'water_bill',
      // key: 'address',
    },
    {
      title: 'R_id',
      dataIndex: 'r_id',
      // key: 'address',
    },
    {
      title: 'Flat Number',
      dataIndex: 'f_id',
      // key: 'address',
    },
  ];

  if (!sessionStorage.getItem('token')) {
    return <Login />
  }
  return (
    <MyLayout children = {<Table columns={columns} dataSource={data} />} children1={['4']} children2 = {'Bills'}>  
    </MyLayout>
    )
}

export default Bill;