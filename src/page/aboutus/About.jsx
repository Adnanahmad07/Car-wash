
import "./about.css"
import image from '../../assets/image3.jpg'
import image2 from '../../assets/image4.jpg'
import image3 from '../../assets/image1.jpg'

const About = () => {
    return (
        <div className="aboutus">
            <h1 className="hm">About-Us</h1>
            <div className="aboutcompany">
                <div className="aboutcompany__img-cont">
                    <img src={image} alt="" />
                </div>
                <div className="aboutcompany__text-cont">
                    <h1>Welcome to Expertz Car Wash, where your car’s shine is our top priority</h1>
                    <p>At Expertz, we combine expertise with state-of-the-art technology to provide a superior car cleaning experience. Our team of highly trained professionals is dedicated to delivering the highest quality service to each and every customer. Whether you're coming in for a quick wash or a full detailing, we guarantee your car will leave our premises looking like it just rolled off the showroom floor. <br /> <br />
                        We understand that your time is valuable, so we’ve streamlined our processes to ensure a quick yet thorough wash. Our advanced equipment and techniques allow us to clean your car efficiently without compromising on the quality of the service. From the moment you arrive, you'll notice our commitment to excellence, starting with our friendly and attentive staff who are always ready to assist you.

                        <br /><br />We know how much you value your vehicle, which is why we treat every car as if it were our own. Our team inspects each car thoroughly to ensure no spot is missed, paying special attention to those hard-to-reach areas. Our dedication to detail is what sets us apart and keeps our customers coming back time and time again.



                    </p>
                    <button>explore know</button>
                </div>

            </div>
            <div className="aboutwork">

                <div className="aboutcompany__text-cont marginletf">
                    <h1>The Expertz Car Care</h1>
                    <p>Expertz Car Wash takes pride in using eco-friendly products that are gentle on your car’s finish and safe for the environment. Our biodegradable soaps and cleaners ensure that we’re doing our part to protect the planet while providing you with a pristine clean. In addition to our standard services, we offer a variety of detailing packages designed to meet your specific needs. Whether it’s a deep interior clean, a hand wax, or an engine bay detail, we’ve got you covered. <br /> <br />
                        Our car wash packages are tailored to suit every budget, ensuring that everyone can enjoy the Expertz experience. For those looking for regular maintenance, we offer membership plans that provide excellent value and exclusive benefits. As a member, you’ll enjoy discounted rates, priority service, and special offers throughout the year.
                        <br /><br />Our staff is trained to provide exceptional customer service, addressing any concerns and making sure you’re completely satisfied with the results.

                    </p>
                    <button>explore know</button>
                </div>
                <div className="aboutcompany__img-cont">
                    <img src={image2} alt="" />
                </div>
            </div>

            <div className="final">
                <div className="final__img-div">
                    <img src={image3} alt="" className="bimg" />
                    <div className="black-shadow"></div>

                </div>
                <div>
                    <h2>CONCLUSION</h2>
                    <p>We also offer gift cards, perfect for birthdays, holidays, or any occasion. It’s the gift that keeps on giving, providing your friends and family with the same exceptional service you enjoy. With Expertz Car Wash, you can rest assured that your car is in the best possible hands.

                        Join the Expertz family today and discover why we’re the preferred choice for car owners who demand the best. Experience the difference that professional, dedicated service makes. We’re here to ensure that your car always looks its best, leaving you with more time to enjoy the open road. Visit us today and see why Expertz Car Wash is the ultimate destination for car care.

                        From our comprehensive range of services to our commitment to customer satisfaction, Expertz Car Wash is your go-to for all your car cleaning needs.
                        We look forward to serving you and making your car shine like never before. Thank you for choosing Expertz Car Wash – where excellence is not just a promise, it’s a guarantee.</p>
                </div>
            </div>

        </div>
    )
}

export default About