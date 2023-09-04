import { Col } from "react-bootstrap"

export const AboutTitle = "We craft ecosystems that grow businesses."
export const AboutPara = "We're a full-service digital agency that believes being a Favorite brand is more valuable than just being a Famous one. We craft beautifully useful, connected ecosystems that grow businesses and build enduring relationships between brands and humans."


const AboutCard = [
    {
        pic: "/images/about-images/about-img-1.jpg",
        title: "User experience",
        para: "Update your online business experience to 2017 standards. Encrease your earnings.",
    },
    {
        pic: "/images/about-images/about-img-2.jpg",
        title: "Social Media",
        para: "Update your online business experience to 2017 standards. Encrease your earnings.",
    },
    {
        pic: "/images/about-images/about-img-3.jpg",
        title: "Branding",
        para: "Update your online business experience to 2017 standards. Encrease your earnings.",
    },
]

const Cardsfunction = (item) => {
    return (
        <>
            <Col sm={4}>
                <div className="Card-img-box">
                    <img className="Card-img-fit" src={item.pic} />
                </div>
                <p className="item-title-text">{item.title}</p>
                <p className="item-para-text">{item.para}</p>
            </Col>

        </>
    )
}
export const mainCards = AboutCard.map(Cardsfunction)




export const CardText = "History"
export const CardText2 = "Who we are"
export const CardPara = "Add as many language packs as you want, to showcase your website across the entire globe."
export const What = "What we do"
export const award = "Awards"
export const CardCenterImg = "/images/about-images/about-img-4.jpg"
export const FColumn = "/images/about-images/about-img-5.jpg"
export const AwardImg = "/images/about-images/about-img-6.png"
export const BlackImg = "/images/about-images/about-img-7.jpeg"

