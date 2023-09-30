import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Carousel from 'react-bootstrap/Carousel';

const Image = () => {
    return <img
        className="w-100 object-fit-contain"
        src="https://ik.imagekit.io/9um5tdigihm/8/storage/homepage_v3/595.7468E650d7b392b447.png"
        alt="First slide"
        style={{ maxHeight: "25em" }}
    />
}

function Home() {
    return (
        <div>
            <Header></Header>
            <Carousel className='d-flex'>
                <Carousel.Item interval={1000} className=''>
                    <Image></Image>
                </Carousel.Item>
                <Carousel.Item interval={500} className=''>
                    <Image></Image>
                </Carousel.Item>
                <Carousel.Item className=''>
                    <Image></Image>
                </Carousel.Item>
            </Carousel>
            <Footer></Footer>
        </div>
    )
}

export default Home