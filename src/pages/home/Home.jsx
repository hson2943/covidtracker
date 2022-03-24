import React from 'react'
import styles from './home.module.css'
import Cards from '../../components/cards/Cards'
import Search from '../../components/search/Search'
import { fetchcountry, fetchInfoEachcountry } from '../../api/api.js';
class Home extends React.Component {
    state = {
        data: {},
        country: ''
    }
    //this func operate at first render 
    async componentDidMount() {
        const data = await fetchInfoEachcountry();
        this.setState({ data, country: 'Global' })
    }
    showcountry = async (country) => {
        const data = await fetchInfoEachcountry(country);
        this.setState({ data, country: country })
    }
    render() {
        const { data, country } = this.state
        console.log(data)
        return (
            <div className={styles.home} >
                <Cards data={data} country={country} />
                <Search showcountry={this.showcountry} />
            </div>
        )
    }

}
export default Home
