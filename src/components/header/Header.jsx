import React from 'react';
import {connect} from 'react-redux';
import styles from './Header.css'

export class Header extends React.Component {

    render() {
        return <section>
			<div className={styles.iron + " totalIron"}>Iron: {this.props.spaceShip.get('iron') }</div>
            <div className={styles.error + " errorMsg"}>{this.props.error}</div>
        </section>
    }

}

function mapStateToProps(state) {
    return {
        spaceShip: state.get('spaceShip'),
        error: state.get('errorMsg')
    };
}

export const HeaderContainer = connect(mapStateToProps)(Header);