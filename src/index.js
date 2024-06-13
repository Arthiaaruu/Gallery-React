import react from 'react'
import reactdom from 'react-dom/client'
import "./style.css"
import image1 from "./Assests/images/image1.jpeg"
import image2 from "./Assests/images/image2.jpeg"
import image3 from "./Assests/images/image3.jpeg"
import image4 from "./Assests/images/image4.jpeg"
import image5 from "./Assests/images/image5.jpeg"
import image6 from "./Assests/images/image6.jpeg"
import image7 from "./Assests/images/image7.jpeg"
import image8 from "./Assests/images/image8.jpeg"

const root = reactdom.createRoot(document.getElementById("root"))
function Heading() {
    return (
        <div className="header">
            <h3>Image Gallery</h3>
        </div>
    )
}


var images = [
    {
        image: image1,
        imgname: "Snow Mountain"
    }
    ,
    {
        image: image2,
        imgname: "Spring Flowers"
    },
    {
        image: image3,
        imgname: "WaterFall"
    },
    {
        image: image4,
        imgname: "River Kerala"
    },
    {
        image: image5,
        imgname: "Blue Moon"
    },
    {
        image: image6,
        imgname: "Forest Nature"
    },
    {
        image: image7,
        imgname: "Sunset Mountain"
    },
    {
        image: image8,
        imgname: "Sunset Beach"
    }
]
function Gallery(props) {

    return (
        <div>
            <img src={props.image}></img>
            <p>{props.imgname}</p>
        </div>
    )
}



root.render(
    <div className='imagegallery'>
        <Heading></Heading>
        <div className="images">
            {
                images.map(function (item) {
                    return (
                        <Gallery image={item.image} imgname={item.imgname}></Gallery>
                    )
                })
            }

        </div>

    </div>
)