import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TestimonalCard from "./testimonal_components";
import { useStateContext } from "../context/StateContext";
import { Testimonals } from "./testimonals.data";
import "./aboutUs.css";
export function AboutUs() {
    const {loginState} = useStateContext();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!loginState)
            navigate("/login");
    })
  return (
    <div className="flex-fill ">
      <div className="jumbotron jumbotron-fluid container mt-4">
        <p className="lead">
          We welcome you to sit back, unwind and appreciate the lovely sights
          and hints of the ocean while our best gourmet expert sets you up a
          scrumptious dinner utilizing the best and freshest
          ingredients.’Company Name’s legacy comes from The parent Restaurant
          which was built up in 1963.
        </p>
        <hr className="my-4" />
        <p>
          Restaurant Name’ was worked for people in general and has advanced
          into a combination between exquisite chic and contemporary fine
          charge. Enjoy our dazzling dishes and make the most of your eating
          background with us!
        </p>
        <h1>Sustenance</h1>
        <p>
          In case you’re searching for top-notch food, ‘Organization Name’ is
          unquestionably one of the spots to go in Port Elizabeth. The adaptable
          menu flaunts some imaginative food, for example, salt and pepper squid
          on a delicate. A Thai-roused plate of mixed greens; harissa angle soup
          (with the harissa glue served in a little glass); lemon simmered
          chicken on dark pepper gnocchi; and most heavenly cinnamon, fennel,
          and ‘Friends Name’ frozen yogurt. The eatery utilizes neighborhood
          create for fish and venison dishes to flourish.
        </p>
        <h1>Wine</h1>
        <p>
          The honor-winning wine determination merits uncommon notice, both
          quaffer and specialist are all around provided food for. The
          determination has clearly been picked in light of the menu, and
          numerous a wine darling’s heart will be heartened to see the decisions
          accessible.
        </p>
        <h1>Service</h1>
        <p>
          The administration is right on the money and what you would anticipate
          from a foundation of this bore: amazingly proficient and educated,
          inquiries concerning fixings are handed-off to the cook and replied.
          The steady nearness of the director on the floor adds to the
          accomplishment of the eatery.
        </p>
        <h1>Climate</h1>
        <p>
          The glass divider confronting the sea, unbiased shades, finished
          dividers, and excellent fine art, just as lavish tablecloths and
          seats, all contribute toward an extravagant ordeal. The earthenware
          and cutlery are just delightful.
        </p>
      </div>
      <div className="container-fluid text-center">
        <h1 className="mt-5">Customer Reviews</h1>
        <p className="subtitle">
          Below are some of the reviews given to us by the customer in google
        </p>
        <div className="row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-auto review-container">
          {Testimonals.map((review) => {
            return (
              <>
                <TestimonalCard {...review}></TestimonalCard>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
