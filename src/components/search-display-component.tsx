import * as React from 'react';
import { IState, ISearchState } from '../reducers/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './search.css'
import { getRental } from '../actions/search.action'
import RevLogo from '../assets/rev-logo.png'

export interface ISearchProps {
  search: ISearchState;

  getRental: () => void;
}

export class SearchDisplayComponent extends React.Component<ISearchProps> {
  constructor(props: any) {
    super(props);
  }

  getRentals() {
    this.props.getRental();
  }

  render() {
    return (

      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            {/* <button onClick={() => this.getRentals()}>Test</button> */}
            <img src={RevLogo} alt="Paris" className="left" />
            <h5 className="mb-1">Car#1</h5>
            <Link to="/look-for-a-car">
              <button className="button">Rent</button>
            </Link>
            <Link to="/more-info">
              <button className="button3">More Info</button>
            </Link>

          </div>
          <p className="mb-1">This car is the 1st car</p>
          <small>Little description</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <img src={RevLogo} alt="Paris" className="left" />
            <h5 className="mb-1">Car#2</h5>
            <Link to="/look-for-a-car">
              <button className="button">Rent</button>
            </Link>
            <Link to="/more-info">
              <button className="button3">More Info</button>
            </Link>
          </div>
          <p className="mb-1">This is the 2nd car</p>
          <small className="text-muted">Little description.</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <img src={RevLogo} alt="Paris" className="left" />
            <h5 className="mb-1">Car#3</h5>
            <Link to="/look-for-a-car">
              <button className="button">Rent</button>
            </Link>
            <Link to="/more-info">
              <button className="button3">More Info</button>
            </Link>
          </div>
          <p className="mb-1">This is the 3rd Car</p>
          <small className="text-muted">Little description</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <img src={RevLogo} alt="Paris" className="left" />
            <h5 className="mb-1">Car#4</h5>
            <Link to="/look-for-a-car">
              <button className="button">Rent</button>
            </Link>
            <Link to="/more-info">
              <button className="button3">More Info</button>
            </Link>
          </div>
          <p className="mb-1">This is the 4th Car</p>
          <small className="text-muted">Little description</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <img src={RevLogo} alt="Paris" className="left" />
            <h5 className="mb-1">Car#5</h5>
            <Link to="/look-for-a-car">
              <button className="button">Rent</button>
            </Link>
            <Link to="/more-info">
              <button className="button3">More Info</button>
            </Link>
          </div>
          <p className="mb-1">This is the 5th Car</p>
          <small className="text-muted">Little description</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <img src={RevLogo} alt="Paris" className="left" />
            <h5 className="mb-1">Car#6</h5>
            <Link to="/look-for-a-car">
              <button className="button">Rent</button>
            </Link>
            <Link to="/more-info">
              <button className="button3">More Info</button>
            </Link>
          </div>
          <p className="mb-1">This is the 6th Car</p>
          <small className="text-muted">Little description</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <img src={RevLogo} alt="Paris" className="left" />
            <h5 className="mb-1">Car#7</h5>
            <Link to="/look-for-a-car">
              <button className="button">Rent</button>
            </Link>
            <Link to="/more-info">
              <button className="button3">More Info</button>
            </Link>
          </div>
          <p className="mb-1">This is the 7th Car</p>
          <small className="text-muted">Little description</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <img src={RevLogo} alt="Paris" className="left" />
            <h5 className="mb-1">Car#8</h5>
            <Link to="/look-for-a-car">
              <button className="button">Rent</button>
            </Link>
            <Link to="/more-info">
              <button className="button3">More Info</button>
            </Link>
          </div>
          <p className="mb-1">This is the 8th Car</p>
          <small className="text-muted">Little description</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <img src={RevLogo} alt="Paris" className="left" />
            <h5 className="mb-1">Car#9</h5>
            <Link to="/look-for-a-car">
              <button className="button">Rent</button>
            </Link>
            <Link to="/more-info">
              <button className="button3">More Info</button>
            </Link>
          </div>
          <p className="mb-1">This is the 9 Car</p>
          <small className="text-muted">Little description</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <img src={RevLogo} alt="Paris" className="left" />
            <h5 className="mb-1">Car#10</h5>
            <Link to="/look-for-a-car">
              <button className="button">Rent</button>
            </Link>
            <Link to="/more-info">
              <button className="button3">More Info</button>
            </Link>
          </div>
          <p className="mb-1">This is the 10th Car</p>
          <small className="text-muted">Little description</small>
        </a>
      </div>


    )
  }
}
const mapStateToProps = (state: IState) => ({ // define mapStateToProps function, making poke state
  search: state.search
});

const mapDispatchToProps = { // define mapDispatchToProps?
  getRental: getRental
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchDisplayComponent);