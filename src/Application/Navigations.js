
import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import helper from '../shared/constants'
import '../shared/GlobalStyle/SettingsStyle.css'

export default class Navigations extends React.Component {
 render(){
return(
  <div>
    <div className="wrapper">
    <div align="left" id="sidebar">
    {helper.tabsList1.map((tabItem,index) =>{return(
    <div id="tabs" style={{height:'9%',fontSize:'22px',backgroundColor: 'rgb(204, 215, 224)',
    border: '0.2px solid rgb(238, 242, 245)',padding:'1% 5% 0% 4%',width:'90%'}} >  
    <Link  style={{ textDecoration: 'none' }} to={tabItem.to}>{tabItem.tab}</Link></div>)})}
    </div>
    <div id="content" align="center" style={{fontSize:'22px'}}>
    navigationscontent
    </div>
    <div align="right" id="sidebar">
    {helper.tabsList2.map((tabItem,index) =>{return(<div id="tabs" style={{height:'9%',fontSize:'22px',
    backgroundColor: 'rgb(204, 215, 224)',padding:'1% 4% 0% 3%',width:'90%',
    border: '0.2px solid rgb(238, 242, 245)'}}> 
     {tabItem.tab==='Logout'?<a  style={{ textDecoration: 'none' }} href="https://www.google.com">Logout</a>: 
    <Link  style={{ textDecoration: 'none' }} to={tabItem.to}>{tabItem.tab}</Link>}</div>)})}
    </div>
    </div></div>
)
}
}
