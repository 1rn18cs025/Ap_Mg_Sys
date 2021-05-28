import React, { useEffect, useState } from 'react';
import Login from './Login';
import get_obj from '../requests_objects/get'
import { BASE_URL } from '../config';

import { Table} from 'antd';
import { MyLayout } from './MyLayout';



const Resident = () => {
  const [data, setdata] = useState()

  useEffect(() => {
    async function fetchdata() {
      // console.log(get_obj)
      const respo = await fetch(`${BASE_URL}view_residents`, get_obj);
      const responsejson = await respo.json()
      setdata(responsejson)
      //   console.log(responsejson)

    }

    fetchdata()
  }, [])

  const columns = [
    {
      title: 'R_id',
      dataIndex: 'r_id',
      // key: 'name',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      // key: 'age',
    },
    {
      title: 'Contact Number',
      dataIndex: 'phone',
      // key: 'address',
    },
    {
      title: 'Aadhar Number',
      dataIndex: 'aadhar_id',
      // key: 'address',
    },
    {
      title: 'Flat Number',
      dataIndex: 'f_id',
      // key: 'address',
    },
  ];

  if(!sessionStorage.getItem('token')){
    return <Login/>
  }
  return (
    <MyLayout children = {<Table columns={columns} dataSource={data} />} children1={['1']} children2 = {'Residents'}>
      
    </MyLayout>
  )
}

export default Resident;