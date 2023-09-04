import { Col } from "react-bootstrap"
import { motion } from 'framer-motion'

export const plan = "Pick your plan"


const horizontalCard = [
    {
        price: "RP.79.000",
        Maintitle: "Single License",
        subTitle: "1 theme included.1 year of theme updates & support 20% off future purchases.",
        btn: "VIEW",
    },
    {
        price: "Rp.399.000",
        Maintitle: "1 Year Membership",
        subTitle: "All themes included.1 year of theme updates & support.Access all new themes.",
        btn: "VIEW",
    },
    {
        price: "RP.759.000",
        Maintitle: "Forever Membership",
        subTitle: "1 theme included.Unlimited theme updates & Support.20% off future purchases.",
        btn: "VIEW",
    },
]
const horizonFun = (item) => {
    return (
        <>
            <Col sm={4} className="paddings">
                <p className="item-price">{item.price}</p>
                <p className="item-Pricing-data">{item.Maintitle}</p>
                <p className="item-Pricing-subTitle">{item.subTitle}</p>
                <center>
                    <button className="pricing-btn">{item.btn}</button>
                </center>
    

                    <motion.div animate={{ rotate:- 90 }} className='motion '>
                    <hr className="pricing-hr" />

                </motion.div>
            </Col>

        </>
    )
}
export const mainHorizon = horizontalCard.map(horizonFun)