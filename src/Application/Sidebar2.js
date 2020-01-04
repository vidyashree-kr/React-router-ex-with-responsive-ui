import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import helper from '../shared/constants'
import '../shared/GlobalStyle/SettingsStyle.css'

export default class Sidebar1 extends React.Component{
    render(){
    return(
        <div>
        {helper.tabsList2.map((tabItem,index) =>{return(<div id="tabs"
         style={{padding:'2% 0% 2% 3%',textDecoration: 'none', color: 'white' }}> 
          {tabItem.tab==='Logout'?<a  style={{ textDecoration: 'none' }} href="https://www.google.com">Logout</a>: 
        <Link  style={{ textDecoration: 'none' }} to={tabItem.to==='/settings'?'/Contacts':'/message'}>{tabItem.tab}</Link>}</div>)})}
         </div>
    )
}
}