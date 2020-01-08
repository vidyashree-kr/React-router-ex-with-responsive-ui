import React from "react";
import "../shared/GlobalStyle/SettingsStyle.css";
import YouTube from "react-youtube";
import avatar from "../assets/avatar.jpg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import helper from "../shared/constants";

let videoId = helper.contentList[0];
let i = 0;

export default class AppContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: undefined,
      items: 10,
      loadingState: false
    };
  }

  componentDidMount() {
    this.refs.iScroll.addEventListener("scroll", () => {
      if (
        this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=
        this.refs.iScroll.scrollHeight
      ) {
        this.loadMoreItems();
      }
    });
  }

  loadMoreItems() {
    this.setState({ loadingState: true });
    setTimeout(() => {
      this.setState({ items: this.state.items + 10, loadingState: false });
    }, 3000);
  }

  _onReady(e) {
    e.target.playVideo(helper.contentList[i]);
  }

  _onEnd(event) {
    videoId = helper.contentList[i];
    event.target.playVideo(helper.contentList[++i]);
  }

  render() {
    const { windowWidth } = this.state;
    const opts = {
      height: "420",
      width: "97%",
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <div>
        {" "}
        {windowWidth > 600 && (
          <div className="wrapper">
            <div align="left" id="sidebar">
              {helper.tabsList1.map((tabItem, index) => {
                return (
                  <div
                    style={{ padding: "1% 5% 0% 4%", width: "90%" }}
                    id="tabs"
                  >
                    <Link style={{ textDecoration: "none" }} to={tabItem.to}>
                      {tabItem.tab}
                    </Link>
                  </div>
                );
              })}
            </div>
             <div id="content" ref="iScroll" style={{ height: "200px", overflow: "auto" }}>
              {helper.contentList.map((contentId, index) => {
                return (
                  <div style={{ borderBottom: "9px solid grey" }}>
                    <div style={{ margin: "1% 0 1% 0" }}>
                      <div>
                        <img
                          style={{ borderRadius: "50%" }}
                          src={
                            contentId.type === "photo"
                              ? contentId.value
                              : avatar
                          }
                          width="40px"
                          height="40px"
                        />
                        <span>
                          <span
                            style={{
                              color: "blue",
                              fontSize: "24px",
                              margin: "0px 10px 5px 0px"
                            }}
                          >
                            <b>{contentId.name}</b>
                          </span>
                          <span>{contentId.content}</span>
                        </span>
                      </div>
                      <div style={{ fontSize: "20px" }}>
                        {contentId.description}
                      </div>
                      <span>{contentId.time}</span>
                    </div>
                    {contentId.type === "video" ? (
                      <div align="center">
                        <YouTube
                          style={{ width: "100%" }}
                          videoId={contentId.value}
                          opts={opts}
                          onClick={e => this._onReady(e)}
                          onEnd={this._onEnd}
                        />
                      </div>
                    ) : contentId.type === "photo" ? (
                      <img style={{ width: "100%" }} src={contentId.value} />
                    ) : null}
                  </div>
                );
              })}
              {this.state.loadingState ? (
                <p style={{color:'blue',fontSize:'22px'}}>loading More Items..</p>
              ) : (
                ""
              )}
            </div>
            <div align="right" id="sidebar">
              {helper.tabsList2.map((tabItem, index) => {
                return (
                  <div
                    style={{ padding: "1% 5% 0% 3%", width: "90%" }}
                    id="tabs"
                  >
                    {tabItem.tab === "Logout" ? (
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://www.google.com"
                      >
                        Logout
                      </a>
                    ) : (
                      <Link style={{ textDecoration: "none" }} to={tabItem.to}>
                        <div>{tabItem.tab}</div>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {windowWidth <= 600 && (
          <div id="mobileContent" ref="iScroll" style={{ height: "200px", overflow: "auto" }}>
            {helper.contentList.map((contentId, index) => {
              return (
                <div style={{ borderBottom: "9px solid grey" }}>
                  <div style={{ margin: "1% 0 1% 0" }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ display: "inline", float: "left" }}>
                        <img
                          style={{ borderRadius: "50%" }}
                          src={
                            contentId.type === "photo"
                              ? contentId.value
                              : avatar
                          }
                          width="50px"
                          height="50px"
                        />
                      </div>
                      <div style={{ display: "inline", float: "left" }}>
                        <span
                          style={{
                            color: "blue",
                            fontSize: "24px",
                            margin: "0px 10px 5px 0px"
                          }}
                        >
                          <b>{contentId.name}</b>
                        </span>{" "}
                        {contentId.content}
                      </div>
                    </div>
                    <div style={{ fontSize: "20px" }}>
                      {contentId.description}
                    </div>
                    <div>{contentId.time}</div>
                  </div>
                  {contentId.type === "video" ? (
                    <div align="center">
                      <YouTube
                        videoId={contentId.value}
                        opts={opts}
                        onClick={e => this._onReady(e)}
                        onEnd={this._onEnd}
                      />
                    </div>
                  ) : contentId.type === "photo" ? (
                    <img style={{marginLeft:'3px'}} alt="photo"
                    width= "98%" src={contentId.value} />
                  ) : null}
                </div>
              );
            })}
              {this.state.loadingState ? (
                <p style={{color:'blue',fontSize:'22px'}}>loading More Items..</p>
              ) : (
                ""
              )}
          </div>
        )}
      </div>
    );
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
