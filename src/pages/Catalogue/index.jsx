import React from "react";
import { GoArrowRight } from "react-icons/go";
import catalogue1 from "../../assets/images/catalogue1.png";
import catalogue2 from "../../assets/images/catalogue2.png";
import catalogue3 from "../../assets/images/catalogue3.png";

const Catalogue = () =>{
    return(
        <main>
            <section>
                <h2>NEW ARRIVALS</h2>
                <figure>
                    <img src={catalogue1} />
                    <figcaption>Hoodies & Sweetshirt</figcaption>
                    <figcaption class="explore-link"><a href="#">Explore Now!<GoArrowRight /></a></figcaption>                </figure>
                <figure>
                    <img src={catalogue2} />
                    <figcaption>Coats & Parkas</figcaption>
                    <figcaption class="explore-link"><a href="#">Explore Now!<GoArrowRight /></a></figcaption>
                </figure>
                <figure>
                    <img src={catalogue3} />
                    <figcaption>Tees & T-Shirt</figcaption>
                    <figcaption class="explore-link"><a href="#">Explore Now!<GoArrowRight /></a></figcaption>
                    

                </figure>
            </section>

        </main>
    );
};
export default Catalogue;