import { Link } from "react-router-dom"
import './Header.css'
export const logo="/images/Header-logo.png"

const navitem=[
    {
        menu:"Home",
        path:"/"
    },

    {
        menu:"About",
        path:"/about"
    },
    {
        menu:"Pricing",
        path:"/pricing"
    },
    
    {
        menu:"Blog",
        path:"/blog"
    },


    {
        menu:"Service",
        path:"/service"
    },

    {
        menu:"Blog",
        path:"/blog"
    },
    {
        menu:"Shop",
        path:"/shop"
    },
   
   
]

const navitemFun =(item)=>{
    return(
        <Link className="nav-menu" to={item.path}> <span className="nav-menu Link nav-links nav-item">{item.menu}</span></Link>

    )
}

export const mainMenufun =navitem.map(navitemFun)