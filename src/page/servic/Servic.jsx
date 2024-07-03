
import "./servic.css"
import Book from '../../components/Book/Book.jsx'
import CarWashPlans from "../../components/CarWashPlans/CarWashPlans.jsx"




// image for cards
import card1img from '../../assets/Screenshot 2024-04-18 010000.jpg'
import card2img from '../../assets/bickwash.jpg'
import card3img from '../../assets/image3.jpg'
import card4img from '../../assets/item3.jpg'


// star images
import fourstar from '../../assets/Star_rating_4.5_of_5.png'





const Servic = () => {
    return (
        <div className="Service__main-container">


            <h1>Service</h1>
            <p>below services provided by our team</p>

            <div className="service__card-container">
                <div>
                    <div className="left_aling">
                        < Book

                            Mimg={card1img}
                            Mheding="Car wash with all inside parts"
                            star={fourstar}
                            price="₹999"
                            cut="₹1300"
                            off="4.0% Off"
                            summary="harry up alraddy 50+ customor booked"
                            offers="Available Offers"
                            offer1="if you order in between 1may to 20may you will get intant cash back"
                            position="best seller"

                        />
                    </div>



                    <div className="R_aling">
                        < Book

                            Mimg={card2img}
                            Mheding="Bike Wash"
                            star={fourstar}
                            price="₹2199"
                            cut="₹3000"
                            off="25% Off"
                            summary="this services pease your Bike helth"
                            offers="Available Offers"
                            offer1="if you order in between 1may to 20may you will get intant cash back"
                            position="most loved"


                        />
                    </div>


                    <div>

                        < Book

                            Mimg={card3img}
                            Mheding="skin rubbing"
                            star={fourstar}
                            price="₹1299"
                            cut="₹1400"
                            off="5.0% Off"
                            summary="make your car skin more shiny"
                            offers="Available Offers"
                            offer1="
if you order in between 1may to 20may you will get instant cash back"
                            position="sponserde"


                        />
                    </div>




                    <div className="R_aling">
                        < Book

                            Mimg={card1img}
                            Mheding="Car wash with all inside parts"
                            star={fourstar}
                            price="₹999"
                            cut="₹1300"
                            off="4.0% Off"
                            summary="harry up alraddy 50+ customor booked"
                            offers="Available Offers"
                            offer1="if you order in between 1may to 20may you will get intant cash back"
                            position="best seller"

                        />
                    </div>





                    < Book

                        Mimg={card2img}
                        Mheding="Bike Wash"
                        star={fourstar}
                        price="₹2199"
                        cut="₹3000"
                        off="25% Off"
                        summary="this services pease your car helth"
                        offers="Available Offers"
                        offer1="if you order in between 1may to 20may you will get intant cash back"
                        position="most loved"


                    />




                </div>



                {/* <div></div>
                <div></div>
                <div></div> */}
            </div>
        </div>
    )
}

export default Servic