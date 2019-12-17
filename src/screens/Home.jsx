import { React, Component } from 'react'
import CarouselContainer from './Carousel'
import Layout from '../styles/Layout'
import Footer from './Footer'
import Figures from './Figures'

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
                <CarouselContainer />
                <Figures/>
                <Footer/>
            </Layout>
        )
    }
}

export default Home