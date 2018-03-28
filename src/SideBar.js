import React, {Component} from 'react';

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      open: true
    }
  }

  toggleSideBar = () => {
    const {
      open
    } = this.state
    open ? this.setState({open: false}) : this.setState({open: true})
  }

  render() {
    const {
      open
    } = this.state
    const openSideBarStyle = {
      width: "200px",
      backgroundColor: "white",
      position: "absolute",
      left: "0px",
      height: "100%",
    }
    const closedSideBarStyle = {
      // position: "absolute",
      // left: "0px"
      display: "none"
    }
    const openButtonStyle = {
      position: "absolute",
      left: "200px",
      width: "20px",
      height: "50px",
      backgroundColor: "rgba(255,255,255,0.9)",
      marginTop: "5px",
      cursor: "pointer",
    }
    const closedButtonStyle = {
      position: "absolute",
      left: "0px",
      width: "20px",
      height: "50px",
      backgroundColor: "rgba(255,255,255,0.9)",
      marginTop: "5px",
      cursor: "pointer"
    }
    const leftIconStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%"
    }
    return (
      <div>
        <div 
          style={open ? openSideBarStyle : closedSideBarStyle}
        >
          SideBar
        </div>
        <div 
          style={open ? openButtonStyle : closedButtonStyle}
          onClick={this.toggleSideBar}
          
        >
          <div style={leftIconStyle}>
              {open ? <span>&#8826;</span> : <span>&#8827;</span>}
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;