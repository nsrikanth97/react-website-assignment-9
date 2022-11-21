import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate, useNavigation } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import { CarouselObject } from "./images.data";
import { MenuItems } from "./items.data";
import Card from "./react_card_component";
function HomePage() {
    const {loginState} = useStateContext();
    let navigate = useNavigate();
    useEffect(()=>{
        if(!loginState)
            navigate("/login")
    })
  return (
    <>
      <Carousel fade>
        {CarouselObject.map((item) => {
          return (
            <Carousel.Item key={item.key}>
              <img
                className="d-block w-100"
                src={item.url}
                alt={item.altText}
              ></img>
              <Carousel.Caption>
                <h3>{item.caption}</h3>
                <p>{item.descrption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="container mt-3">
        <h3 className="text-center">Special Menu Items</h3>
        <div className="row justify-content-around">
            {MenuItems.map((item) => {
            return (
                <>
                    <Card  {...item}></Card>
                </>
            );
            })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
