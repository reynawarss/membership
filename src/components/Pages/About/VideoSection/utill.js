import { Col } from "react-bootstrap"

export const Videoimg = "/images/about-images/about-img-8.jpg"
export const title = "Look like an expert right from the start."
export const para = "Get all our proffesional themes."


const icons = [
    {
        pic: "/images/about-images/about-icon-img-1.png",
        mainTitle: "Stunning Page Builder",
        subTitle: "Intrinsicly formulate scalable web services before fully researched methodologies.",
    },
    {
        pic: "/images/about-images/about-icon-img-2.png",
        mainTitle: "Iconic Awarded Design",
        subTitle: "Intrinsicly formulate scalable web services before fully researched methodologies.",
    },
    {
        pic: "/images/about-images/about-icon-img-3.png",
        mainTitle: "eCommerce Ready",
        subTitle: "Intrinsicly formulate scalable web services before fully researched methodologies.",
    },
]
const IconFunction = (item) => {
    return (
        <>
            <Col sm={6}>
                <div className="icon-img">
                    <img className="icon-img-fill" src={item.pic} />
                </div>
            </Col>

            <Col sm={6}>
                <p className="V-mainTitle">{item.mainTitle}</p>
                <p className="V-subTitle">{item.subTitle}</p>
            </Col>
        </>
    )
}
export const mainIcon=icons.map(IconFunction)