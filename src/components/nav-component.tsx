import React from 'react'; 
import { Link } from 'react-router-dom';

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
                            <Link to="/home" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/look-for-a-car" className="nav-link">Rent a Car</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/manager-actions"className="nav-link" href="#">Manager Actions</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Manager Actions
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to="/action" className="dropdown-item">View Cars</Link>
                                <Link to="another-action" className="dropdown-item">View Transactions</Link>
                                <Link to="something-else-here" className="dropdown-item">View Employees</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default NavComponent;