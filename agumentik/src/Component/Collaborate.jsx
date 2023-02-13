import React from "react";
import style from "../styles/collaborate.module.css";
import { BsArrowRight } from "react-icons/bs";

const Collaborate = () => {
  return (
    <div className={style.container}>
      {/* -------------------------------------------Upper-Half----------------------------------------- */}
      <div className={style.upper__half}>
        <div className={style.main__line1}>
          <p>
            We collaboate with
            <span className={style.span__clr}>
              250+ leading unversities and companies
            </span>
          </p>
        </div>
        <div className={style.cards_box}>
          <div className={style.cards_img_box}>
            <img
              style={{ width: "80%", height: "60px", margin: "auto" }}
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0000/4107/brand.gif?itok=ACv3cY_Y"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "80%", height: "60px", margin: "auto" }}
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0000/4107/brand.gif?itok=ACv3cY_Y"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "80%", height: "60px", margin: "auto" }}
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0000/4107/brand.gif?itok=ACv3cY_Y"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "80%", height: "60px", margin: "auto" }}
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0000/4107/brand.gif?itok=ACv3cY_Y"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "80%", height: "60px", margin: "auto" }}
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0000/4107/brand.gif?itok=ACv3cY_Y"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* -------------------------------------------Lower-Half----------------------------------------- */}
      <div className={style.lower__half}>
        <div className={style.main__line2}>
          <div className={style.h2__tag}>
            <h2>Why Must Cousrzees ?</h2>
          </div>
          <div className={style.p__tag}>
            <p>
              We have beed doing this for more than 10 years because we want to{" "}
              <br />
              always provide learning service that are not taught at school
            </p>
          </div>
        </div>
        {/* ---------------------------------------------------------Cards-------------------------------- */}
        <div className={style.div__box}>
          <div className={style.title}>
            <p>Flexible Time</p>
            <hr className={style.first} />

            <div className={style.desc}>
              Learning can be adjusted according to your time,because we also
              really appreciate you if you are doing other activities.
              <div className={style.learn__more}>
                Learn More
                <span>
                  <BsArrowRight color={"#5459E8"} size={20} />
                </span>
              </div>
            </div>
          </div>
          <div className={style.title}>
           
              <p>Flexible Time</p>
              <hr className={style.second} />
            <div className={style.desc}>
              Learning can be adjusted according to your time,because we also
              really appreciate you if you are doing other activities.
              <div className={style.learn__more}>
                Learn More{" "}
                <span>
                  <BsArrowRight color={"#5459E8"} size={20} />
                </span>
              </div>
            </div>
          </div>
          <div className={style.title}>
         
              <p>Flexible Time</p>
              <hr className={style.third} />
            <div className={style.desc}>
              Learning can be adjusted according to your time,because we also
              really appreciate you if you are doing other activities.
              <div className={style.learn__more}>
                Learn More{" "}
                <span>
                  <BsArrowRight color={"#5459E8"} size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
