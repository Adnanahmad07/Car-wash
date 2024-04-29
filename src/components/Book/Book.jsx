
import "./book.css"

import offertag from '../../assets/c22c9fc4-0555-4460-8401-bf5c28d7ba29.webp'



const Book = (props) => {
    return (
        <div className="Book__container">
            <div className="book__img-cont">
                <img src={props.Mimg} alt="" />
            </div>
            <div className="book__contant-cont">
                <h2>{props.Mheding}</h2>



                <div className="start">
                    <img src={props.star} alt="" />
                </div>





                <div className="price">
                    <h4>{props.price}<span className="cut">{props.cut}</span> <span className="off">{props.off}</span></h4>

                    <p className="harryup">{props.summary}</p>


                    <h5>{props.offers}</h5>
                    <div className="offerdiv">
                        <img src={offertag} alt="" />
                        {/* <p>Bank OfferGet ₹25* instant discount for the 1st Order</p> */}
                        <p>{props.offer1}</p>

                    </div>




                </div>



                <p>{props.itemDetails}</p>
                <div className="btn-cont">

                    <button><a href="https://wa.me/919356668159">whatsapp</a></button>
                    <button className="telegram">
                        <a href="https://web.telegram.org/a/">telegram</a>
                    </button>
                </div>
            </div>





            <div className="specificheading">
                {props.position}
            </div>
        </div>
    )
}

export default Book