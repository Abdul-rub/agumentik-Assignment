import React from "react";
import style from "../styles/heropage.module.css";
import { RiCheckboxCircleFill } from "react-icons/ri";

const HeroPage = () => {
  return (
    <div className={style.container}>
      {/* ------------------------------------------------left-container------------------------------------ */}
      <div className={style.left__div}>
        {/* ------------------------------------------------title-section------------------------------------ */}
        <div className={style.title}>
          <h4>
            Improve Your <br /> Grades With Online Courses
          </h4>
        </div>
        {/* ------------------------------------------------desc-section------------------------------------ */}
        <div className={style.description}>
          Want to improve your school grades? You need to study harder with the{" "}
          <br /> help of a great teacher to improve your performance at school.
        </div>
        {/* ------------------------------------------------btn-section------------------------------------ */}
        <div className={style.btns__div}>
          <div>
            <button className={style.get__startbtn}>Get Started</button>
          </div>
          <div class={style.contain}>
            <div class={style.circle}></div>
            <div class={style.text__playbtn}>Play Video</div>
          </div>
        </div>
        {/* ------------------------------------------------Check-box-section------------------------------------ */}
        <div className={style.checkbox__div}>
          <div>
            <RiCheckboxCircleFill color="#5459E8" size={25} />
            <p>Certified Teacher</p>
          </div>
          
          <div>
            <RiCheckboxCircleFill color="#5459E8" size={25} />
            <p>High Quality Video</p>
          </div>
          
          <div>
            <RiCheckboxCircleFill color="#5459E8" size={25} />
            <p>Affordable Price</p>
          </div>
          
        </div>
      </div>
      {/* -------------------------------------------------Right-container------------------------------------ */}
      <div className={style.right__div}>
        <img
          src="https://img.freepik.com/premium-vector/study-with-teacher-flat-illustration_418302-160.jpg"
          alt="heroImg"
        />
      </div>
    </div>
  );
};

export default HeroPage;
