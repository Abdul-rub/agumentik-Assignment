import React from "react";
import style from "../styles/toggleswitch.module.css"
  
 export const ToggleSwitch = ({ label }) => {
  return (
    <div className={style.container}>
      {label}
      <div className={style.toggle__switch}>
        <input type="checkbox" className={style.checkbox} 
               name={label} id={label} />
        <label className={style.label} htmlFor={label}>
          <span className={style.inner} />
          <span className={style.switch} />
        </label>
      </div>
    </div>
  );
};
