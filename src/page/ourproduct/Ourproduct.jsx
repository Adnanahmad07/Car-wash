
import "./ourproduct.css"
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image2.jpg"
import image4 from "../../assets/image4.jpg"

const Ourproduct = () => {
    return (
        <div className="gallry__container">
            <h1>Gallery</h1>
            <p>SEE OUR HAPPY CUSTOMOR MEMORICES</p>
            <div className="gallry__img-container">


                <div className="left__img-container">
                    <div><img src={image1} alt="" /></div>
                    <div><img src={image2} alt="" /></div>
                    <div><img src={image1} alt="" /></div>
                    <div><img src={image2} alt="" /></div>

                </div>



                <div className="right__img-container">
                    <div><img src={image3} alt="" /></div>
                    <div><img src={image1} alt="" /></div>
                    <div><img src={image3} alt="" /></div>
                    <div><img src={image4} alt="" /></div>
                </div>




            </div>
        </div>
    )
}

export default Ourproduct