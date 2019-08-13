import * as React from 'react';
import { IState, ISearchState } from '../reducers/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './search.css'
import { getRental } from '../actions/search.action'

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
        <a href="#" className="list-group-item list-group-item-action active">
          <div className="d-flex w-100 justify-content-between">
            <button onClick={() => this.getRentals()}>Test</button>
            <h5 className="mb-1">Car#1</h5>
            <button className="button">Rent</button>
            <button className="button2">More Info</button>
          </div>
          <p className="mb-1">This car is the first car</p>
          <small>Little description</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Car#2</h5>
            <button className="button">Rent</button>
            <button className="button2">More Info</button>
          </div>
          <p className="mb-1">This is the 2 car</p>
          <small className="text-muted">Little description.</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Car#3</h5>
            <button className="button">Rent</button>
            <button className="button2">More Info</button>
          </div>
          <p className="mb-1">This is the 3 Car</p>
          <small className="text-muted">Little description</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Car#4</h5>
            <button className="button">Rent</button>
            <button className="button2">More Info</button>
          </div>
          <p className="mb-1">This is the 4 Car</p>
          <small className="text-muted">Little description</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Car#5</h5>
            <button className="button">Rent</button>
            <button className="button2">More Info</button>
          </div>
          <p className="mb-1">This is the 5 Car</p>
          <small className="text-muted">Little description</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Car#6</h5>
            <button className="button">Rent</button>
            <button className="button2">More Info</button>
          </div>
          <p className="mb-1">This is the 6 Car</p>
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