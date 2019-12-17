import React from 'react'
import Component from 'react-router-dom'
import Carousel from './Carousel'
import Layout from '../styles/Layout'
import Footer from './Footer'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <Layout>
                {/* <Header>
                </Header> */}
                <Carousel/>
                <Footer/>
            </Layout>
        )
    }
}

export default Home