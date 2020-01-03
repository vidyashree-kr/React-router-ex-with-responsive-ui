
import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default class Navigations extends React.Component {
  constructor(props){
    super(props)
    this.state={
      tabsList1 : [
        {
          tab: "User Profile",
          to:"/navigations"
        },
        {
          tab: "Messages",
          to:"/settings"
        },
        {
          tab: "Requests",
          to:"/navigations"
        },
        {
          tab: "Friends",
          to:"/settings"
        },          
      ],tabsList2 : [
            {
              tab: "Contacts",
              to:"/navigations"
            },
            {
              tab: "My Profile",
              to:"/settings"
            },
            {
              tab: "Settings",
              to:"/navigations"
            },        
          ]
    }
}

render(){
return(
  <div>
    <div className="wrapper">
    <div align="left" id="sidebar">
    {this.state.tabsList1.map((tabItem,index) =>{return(
    <div style={{height:'8%',fontSize:'25px',paddingLeft:'2%',backgroundColor: 'rgb(246, 247, 248)',
    border: '0.2px solid rgb(238, 242, 245)'}}>  
    <Link to={tabItem.to}>{tabItem.tab}</Link></div>)})}
    </div>
    <div id="content" align="center" style={{fontSize:'22px'}}>
    navigationscontent
    </div>
    <div align="right" id="sidebar">
    {this.state.tabsList2.map((tabItem,index) =>{return(<div  style={{height:'8%',fontSize:'25px',paddingLeft:'2%',backgroundColor: 'rgb(246, 247, 248)',
    border: '0.2px solid rgb(238, 242, 245)'}}>  
    <Link to={tabItem.to}>{tabItem.tab}</Link></div>)})}
    </div>
    </div></div>
)
}
}
