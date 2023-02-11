import React from "react";
import style from "../styles/pricing.module.css";
import { ToggleSwitch } from "../Component/Togglebtn";

const Pricing = () => {
  return (
    <div className={style.container}>
      <div className={style.lower__half}>
        <div className={style.main__line2}>
          <div className={style.h2__tag}>
            <h2>Our pricing</h2>
          </div>
          <div className={style.p__tag}>
            <p>
              Pay securely online and manage the booking via desktop or via the
              mobile app.
            </p>
          </div>
          <div className={style.togglebtn}>
            <div className={style.toggle__container}>
              <span>
                <ToggleSwitch label="Monthly" />
              </span>
              <p>Annually</p>
            </div>
          </div>
          <div className={style.pricing__div}>
             <div>hii</div>
             <div>hiiii</div>
             <div>dfffff</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
