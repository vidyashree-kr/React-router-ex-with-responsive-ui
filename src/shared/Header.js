import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import '../shared/GlobalStyle/HeaderStyle.css'
import MenuIcon2 from '../assets/menu2.png'
import Photo from '../assets/photo3.jpeg'
import Logo from '../assets/logo.png'

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = { windowWidth: undefined, user: 'Vidyashree K R' }
  }
  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth
    });
  async componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  render() {
    const { windowWidth } = this.state
    return (
      <div>
        {windowWidth > 600 && (<nav>
          <header style={{ backgroundColor: "blue" }}>
            <div className="logo">
              <div align="center" className="menu">
                <div style={{marginTop:'2%'}}><Link to="/"><img src={Logo} alt="logo" width='90px' height="70px" /></Link>
                <span style={{marginLeft:'450px'}}><Link style={{textDecoration:'none',fontSize:'30px', color:'white'}}to="/" ><b>Facebook</b></Link></span></div>

              </div>
              <div align="center" className="settings">
                <div style={{paddingTop:'1%'}}><img src={Photo} style={{ borderRadius: '50%' }} alt="photo" width='70px' height="70px" /></div>
                <div style={{ fontSize: '16px',color:'white' }}>Welcome {this.state.user}</div></div>
            </div>
          </header>
        </nav>)}
        {windowWidth <= 600 && (
          <div><nav>
            <header style={{ backgroundColor: "blue" }}>
              <div align="center" className="menu">
                <div style={{marginTop:'2%'}}> <Link style={{textDecoration:'none'}}to="/" >
                <img src={Logo} alt="Settings" width='80px' height="50px"/>
                </Link><span style={{marginLeft:'40px'}}>
                <Link style={{textDecoration:'none', color:'white'}}to="/" ><b>Facebook</b></Link></span></div>

              </div>
              <div align="center"  className="settings">
                <div style={{marginTop:'2%'}}><img src={Photo} style={{ borderRadius: '50%' }} alt="photo" width='50px' height="50px" /></div>
                <div style={{ fontSize: '16px',color: "white" }}>Welcome </div></div>
              <span style={{ marginRight: '62%', fontSize: '20px' }}><Link to="/sidebar1">
                <img src={MenuIcon2} alt="Profile" style={{marginRight:'3%'}} width="60px" height="60px" /></Link>
              </span>
              <span style={{ fontSize: '20px' }}><Link to="/sidebar2">
               <img src={MenuIcon2} alt="Settings" width="60px" height="60px" /></Link></span>
            </header>
          </nav></div>
        )}       </div>

    )
  }
}