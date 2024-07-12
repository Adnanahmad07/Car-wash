import React from "react";

// import Slider from "react-slick";
import './product.css'
import { useState, useEffect } from 'react';

import item1 from '../../assets/item1.jpg'
import item2 from '../../assets/item2.jpg'
import item3 from '../../assets/item3.jpg'
import item4 from '../../assets/item4.jpg'
import item5 from '../../assets/image3.jpg'
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Product = () => {



















    function SampleNextArrow(props) {


        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", padding: "0.5rem", borderRadius: "3px", display: 'flex', justifyContent: "center", alignItems: 'center' }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", padding: "0.5rem", borderRadius: "3px", display: 'flex', justifyContent: "center", alignItems: 'center' }}
                onClick={onClick}
            />
        );
    }








    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    centerPadding: "60px",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]


    };

    return (
        <div className='maine-container'>
            <div className='services__heading'>
                <h1> SEE Gallery</h1>
            </div>




            <div className='item-contaner'>


                <Slider {...settings}>

                    {data.map((d) => (

                        <Link to="/product">



                            <div className='item'>

                                <div className='item-img'>
                                    <img src={d.img} alt="" />
                                </div>
                                {/* <div className='item-details'>
                                <h2>{d.name}</h2>
                                <button>add to card</button>
                            </div> */}



                            </div>

                        </Link>


                    ))}
                </Slider>




            </div>

        </div>
    )
}


const data = [
    {
        id: 1,
        name: `car wash clener`,
        img: item1,

    },

    {
        id: 2,
        name: `thejkf ddl`,
        img: item2,

    },


    {
        id: 3,
        name: `imtiyaz gel`,
        img: item3,

    },

    {
        id: 4,
        name: `saad shampu`,
        img: item4,

    }
]


export default Product




































// import Item from '../../components/item/Item.jsx'
// import item1 from '../../assets/image1.jpg'
// import item2 from '../../assets/image2.jpg'
// import item3 from '../../assets/image3.jpg'
// import item4 from '../../assets/image4.jpg'




// const Product = () => {
//     return (
//         <div className='products'>
//             <div className='services__heading'>
//                 <h1>PRODUCTS</h1>
//             </div>


//             <div className="product__container">

//                 <Item imgurl={item1} heading=" lassser wips Clener" />
//                 <Item imgurl={item1} heading=" lassser wips Clener" />
//                 <Item imgurl={item1} heading=" lassser wips Clener" />
//                 <Item imgurl={item1} heading=" lassser wips Clener" />


//             </div>
//         </div>

//     )
// }
// export default Product