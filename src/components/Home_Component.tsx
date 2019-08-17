import React from 'react';
import Logo from '../assets/Car_Logo.png'

export class Home extends React.Component<any, any> {

render(){
    return(

        <div className="Home_Div">
         <img src={Logo} />
        </div>
    )
}

}