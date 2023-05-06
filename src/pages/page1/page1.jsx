import React from 'react'
import "./page1.css"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Main from "../../components/Main/Main"
import DeviceSetting from "../../components/DeviceSetting/DeviceSetting"
import WlanSetting from "../../components/WlanSetting/WlanSetting"
import OtherSetting from "../../components/OtherSetting/OtherSetting"
import Sidebar from '../../components/Sidebar/Sidebar';


export default function Page1() {
  return (
    <>
      <Router>
        <div className='page1Container'>
          <div className='page1SidebarWrapper'>
            <Sidebar />
          </div>
          <div className='page1MainWrapper'>
            <Routes>
              <Route path='/deviceStg' element={<DeviceSetting/>}></Route>
              <Route path='/wlanStg' element={<WlanSetting/>}></Route>
              <Route path='/otherStg' element={<OtherSetting/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}