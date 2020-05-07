import axios from 'axios';

/*class FetchData {

    async fetchData() {
        const url = 'https://covid19.mathdro.id/api';
        try {
            let response = await axios.get(url);
            response = response.data;
            const modifiedData = {
                confirmed: response.confirmed.value,
                recovered: response.recovered.value,
                deaths: response.deaths.value,
                lastUpdated: response.lastUpdate,
            };
            return modifiedData;
        } catch (error) {
            return "test";

        }
    }
}
export default FetchData;*/

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        let response = await axios.get(url);
        response = response.data;
        const modifiedData = {
            confirmed: response.confirmed.value,
            recovered: response.recovered.value,
            deaths: response.deaths.value,
            lastUpdate: response.lastUpdate,
        };
        return modifiedData;
    } catch (error) {
        return null;

    }
}
