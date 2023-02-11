import React from 'react'
import style from "../styles/explorecourse.module.css"
import {RxSpeakerLoud} from "react-icons/rx"
import {TbMathSymbols} from "react-icons/tb"
import {AiOutlineUsergroupAdd} from "react-icons/ai"
import {GiTakeMyMoney} from "react-icons/gi"
import {GrShieldSecurity} from "react-icons/gr"
import {MdOutlineBusinessCenter} from "react-icons/md"
import {ImPencil2} from "react-icons/im"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"

const ExploreCourse = () => {
  return (
    <div className={style.container}>
        <div className={style.lower__half}>
        <div className={style.main__line2}>
          <div className={style.h2__tag}>
            <h2>Explore Course by Category</h2>
          </div>
          <div className={style.p__tag}>
            <p>
              Get the most exciting course from all around the world and
              grow your career fast with others.
            </p>
          </div>
          <div className={style.grid__container}>
              <div className={style.icon_content}>
                 <RxSpeakerLoud color='pink' size={40}/>
                  <div className={style.icon__text}>
                    Foreign Language Learning
                    <p className={style.courses}>20+ Courses</p>
                  </div>  
              </div>
              <div className={style.icon_content}>
                 <TbMathSymbols color='#7EFAAE' size={40}/>
                  <div className={style.icon__text}>
                    Foreign Language Learning
                    <p className={style.courses}>20+ Courses</p>
                  </div>  
              </div>
              <div className={style.icon_content}>
                 <AiOutlineUsergroupAdd color='#8EB6FA' size={40}/>
                  <div className={style.icon__text}>
                    Foreign Language Learning
                    <p className={style.courses}>20+ Courses</p>
                  </div>  
              </div>
              <div className={style.icon_content}>
                 <GiTakeMyMoney color='orange' size={40}/>
                  <div className={style.icon__text}>
                    Foreign Language Learning
                    <p className={style.courses}>20+ Courses</p>
                  </div>  
              </div>
              <div className={style.icon_content}>
                 <GrShieldSecurity color='#D187FE' size={40}/>
                  <div className={style.icon__text}>
                    Foreign Language Learning
                    <p className={style.courses}>20+ Courses</p>
                  </div>  
              </div>
              <div className={style.icon_content}>
                 <MdOutlineBusinessCenter color='#FE9595' size={40}/>
                  <div className={style.icon__text}>
                    Foreign Language Learning
                    <p className={style.courses}>20+ Courses</p>
                  </div>  
              </div>
              <div className={style.icon_content}>
                 <ImPencil2 color='#FEDE7F' size={40}/>
                  <div className={style.icon__text}>
                    Foreign Language Learning
                    <p className={style.courses}>20+ Courses</p>
                  </div>  
              </div>
              <div className={style.icon_content}>
                 <AiOutlineFundProjectionScreen color='#5D38DE' size={40}/>
                  <div className={style.icon__text}>
                    Foreign Language Learning
                    <p className={style.courses}>20+ Courses</p>
                  </div>  
              </div>
          </div>
        </div>
        </div>

    </div>
  )
}

export default ExploreCourse