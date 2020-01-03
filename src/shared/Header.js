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
          <header style={{ backgroundColor: "rgb(153, 248, 217)" }}>
            <div className="logo">
              <div align="center" className="menu">
                <div><Link to="/"><img src={Logo} style={{ borderRadius: '50%' }} alt="Settings" width='120px' height="80px" /></Link></div>

              </div>
              <div align="center" className="settings">
                <div><img src={Photo} style={{ borderRadius: '50%' }} alt="photo" width='70px' height="70px" /></div>
                <div style={{ fontSize: '16px' }}><b>Welcome {this.state.user}</b></div></div>
            </div>

          </header>
        </nav>)}
        {windowWidth <= 600 && (
          <div><nav>
            <header style={{ backgroundColor: "rgb(153, 248, 217)" }}>
              <div align="center" className="menu">
                <div> <Link to="/" ><img src={Logo} style={{ borderRadius: '50%' }} alt="Settings" width='80px' height="50px" /></Link></div>

              </div>
              <div align="center" className="settings">
                <div><img src={Photo} style={{ borderRadius: '50%' }} alt="photo" width='50px' height="50px" /></div>
                <div style={{ fontSize: '16px' }}>Welcome </div></div>
              <span style={{ marginRight: '62%', fontSize: '20px' }}><Link to="/sidebar1">
                <img src={MenuIcon2} alt="Profile" width="60px" height="60px" /></Link>
              </span>
              <span style={{ fontSize: '20px' }}><Link to="/sidebar2"> <img src={MenuIcon2} alt="Settings" width="60px" height="60px" /></Link></span>
            </header>
          </nav></div>
        )}       </div>

    )
  }
}