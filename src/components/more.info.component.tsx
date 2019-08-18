import React from 'react';
import RevLogo from '../assets/rev-logo.png'
import { getRental } from '../actions/search.action'
import { IState, ISearchState } from '../reducers/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

export interface ISearchProps {
    search: ISearchState;

    getRental: () => void;
}

export class MoreInfoComponent extends React.Component<ISearchProps>{
    constructor(props: any) {
        super(props);
    }

    getRentals() {
        this.props.getRental();
    }
    render() {
        return (
            <div>
                <img src={RevLogo} alt="Paris" className="img-adjust-position"></img>
                {/* Name of the car
            description */}
                <Link to="/look-for-a-car">
                    <button className="rent">Rent</button>
                </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfoComponent);