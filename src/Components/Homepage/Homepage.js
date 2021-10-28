import React from 'react'
import './HomePage.css'
import Cube from '../../assets/image/cube.png';
import Graph from '../../assets/image/graph.png';
import Trophy from '../../assets/image/trophy.png';
import HomeVector from '../../assets/homevector.png';
import Card from './Card/Card';
import Footer from '../Footer/Footer';

function Homepage() {
    return (
        <>
            <HeaderSection />
            <CardSection />
            <Footer />
        </>
    )
}

const HeaderSection = () => {
    return (
        <div className="main__div flex__center">
            <div className="main__div__left">
                <h1>DSA</h1>
                <h1>Roadmap</h1>
                <div className="height__box__50"></div>
                <button className="primary__button">Get Started</button>
            </div>
            <div className="main__div__right flex__center">
                <img src={HomeVector} alt="main" className="main__div__image"></img>
            </div>
        </div>
    )
}

const CardsData = [
    {
        id: 123555,
        title: "Problem solving",
        image: Cube,
        details: "lLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus eleifend, sollicitudin risus dapibus, varius turpis. Pellentesque justo ligula, tristique porttitor tellus sed, interdum luctus augue. In ultrices sapien vitae auctor vehicula. Suspendisse facilisis mi in imperdiet aliquam. Sed et lacinia eros. Praesent augue velit, condimentum id magna vel, tempus pretium ligula. Mauris sagittis sodales leo at pulvinar."
    },
    {
        id: 456987,
        title: "Track your progress",
        image: Graph,
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus eleifend, sollicitudin risus dapibus, varius turpis. Pellentesque justo ligula, tristique porttitor tellus sed, interdum luctus augue. In ultrices sapien vitae auctor vehicula. Suspendisse facilisis mi in imperdiet aliquam. Sed et lacinia eros. Praesent augue velit, condimentum id magna vel, tempus pretium ligula. Mauris sagittis sodales leo at pulvinar."
    },
    {
        id: 569845,
        title: "Contests",
        image: Trophy,
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut purus eleifend, sollicitudin risus dapibus, varius turpis. Pellentesque justo ligula, tristique porttitor tellus sed, interdum luctus augue. In ultrices sapien vitae auctor vehicula. Suspendisse facilisis mi in imperdiet aliquam. Sed et lacinia eros. Praesent augue velit, condimentum id magna vel, tempus pretium ligula. Mauris sagittis sodales leo at pulvinar."
    }
]

const CardSection = () => {
    return (
        <div className="card__section__master flex__center">
            <h1>Features</h1>
            <div className="card__section">
                {
                    CardsData.map((card) => {
                        return (
                            <Card title={card.title} key={card.id} details={card.details} image={card.image} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Homepage
