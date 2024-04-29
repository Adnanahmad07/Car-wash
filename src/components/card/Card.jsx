
import './card.css'
import Button from '../button/Button'


const Card = (props) => {
    return (
        <div className="lab__card">




            <div className="lab__card-image">
                <img src={props.imgurl} alt="" />
            </div>


            <div className="lab__card-heading_container">
                {/* <img src={props.icon} alt="" /> */}
                <div className="lab__card-heading_container-heading">
                    <h2>{props.heading}</h2>
                    {/* <p>{props.collection}</p> */}
                </div>
            </div>



            <div className="lab__card-text_container">
                <p>{props.text}</p>
            </div>


            <div className="lab__card-button_container">
                <Button text="ENQUIRE NOW" />
            </div>




        </div>
    )
}

export default Card