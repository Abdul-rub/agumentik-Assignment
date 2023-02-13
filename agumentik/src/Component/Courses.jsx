import React from 'react'
import style from "../styles/courses.module.css"

const Courses = () => {
  return (
    <div className={style.container}>
    <div className={style.heading}>
        <p className={style.title}>Our Top Courses</p>
    <p className={style.desc}>Over 4,000 courses in topics like business mathematic,graphic design,physical science and more.</p>
    </div>
    <div className={style.card__div}>
        <div>
            <img style={{width:"100%", height:"200px"}} src="https://www.ectstar.eu/wp-content/uploads/2020/07/computational-1600x600.png" alt="image" />
       <div className={style.content}>
        <p className={style.course__title}>Easy Way To Solve Algorithms</p>
        <p className={style.course__university}>Doosan University</p>
        <p className={style.course}>Course</p>
        </div>
        </div>
        <div>
            <img style={{width:"100%", height:"200px"}} src="https://www.surrey.ac.uk/sites/default/files/styles/banner_image_1500x470/public/2020-02/quantum-foundations-centre-top-banner-2.jpg?itok=rQV5Tiun" alt="image" />
       <div className={style.content}>
        <p className={style.course__title}>Learn About Physics and the Universe</p>
        <p className={style.course__university}>Michigan University</p>
        <p className={style.course}>Course</p>
        </div>
        </div>
        <div>
            <img style={{width:"100%", height:"200px"}} src="https://fscl.co.uk/wp-content/uploads/2022/10/ludaflors-bespoke-design-service.jpeg" alt="image" />
       <div className={style.content}>
        <p className={style.course__title}>How to Branding Your Product</p>
        <p className={style.course__university}>Pennysylvania University</p>
        <p className={style.course}>Course</p>
        </div>
        </div>
    </div>
    
    </div>
  )
}

export default Courses