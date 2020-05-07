import React, {Component} from "react";
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

import styles from './InnerCards.module.css';

class InnerCards extends Component {
    render() {
        const data = this.props.data;
        const name = this.props.name;
        const title = this.props.title;
        const lastUpdate = this.props.lastUpdate;

        return (
            <div className={styles.container}>
                <Grid container spacing={3} justify="center">
                    <Grid item component={Card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>{name}</Typography>
                            <Typography variant="h5">{data}</Typography>
                            <Typography color="textSecondary">{lastUpdate}</Typography>
                            <Typography variant="body2">{title}</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>

        );
    }
}

export default InnerCards;