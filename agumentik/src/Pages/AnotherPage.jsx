import React from 'react';
import Collaborate from '../Component/Collaborate';
import ExploreCourse from '../Component/ExploreCourse';
import HeroPage from '../Component/HeroPage';
import Navbar from '../Component/Navbar';
import { Pricing } from './Pricing';
import Testimonial from './Testimonial';
import style from "../styles/anotherPage.module.css";

const AnotherPage = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.back}>
          <ExploreCourse />
          <Pricing />
          <Testimonial />
        </div>
        <div className={style.front}>
          <Navbar />
          <HeroPage />
          <Collaborate />
        </div>
      </div>
    </>
  );
};

export default AnotherPage;