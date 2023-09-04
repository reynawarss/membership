import { Col } from "react-bootstrap"

export const Company="Working with world's best companies."



const CompanyImg=[
    {
        Pic:"/images/company-1.png",
    },
    {
        Pic:"/images/company-2.png",
    },
    
    {
        Pic:"/images/company-3.png",
    },
    
    {
        Pic:"/images/company-4.png",
    },
    {
        Pic:"/images/company-5.png",
    },
    
]
const CompanyFunction=(item)=>{
    return(
        <>
        
        <Col m={2}>
            <div className="company-name-img">
                <img src={item.Pic}/>
            </div>
        </Col>
        </>
    )
}

export const MainCompanyImg=CompanyImg.map(CompanyFunction)



export const CaroFirstText1="Duis congue pellentesque nisi, sit amet mattis justo bibendum in."
export const CaroFirstText2="Suspendisse at interdum metus. Vestibulum lacinia commodo magna, sed placerat justo luctus eu. Vestibulum a sem nisi. "

export const CaroSecondText1="Nunc varius sapien id ipsum vestibulum, sapien viverra."
export const CaroSecondText2=" Sed in mollis dui. Pellentesque egestas convallis nisi, non laoreet lacus pulvinar at. Aenean ultrices rutrum elit."

export const CaroThirdText1="Morbi vulputate tortor et congue posuere. Pellentesque quis lectus nisl"
export const CaroThirdText2="Morbi vulputate tortor et congue posuere. Pellentesque quis lectus nisl"