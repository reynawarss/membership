import { Col } from "react-bootstrap"

export const newsData = "Latest News"
export const NewsImg = "/images/News-img/news.jpg"
export const topic="Top 10 Most Popular Premium WordPress Themes of 2017."


const NewsFirstSection = [
    {
        data: "CREATIVE SEO",
        pic: "/images/News-img/news1.jpg",
        para: "A Branding Tool for Everything and Everyone.",
        subpara: "february 1, 2017 by mihai",
    },
    {
        data: "APPS",
        pic: "/images/News-img/news2.jpg",
        para: "4 Ways Artificial Intelligence Changes the Game for SEO.",
        subpara: "february 1, 2017 by mihai",
    },
]
const NewsFunction = (item) => {
    return (
        <>
            <Col sm={3}>
                <p className="items-data-news">{item.data}</p>
                <div className="News-Arrary-img">
                    <img className="News-Arrary-img2" src={item.pic} />
                </div>
                <p>{item.para}</p>
                <p className="subpara">{item.subpara}</p>
            </Col>
        </>
    )
}
export const mainNews = NewsFirstSection.map(NewsFunction)





const NewsFirstSection2 = [
    {
        data: "CREATIVE SEO",
        pic: "/images/News-img/news3.jpg",
        para: "Case Study: 10 Lessons from a Successful Startup.",
        subpara: "february 1, 2017 by mihai",
    },
    {
        data: "GRAPHIC DESIGN",
        pic: "/images/News-img/news4.jpg",
        para: "What You’re Missing with SEO that will Make a World of Difference.",
        subpara: "february 1, 2017 by mihai",
    },
]
const NewsFunction2 = (item) => {
    return (
        <>
            <Col sm={6} className="NewsFunction-second">
                <p className="item-data2">{item.data}</p>
                <div className="News-second">
                    <img className="News-second2" src={item.pic} />
                </div>
                <p>{item.para}</p>
                <p className="subpara">{item.subpara}</p>
            </Col>
        </>
    )
}
export const mainNews2 = NewsFirstSection2.map(NewsFunction2)
