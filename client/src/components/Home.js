import React, { useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
import {MyLayout} from './MyLayout'
// import '../css/home.css'
// import 'antd/dist/antd.css';

const Home = () => {
    const history = useHistory();

    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            history.goBack()
        }
    })

    console.log(history.action);
    console.log(history.length);
    return (
            <MyLayout children={'Hi...there....'}>
                {/* [asddsfd,sdfsdf,sdfsf] */}
            </MyLayout>     
        )
}
export default Home;