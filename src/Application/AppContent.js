import React from 'react'
import '../shared/GlobalStyle/SettingsStyle.css'
import YouTube from 'react-youtube';
import avatar from '../assets/avatar.jpg'
import Photo1 from '../assets/photo1.jpeg'
import Photo2 from '../assets/photo2.jpeg'
import Photo3 from '../assets/photo3.jpeg'
import Photo4 from '../assets/photo4.jpeg'
import Photo6 from '../assets/photo6.jpeg'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
let contentList = [
    { name: 'Vinay', type: 'photo', content: 'Feeling excited in nature camp', description: '', value: Photo1 },
    { name: 'Ajay', type: 'video', content: '', description: 'Equality in relationship', value: "XM-HJT8_esM" },
    { name: 'Arya', type: 'photo', content: 'Feeling happy in butterfly park', description: '', value: Photo2 },
    { name: 'Pushkal', type: 'photo', content: '', description: 'Cute baby sleeping', value: Photo3 },
    { name: 'Vijay', type: 'video', content: '', description: 'The previlage game', value: "AOMpxsiUg2Q" },
    { name: 'Shree', type: 'photo', content: 'updated her cover Photo', description: '', value: Photo4 },
    { name: 'Sujay', type: 'video', content: '', description: 'Youtube developers', value: "M7lc1UVf-VE" },
    { name: 'Pranav', type: 'photo', content: 'updated his cover Photo', description: '', value: Photo6 },
    { name: 'Vidya', type: 'photo', content: 'updated her profile Photo', description: '', value: Photo1 },
];
var videoId = contentList[0];
let i = 0;
let currentdate = new Date();
let date = currentdate.getDay() + "/" + currentdate.getMonth()
    + "/" + currentdate.getFullYear() + " @ "
    + ((currentdate.getHours() < 10) ? "0" : "") + currentdate.getHours() + ":"
    + ((currentdate.getMinutes() < 10) ? "0" : "") + currentdate.getMinutes() + ":" + ((currentdate.getSeconds() < 10) ? "0" : "") + currentdate.getSeconds();

export default class AppContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            windowWidth: undefined,
            tabsList1: [
                {
                    tab: "User Profile",
                    to: "/navigations"
                },
                {
                    tab: "Messages",
                    to: "/settings"
                },
                {
                    tab: "Requests",
                    to: "/navigations"
                },
                {
                    tab: "Friends",
                    to: "/settings"
                },
            ], tabsList2: [
                {
                    tab: "Contacts",
                    to: "/navigations"
                },
                {
                    tab: "My Profile",
                    to: "/settings"
                },
                {
                    tab: "Settings",
                    to: "/navigations"
                },
            ]
        }
    }
    _onReady(e) {
        e.target.playVideo(contentList[i])
    }

    _onEnd(event) {
        videoId = contentList[i]
        event.target.playVideo(contentList[++i]);
    }

    render() {
        const { windowWidth } = this.state
        const opts = {
            height: '420',
            width: '97%',
            playerVars: {
                autoplay: 0
            }
        };
        return (
            <div>  {windowWidth > 600 && (
                <div className="wrapper">

                    <div align="left" id="sidebar">
                        {this.state.tabsList1.map((tabItem, index) => {
                            return (<div id="tabs">
                                <Link to={tabItem.to}>{tabItem.tab}</Link></div>)
                        })}
                    </div>
                    <div id="content">
                        {contentList.map((contentId, index) => {
                            return (
                                <div style={{ borderBottom: '9px solid grey' }}>
                                    <div style={{ margin: '1% 0 1% 0' }}>
                                        <div>
                                            <img style={{ borderRadius: '50%' }} src={contentId.type === 'photo' ? contentId.value : avatar}
                                                width="50px" height="50px" />
                                            <span>
                                                <span style={{ color: 'blue', fontSize: '24px', margin: '0px 10px 5px 0px' }}>
                                                    <b>{contentId.name}</b>
                                                </span>
                                                <span>{contentId.content}</span></span>
                                        </div>
                                        <div style={{ fontSize: '20px' }}>{contentId.description}</div>
                                        <span>{date}</span>
                                    </div>
                                    {contentId.type === 'video' ?
                                        <div align="center">
                                            <YouTube
                                                style={{ width: '100%' }}
                                                videoId={contentId.value}
                                                opts={opts}
                                                onClick={(e) => this._onReady(e)}
                                                onEnd={this._onEnd}
                                            />
                                        </div> : contentId.type === "photo" ? <img style={{ width: '100%' }} src={contentId.value} /> : null}
                                </div>)
                        })}
                    </div>
                    <div align="right" id="sidebar">
                        {this.state.tabsList2.map((tabItem, index) => {
                            return (<div id="tabs">
                                <Link to={tabItem.to}>{tabItem.tab}</Link>
                            </div>)
                        })}
                        <div style={{ backgroundColor: 'rgb(246, 247, 248)', color: 'blue' }}>Last password changed on <div>01/01/2019</div></div>
                    </div>
                </div>)}

                {windowWidth <= 600 && (<div>
                    {contentList.map((contentId, index) => {
                        return (
                            <div style={{ borderBottom: '9px solid grey' }}>
                                <div style={{ margin: '1% 0 1% 0' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ display: 'inline', float: 'left' }}>
                                            <img style={{ borderRadius: '50%' }} src={contentId.type === 'photo' ? contentId.value : avatar}
                                                width="50px" height="50px" />
                                        </div>
                                        <div style={{ display: 'inline', float: 'left' }}>
                                            <span style={{ color: 'blue', fontSize: '24px', margin: '0px 10px 5px 0px' }}>
                                                <b>{contentId.name}</b>
                                            </span> {contentId.content}</div>
                                    </div>
                                    <div style={{ fontSize: '20px' }}>{contentId.description}</div>
                                </div>
                                {contentId.type === 'video' ?
                                    <div align="center">
                                        <YouTube
                                            videoId={contentId.value}
                                            opts={opts}
                                            onClick={(e) => this._onReady(e)}
                                            onEnd={this._onEnd}
                                        />
                                    </div> : contentId.type === 'photo' ? <img src={contentId.value} /> : null}
                            </div>)
                    })}
                </div>)}</div>
        )
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
}