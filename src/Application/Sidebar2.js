import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import '../shared/GlobalStyle/SettingsStyle.css'

export default class Sidebar1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
          tabsList1 : [
            {
              tab: "Contacts ",
              to:"/message"
            },
            {
              tab: "My Profile",
              to:"/Contacts"
            },
            {
              tab: "Settngs",
              to:"/message"
            },        
          ],
        }
    }
render(){
    return(
        <div align="left" id="sidebarleft">
        {this.state.tabsList1.map((tabItem,index) =>{return(<div style={{width:'100%',marginTop:'3%'}} id="tabsleft">  
        <Link to={tabItem.to}>{tabItem.tab}</Link></div>)})}
        </div>
    )
}
}