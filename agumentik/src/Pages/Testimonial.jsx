import { AiFillStar } from "react-icons/ai";
import style from "../styles/testimonial.module.css";

const testimonials = [
  {
    name: "Jane Cooper",
    position: "Product Designer",
    rating: 5,
    comment: "Really Love This Course!!",
    imageSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  },
  {
    name: "Jane Cooper",
    position: "Product Designer",
    rating: 5,
    comment: "Really Love This Course!!",
    imageSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  },
   {
    name: "Jane Cooper",
    position: "Product Designer",
    rating: 5,
    comment: "Really Love This Course!!",
    imageSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  },
];

const Testimonial = () => {
  return (
    <div className={style.container}>
      <div className={style.first__div}>
        <p className={style.testi_color}>TESTRIMONIALS</p>
        <h1>Testimonial from Courzees Member</h1>
        <p className={style.description}>
          Customer experience during our place,and we share it with you as a
          reference to belive in us.
        </p>
      </div>
      <div className={style.tesimonial__cards}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={style.card__div}>
            <div className={style.upper__box}>
              <div className={style.img__div}>
                <img src={testimonial.imageSrc} alt="person" />
              </div>
              <div className={style.testi__name}>
                <p className={style.testiname__main}>{testimonial.name}</p>
                <p className={style.testiname__position}>
                  {testimonial.position}
                </p>
                <p>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>
                      <AiFillStar color="orange" />
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className={style.comments}>
              <p className={style.comment__main_cmt}>
                {testimonial.comment}
              </p>
              <p className={style.comment__desc}>
                "With the hotel's old-scholl opulence and there are outstanding
                location-right in the middle miles is Downtown's"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;