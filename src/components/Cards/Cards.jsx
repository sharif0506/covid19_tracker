import React, {Component} from "react";
import InnerCards from "./InnerCards";
import moment from "moment";
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

import styles from './Cards.module.css';

class Cards extends Component {
    render() {
        if (!this.props.data) {
            return 'Loading Data...'
        } else {
            const confirmed = this.props.data.confirmed;
            const deaths = this.props.data.deaths;
            const recovered = this.props.data.recovered;
            const lastUpdate = this.props.data.lastUpdate;

            return (
                <div>
                    <h1 className={styles.mainHeader}>Covid-19 Data</h1>
                    <InnerCards name="Infected" data={confirmed} title="Number of Confirmed Cases"/>
                    <InnerCards name="Recovered" data={recovered} title="Number of Recovered Cases"/>
                    <InnerCards name="Deaths" data={deaths} title="Number of Deaths by COVID19"/>
                </div>

            );
        }
    }
}

export default Cards;