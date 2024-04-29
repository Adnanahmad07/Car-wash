import './about.css';
import Image from '../../assets/profile.png'



const About = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={Image} alt="possibility" />

            </div>
            <div className="gpt3__possibility-content">
                <h4>ABOUT THE AKASH CAR CARE</h4>
                <h1 className="gradient__text">
                    The Akash car services and care's
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit incidunt ab iure. Quisquam.
                    dolor sit amet consectetur, adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ea debitis veritatis. Necessitatibus, culpa. Minus nobis et natus sed inventore. Placeat architecto sint et voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et doloremque laudantium officiis recusandae optio maxime non sed vero maiores porro natus doloribus alias repellat, minima tenetur, molestiae accusantium consectetur? explicabo soluta, velit praesentium quae.Impedit incidunt ab iure. Quisq
                </p>
                <h4>Request for call</h4>
            </div>

        </div>
    )
}

export default About