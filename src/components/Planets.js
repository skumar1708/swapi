import React, { Component } from 'react';
import './styles.css';
import { connect } from "react-redux";
import ModalInfo from './Modal';
import { debounce, checkLoginStatus } from "../utils"
import { onLogout, getPlanets } from "../actions";

class Planets extends Component {

    constructor(props) {
        super(props);
        const { userData, planetsData } = props;
        this.state = {
            filtered: planetsData || [{ name: 'No Data Found' }],
            name: userData ? userData[0].name : ""
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        const { loginSuccess, history, planetsData, userData } = props;
        if (!checkLoginStatus()) {
            history.push("/login")
        } else if (checkLoginStatus() && !userData) {
           let  userData = JSON.parse(sessionStorage.getItem("userData"));
            return {
                name: userData ? userData[0].name : "",
                filtered: planetsData
            };
        }

        return {
            filtered: planetsData
        };
    };

    filterList(param) {
        const { dispatch } = this.props;
        dispatch(getPlanets({ param }));
    }

    lessItems(event) {
        // if (!event.currentTarget.value) this.setState({ filtered: [] });
    }

    logout = () => {
        const { dispatch } = this.props;
        dispatch(onLogout());
    };

    itemClicked(planet) {
        this.setState({
            showInfo: true,
            planet: planet
        });
    }

    hideInfo() {
        this.setState({
            showInfo: false
        });
    }
    render() {
        const { name, planet, showInfo, filtered } = this.state;

        return (
            <div className="container">
                {showInfo ? <ModalInfo planet={planet} hideInfo={this.hideInfo.bind(this)} /> : ''}
                <div className="row">
                    <div className="col-md-12 userinfo">
                        Welcome: {name}<i className="fa fa-sign-out" aria-hidden="true" onClick={this.logout}> Logout </i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 center">
                        <input type="text" className="form-control"
                            placeholder="Search planets here"
                            onChange={(evt) => {
                                const val = evt.target.value;
                                return debounce(this.filterList.bind(this, val), 2000)()
                            }} onBlur={this.lessItems} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 center planet-list">
                        <div className={`list-group`}>
                            {filtered ?
                                (Object.values(filtered).map((val, i) => {
                                    let fontSize = {
                                        fontSize: (50 + Number(val.diameter) / 1e3) + 'px'
                                    };
                                    let boundItemClick = this.itemClicked.bind(this, val);
                                    return <a href="#" className="list-group-item" key={i}
                                        style={fontSize} onClick={boundItemClick}>
                                        {val.name} <i className="fa fa-globe" aria-hidden="true">
                                        </i></a>;
                                })
                                ) : ''}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default connect((state) => {
    // const userData = state.get
    return {
        userData: state.userData,
        loginSuccess: state.loginSuccess,
        planetsData: state.planetsData
    }
})(Planets);