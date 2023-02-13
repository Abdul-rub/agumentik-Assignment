import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import style from "../styles/pricing.module.css";

export const PricingCard = ({ title, description, price }) => {
  return (
    <div className={style.pricing__div_card}>
      <h4>{title}</h4>
      <p>{description}</p>
      <p className={style.price__txt}>
        {price} <span className={style.price__month}>/month</span>
      </p>
      <button className={style.pricing__hover}>Select Plan</button>
      <div className={style.offers__avail}>
        <p>
          <span>
            <RiCheckboxCircleFill color="#5459E8" size={25} />
          </span>
          50 GB cloud storage
        </p>
        <p>
          <span>
            <RiCheckboxCircleFill color="#5459E8" size={25} />
          </span>
          50 GB cloud storage
        </p>
        <p>
          <span>
            <RiCheckboxCircleFill color="#5459E8" size={25} />
          </span>
          50 GB cloud storage
        </p>
        <p>
          <span>
            <RiCheckboxCircleFill color="#5459E8" size={25} />
          </span>
          50 GB cloud storage
        </p>
        <p>
          <span>
            <RiCheckboxCircleFill color="#5459E8" size={25} />
          </span>
          50 GB cloud storage
        </p>
        <p>
          <span>
            <RiCheckboxCircleFill color="#5459E8" size={25} />
          </span>
          50 GB cloud storage
        </p>
      </div>
    </div>
  );
};

