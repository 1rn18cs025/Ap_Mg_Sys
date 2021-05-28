import React, { useEffect, useState } from 'react';
import Login from './Login';
import get_obj from '../requests_objects/get'
import { BASE_URL } from '../config';
import { MyLayout } from './MyLayout';
import { Table} from 'antd';

const Staff = () => {
  const [data, setdata] = useState()

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(`${BASE_URL}view_staff`, get_obj)
      const responsejson = await response.json()
      setdata(responsejson)
      //   console.log(responsejson)

    }

    fetchdata()
  }, [])

  const columns = [
    {
      title: 'S_id',
      dataIndex: 's_id',
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

  if (!sessionStorage.getItem('token')) {
    return <Login />
  }
  return (
    <MyLayout children = {<Table columns={columns} dataSource={data} />} children1={['3']} children2 = {'Staff'}>  
    </MyLayout>
    )
}

export default Staff;