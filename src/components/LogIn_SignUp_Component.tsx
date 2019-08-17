import React from "react";
import '../App.scss';
import Login from './LogIn_Main_Component';
import Sign_Up from './Sign_Up_Main_Component';


class Login_SignUp extends React.Component <any, any> {
    rightSide: any;
    container: HTMLDivElement | null | undefined;
    current: any;
  constructor(props: any) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;
    console.log(isLogginActive);

    if (isLogginActive) {
      console.log("setting properties to left");
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
      this.setState({isLogginActive: false});
    } else {
      console.log("setting properties to right");
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
      this.setState({isLogginActive: true});
    }
    
  }

  render() {
     const  isLogginActive  = this.state.isLogginActive;
     const current = isLogginActive ? "Register" : "Login";
     const currentActive = isLogginActive ? "Login" : "Register";
    return (
      <div className="login_div">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={(ref: any) => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Sign_Up containerRef={(ref: any) => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={(ref: any) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}
const RightSide = (props: any) => {
    return (
      <div
        className="right-side"
        ref={props.containerRef}
        onClick={props.onClick}
      >
        <div className="inner-container">
          <div className="text">{props.current}</div>
        </div>
      </div>
    );
  };

export default Login_SignUp;