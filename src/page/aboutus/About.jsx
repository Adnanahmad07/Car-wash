
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
                    <h1>The Akash Car Care Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae atque in a quae enim tempore voluptatem deserunt, eveniet libero dicta illo recusandae quisquam molestias distinctio sed dolor, facere assumenda expedita. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea labore ipsum pariatur consequuntur facilis eos dolorem totam ullam aspernatur harum, exercitationem eum unde necessitatibus eius velit autem quaerat eaque quae.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae atque in a quae enim tempore voluptatem deserunt, eveniet libero dicta illo recusandae quisquam molestias distinctio sed dolor, facere assumenda expedita. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea labore ipsum pariatur consequuntur facilis eos dolorem totam ullam aspernatur harum, exercitationem eum unde necessitatibus eius velit autem quaerat eaque quae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae atque in a quae enim tempore voluptatem deserunt, eveniet libero dicta illo recusandae quisquam molestias distinctio sed dolor, facere assumenda expedita. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea labore ipsum pariatur consequuntur facilis eos dolorem totam ullam aspernatur harum, exercitationem eum unde necessitatibus eius velit autem quaerat eaque quae.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi voluptatem maxime nostrum praesentium, aliquam placeat nihil exercitationem aut facilis nisi quam quibusdam illo quod dicta laudantium corporis voluptas magnam?
                    </p>
                    <button>explore know</button>
                </div>

            </div>
            <div className="aboutwork">

                <div className="aboutcompany__text-cont marginletf">
                    <h1>The Akash Car Care</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae atque in a quae enim tempore voluptatem deserunt, eveniet libero dicta illo recusandae quisquam molestias distinctio sed dolor, facere assumenda expedita. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea labore ipsum pariatur consequuntur facilis eos dolorem totam ullam aspernatur harum, exercitationem eum unde necessitatibus eius velit autem quaerat eaque quae.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi voluptatem maxime nostrum praesentium, aliquam placeat nihil exercitationem aut facilis nisi quam quibusdam illo quod dicta laudantium corporis voluptas magnam?
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
                    <h2>conclution</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum excepturi praesentium laudantium recusandae, consectetur inventore provident commodi, ipsum, officia porro quisquam iusto. Sequi, et in non vel exercitationem aliquid! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias veniam eos quasi, culpa deserunt doloribus esse fuga ratione maxime libero, praesentium, consectetur incidunt nam perspiciatis accusamus ullam sint doloremque fugit?</p>
                </div>
            </div>

        </div>
    )
}

export default About