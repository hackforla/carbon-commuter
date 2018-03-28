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
      width: "300px",
      backgroundColor: "white",
      position: "absolute",
      left: "0px",
      height: "100%",
    }
    const closedSideBarStyle = {
      display: "none",
    }
    const openButtonStyle = {
      position: "absolute",
      left: "300px",
      width: "20px",
      height: "42px",
      backgroundColor: "rgba(255,255,255,0.9)",
      marginTop: "8px",
      cursor: "pointer",
    }
    const closedButtonStyle = {
      position: "absolute",
      left: "0px",
      width: "20px",
      height: "42px",
      backgroundColor: "rgba(255,255,255,0.9)",
      marginTop: "8px",
      cursor: "pointer"
    }
    const leftIconStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%"
    }
    const inputStyle = {
      marginTop: "8px",
      outline: "none",
      width: "270px",
      height: "42px",
      border: "0",
      padding: "0",
      border: ".5px solid grey"
    }

    return (
      <div>
        <div 
          style={open ? openSideBarStyle : closedSideBarStyle}
        >
          <input
            style={inputStyle}
          >
          </input>
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