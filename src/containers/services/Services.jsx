import './services.css'
import Card from '../../components/card/Card.jsx'
import card1img from '../../assets/Screenshot 2024-04-18 010000.jpg'
import card2img from '../../assets/Screenshot 2024-04-18 010050.jpg'
import card3img from '../../assets/image3.jpg'


const Services = () => {
    return (
        <div className='servives'>
            <div className='services__heading'>
                <h1>SERVICES</h1>
            </div>
            <div className="cards__container">






                <Card
                    imgurl={card1img}

                    heading="BOOK YOUR CAR CARE SERVICE"

                    text="Experience seamless automotive care at expertz Car Services in Panchowti, Amravati. Our book car service ensures hassle-free attention from skilled technicians for routine maintenance or repairs."


                />

                <Card
                    imgurl={card3img}

                    heading="CAR CARE PRODUCTS"

                    text="expertz Car Service offers a comprehensive range of car care products designed to keep your vehicle looking pristine and performing at its best."


                />


                <Card
                    imgurl={card2img}

                    heading="FRANCHISE"

                    text="expertz Car Service is a leading franchise known for its excellence in automotive care. With a focus on customer satisfaction, they offer a comprehensive range of services from routine maintenance to diagnostics. Their skilled technicians."


                />



            </div>
        </div>
    )

}


export default Services











