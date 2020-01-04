import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import '../shared/GlobalStyle/SettingsStyle.css'
import helper from '../shared/constants'

export default class Sidebar1 extends React.Component{
   render(){
    return(
        <div>
        {helper.tabsList1.map((tabItem,index) =>{return(<div 
        style={{padding:'2% 0% 2% 3%',textDecoration: 'none', color: 'white'}} 
        id="tabs">  
        <Link  style={{ textDecoration: 'none' }} to={tabItem.to==='/settings'?'/Contacts':'/message'}>{tabItem.tab}</Link></div>)})}
        </div>
    )
}
}