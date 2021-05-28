import React, { useEffect, useState } from 'react';
import Login from './Login';
import get_obj from '../requests_objects/get'
import { BASE_URL } from '../config';
import { Table} from 'antd';
import { MyLayout } from './MyLayout';

const Flat = () => {
  const [data, setdata] = useState()
  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(`${BASE_URL}view_flat`,get_obj)
      const responsejson = await response.json()
      setdata(responsejson)
      //   console.log(responsejson)
    }
    fetchdata()
  }, [])

  const columns = [
    {
      title: 'Flat Number',
      dataIndex: 'f_id',
      // key: 'name',
    },
    {
      title: 'Resident',
      dataIndex: 'r_id',
      // key: 'age',
    },
    {
      title: 'Staff_Id',
      dataIndex: 's_id',
      // key: 'address',
    },
    {
      title: 'Rent',
      dataIndex: 'rent',
      // key: 'address',
    },
    {
      title: 'Size',
      dataIndex: 'size',
      // key: 'address',
    },
    {
      title: 'Is_Available',
      dataIndex: 'is_available',
      // key: 'address',
    },
  ];

  if(!sessionStorage.getItem('token')){
    return <Login/>
  }
  return (
    <MyLayout children = {<Table columns={columns} dataSource={data} />} children1={['2']} children2 = {'Flats'}>  
    </MyLayout>
    )
}

export default Flat;
