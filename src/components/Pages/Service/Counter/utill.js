import { Col } from "react-bootstrap"

export const facts="Facts"
export const Counterimg="/images/bg.jpeg"
export const lastFacts="We craft beautifully useful marketing and digital products that grow businesses."



const counter=[
    {
        Nob:"130+",
        name:"Customers",
    },
    {
        Nob:"200+",
        name:"Apps developed",
    },
    {
        Nob:"10+",
        name:"Offices",
    },
    {
        Nob:"2K+",
        name:"Coffees",
    },
]

const CounterFunction=(item) =>{
    return(
        <>
        
        <Col sm={3} >
            <p className="Counter-Nob">{item.Nob}</p>
            <p className="Counter-Name">{item.name}</p>
        </Col>
        
        </>
    )
}

export const MainCounter=counter.map(CounterFunction)