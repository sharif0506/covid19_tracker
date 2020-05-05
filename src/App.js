import React, {Component} from 'react';
import {Cards, Charts, CountryPicker} from "./components";
import styles from './App.module.css'
import {fetchData} from "./api";

class App extends Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({data: fetchData()})
    }

    render() {
        const {data} = this.state;
        return (
            <div className="styles.container">
                <Cards/>
                <Charts/>
                <CountryPicker/>
            </div>
        );
    }
}

export default App;