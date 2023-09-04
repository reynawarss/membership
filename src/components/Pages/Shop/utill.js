import { Col } from "react-bootstrap"

export const shopText="Home / shop"
export const shopEndtext="StartUp"
export const buy="Buy a single theme or join our theme club."
export const choose="Choose an option which suits your needs, and more importantly, your budget."
export const show="Showing all 6 results"



const shopCompany=[
    {
        pic:"/images/shop-img/shop-img-1.png",
        title:"Ecommerce kit",
        para:"Check out this summer e-commerce elements. This is a very good inspiration indeed. Check out the portfolio Thomas Budiman.",
        price:"$59.00",
    },
    {
        pic:"/images/shop-img/shop-img-2.png",
        title:"Fair Mobail UI kit",
        para:"Fair Mobile UI Kit is the excellent assistant for fast creation of your project. In it excellent fonts and colors, which now in a trend are picked up.",
        price:"$59.00",
    },
    {
        pic:"/images/shop-img/shop-img-3.png",
        title:"Kallyas News",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies dapibus erat vel aliquet. Integer laoreet, sem nec tempor porttitor..",
        price:"$59.00",
    },
]

const shopFunction=(item)=>{
    return(
        <>
        <Col sm={4}>
            <div className="Shop-img" >
                <img src={item.pic} />
            </div>
            <p className="shop-item-title">{item.title}</p>
            <p>{item.para}</p>
            <p className="item-shop-price">{item.price}</p>
        </Col>
        </>
    )
}
export const MainShop=shopCompany.map(shopFunction)














const shopCompany2=[
    {
        pic:"/images/shop-img/shop-img-4.png",
        title:"Minimal Store",
        para:"Limited Product Range: A minimal store typically offers a carefully selected range of products instead of overwhelming customers with an extensive inventory.     .",
        price:"$59.00",
    },
    {
        pic:"/images/shop-img/shop-img-5.png",
        title:"Restaurant WP Theme",
        para:"A restaurant with a themed concept refers to a dining establishment that incorporates a specific theme or concept into its overall design, menu, and ambiance.  ",
        price:"$59.00",
    },
    {
        pic:"/images/shop-img/shop-img-6.png",
        title:"Startup ",
        para:"Innovative Idea: Startups are built around unique ideas or concepts that have the potential to address a problem or meet a need in the market. ..",
        price:"$59.00",
    },
]

const shopFunction2=(item)=>{
    return(
        <>
        <Col sm={4}>
            <div className="Shop-img" >
                <img src={item.pic} />
            </div>
            <p className="shop-item-title">{item.title}</p>
            <p>{item.para}</p>
            <p className="shop-item-title">{item.price}</p>
        </Col>
        </>
    )
}
export const MainShop2=shopCompany2.map(shopFunction2)