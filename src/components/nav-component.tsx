import React from 'react';
import { Link } from 'react-router-dom';
import { tsConstructorType } from '@babel/types';
import { IClickerState, IState } from '../reducers';
import { connect } from 'react-redux';

interface INaveProps { // Nav bar tracks clicker state thanks to reducers
    clicker: IClickerState,
}
const NavComponent: React.FC = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/home" className="navbar-brand">Car Rental System</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/look-for-a-car" className="nav-link">Rent a Car</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/manager-actions" className="nav-link" href="#">Manager Actions</Link>
                        </li>
                        <li className="nav-item active" /* clicker is state is displayed here*/>
                            <Link to="/clicker" className="unset-anchor nav-link">Clicker</Link>
                        </li>
                        <li className="nav-item active dropdown">
                            <div className="nav-link dropdown-toggle pointer" id="examples-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Examples</div>
                            <div className="dropdown-menu" aria-labelledby="examples-dropdown">
                                <div className="dropdown-item"><Link to="/clicker" className="unset-anchor nav-link active">Clicker Game</Link></div>
                                <div className="dropdown-item"><Link to="/poke" className="unset-anchor nav-link active">Poke Finder</Link></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state: IState) => {
    return {
        clicker: state.clicker,
    }
}

export default connect(mapStateToProps)(NavComponent);