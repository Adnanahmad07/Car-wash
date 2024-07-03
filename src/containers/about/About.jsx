import './about.css';
import Image from '../../assets/profile.png'



const About = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={Image} alt="possibility" />

            </div>
            <div className="gpt3__possibility-content">
                <h4>ABOUT THE EXPERTZ CAR CARE</h4>
                <h1 className="gradient__text">
                    The Expertz car services and care's
                </h1>
                <p>Welcome to Expertz Car Wash, where your car’s shine is our top priority. At Expertz, we combine expertise with state-of-the-art technology to provide a superior car cleaning experience. Our team of highly trained professionals is dedicated to delivering the highest quality service to each and every customer. Whether you're coming in for a quick wash or a full detailing, we guarantee your car will leave our premises looking like it just rolled off the showroom floor.

                    We understand that your time is valuable, so we’ve streamlined our processes to ensure a quick yet thorough wash. Our advanced equipment and techniques allow us to clean your car efficiently without compromising on the quality of the service. From the moment you arrive, you'll notice our commitment to excellence, starting with our friendly and attentive staff who are always ready to assist you.


                </p>
                <h4>Request for call</h4>
            </div>

        </div>
    )
}

export default About