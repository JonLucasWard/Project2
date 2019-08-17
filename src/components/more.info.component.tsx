import React from 'react';

export class MoreInfoComponent extends React.Component<any, any>{
    render() {
        return (
            <div>
                <img src="paris.jpg" alt="Paris" className="center"></img>
                {/* Name of the car
            description */}
                <button className="button">Buy</button>
                <button className="button">Rent</button>
            </div>
        )
    }
}