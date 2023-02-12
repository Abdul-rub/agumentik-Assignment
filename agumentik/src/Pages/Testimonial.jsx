import React from 'react'
import TestimonialCards from '../Component/TestimonialCards'
import style from "../styles/testimonial.module.css"
import {AiFillStar} from "react-icons/ai"



const Testimonial = () => {
  return (
    <div className={style.container}>
      <div className={style.first__div}>
       <p className={style.testi_color}>TESTRIMONIALS</p>
       <h1>
        Testimonial from Courzees Member
       </h1>
       <p className={style.description}>Customer experience during our place,and we share it with you as a reference to belive in us.</p>
      </div>
      <div className={style.tesimonial__cards}>
        <div className={style.card__div}>
            <div className={style.upper__box}>
             <div className={style.img__div}>
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="person" />
             </div>
             <div className={style.testi__name}>
                <p className={style.testiname__main}>Jane Coopesr</p>
                <p className={style.testiname__position}>Product Designer</p>
             <p><span><AiFillStar color='orange'/></span><span><AiFillStar color='orange'/></span><span><AiFillStar color='orange'/></span><span><AiFillStar color='orange'/></span><span><AiFillStar color='orange'/></span></p>
             </div>
            
             </div>
             <div className={style.comments}>
                  <p className={style.comment__main_cmt}>Really Love This Course!!</p>
                  <p className={style.comment__desc}>"With the hotel's old-scholl opulence and there are 
                    outstanding location-right in the middle miles is 
                    Downtown's"</p>
             </div>
        </div>
        <div className={style.card__div}>
            <div className={style.upper__box}>
             <div className={style.img__div}>
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="person" />
             </div>
             <div className={style.testi__name}>
                <p className={style.testiname__main}>Jane Coopesr</p>
                <p className={style.testiname__position}>Product Designer</p>
             <p><span><AiFillStar color='orange'/></span><span><AiFillStar color='orange'/></span><span><AiFillStar color='orange'/></span><span><AiFillStar color='orange'/></span><span><AiFillStar color='orange'/></span></p>
             </div>
            
             </div>
             <div className={style.comments}>
                  <p className={style.comment__main_cmt}>Really Love This Course!!</p>
                  <p className={style.comment__desc}>"With the hotel's old-scholl opulence and there are 
                    outstanding location-right in the middle miles is 
                    Downtown's"</p>
             </div>
        </div>
        <div className={style.card__div}>
            <div className={style.upper__box}>
             <div className={style.img__div}>
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="person" />
             </div>
             <div className={style.testi__name}>
                <p className={style.testiname__main}>Jane Coopesr</p>
                <p className={style.testiname__position}>Product Designer</p>
             <p><span><AiFillStar color='orange'/></span><span><AiFillStar color='orange'/></span><span><AiFillStar color='orange'/></span><span><AiFillStar color='orange'/></span><span><AiFillStar color='orange'/></span></p>
             </div>
            
             </div>
             <div className={style.comments}>
                  <p className={style.comment__main_cmt}>Really Love This Course!!</p>
                  <p className={style.comment__desc}>"With the hotel's old-scholl opulence and there are 
                    outstanding location-right in the middle miles is 
                    Downtown's"</p>
             </div>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Testimonial