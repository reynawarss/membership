import { Col } from "react-bootstrap"
import { title } from "../About/VideoSection/utill"

export const serviceData = "We've got you covered."
export const servicepara = "Intuitive drag and drop Page Builder. Stunning themes. Over 100 Elements."
export const servicelastPara = "Creating your beautiful website has never been easier."



const service = [
    {
        pic: "/images/service-icon/service-1.png",
        title: "Stunning Page Builder",
        para: "Setup pages and content like a PRO. Coding is not required and a handy documentation is included.",
    },
    {
        pic: "/images/service-icon/service-2.png",
        title: "Featurewise Complete",
        para: "Without a doubt, Kallyas is one of the most complete WordPress themes on the market, being packed with all the goodies and sweet gems.",
    },
    {
        pic: "/images/service-icon/service-3.png",
        title: "Rescue support",
        para: "In time, gathering awesome feedback from our loyal customers, Kallyas became a mature, stable and future-proof project.",
    },
]
const servicefunction = (item) => {
    return (
        <>
            <Col sm={6} className="px-0">
                <div className="icon-img">
                    <img className="icon-img-fill" src={item.pic} />
                </div>
            </Col>
            <Col sm={6} className="px-0">
                <p className="service-title">{item.title}</p>
                <p className="service-item-para">{item.para}</p>
            </Col>
        </>
    )
}
export const mainService=service.map(servicefunction)




// second section

const service2 = [
    {
        pic: "/images/service-icon/service-4.png",
        title: "Iconic Awarded Design",
        para: "This design is featured across the marketplaces and awarded for it's looks. Walkthrough and enjoy the visuals.",
    },
    {
        pic: "/images/service-icon/service-5.png",
        title: "Mature Project",
        para: "In time, gathering awesome feedback from our loyal customers, Kallyas became a mature, stable and future-proof project.",
    },
    {
        pic: "/images/service-icon/service-6.png",
        title: "e-Commerce Ready",
        para: "In time, gathering awesome feedback from our loyal customers, Kallyas became a mature, stable and future-proof project.",
    },
]
const servicefunction2 = (item) => {
    return (
        <>
            <Col sm={6} className="px-0">
                <div className="icon-img">
                    <img className="icon-img-fill" src={item.pic} />
                </div>
            </Col>
            <Col sm={6} className="px-0">
                <p className="service-title">{item.title}</p>
                <p className="service-item-para">{item.para}</p>
            </Col>
        </>
    )
}
export const mainService2=service2.map(servicefunction2)