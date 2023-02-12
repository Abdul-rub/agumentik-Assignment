import React from "react";
import style from "../styles/pricing.module.css";
import { ToggleSwitch } from "../Component/Togglebtn";
import {RiCheckboxCircleFill} from "react-icons/ri"

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
             <div className={style.pricing__div_card}>
              <h4>Standart</h4>
              <p>The national average cost buying coin easy</p>
              <p className={style.price__txt}>
                $12 <span className={style.price__month}>/month</span>
              </p>
              <button>Select Plan</button>
              <div className={style.offers__avail}>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
              </div>
             </div>
             <div className={style.pricing__div_card}>
              <h4>Standart</h4>
              <p>The national average cost buying coin easy</p>
              <p className={style.price__txt}>
                $12 <span className={style.price__month}>/month</span>
              </p>
              <button>Select Plan</button>
              <div className={style.offers__avail}>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
              </div>
             </div>
             <div className={style.pricing__div_card}>
              <h4>Standart</h4>
              <p>The national average cost buying coin easy</p>
              <p className={style.price__txt}>
                $12 <span className={style.price__month}>/month</span>
              </p>
              <button>Select Plan</button>
              <div className={style.offers__avail}>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
                <p><span><RiCheckboxCircleFill color="#5459E8" size={25}/></span>50 GB cloud storage</p>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
