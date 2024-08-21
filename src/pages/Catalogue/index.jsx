import React from "react";
import { GoArrowRight } from "react-icons/go";
import catalogue1 from "../../assets/images/catalogue1.png";
import catalogue2 from "../../assets/images/catalogue2.png";
import catalogue3 from "../../assets/images/catalogue3.png";
import "./style.scss";

const Catalogue = () =>{
    return(
        <main className="content-catalogue">
                <h2>NEW ARRIVALS</h2>
            <section className="container-images-catalogue">
                <figure>
                    <img src={catalogue1} className="catalogue-images" />
                    <figcaption className="legend-image">Hoodies & Sweetshirt</figcaption>
                    <figcaption><a href="#" className="explore-link" >Explore Now!<GoArrowRight /></a></figcaption>                </figure>
                <figure>
                    <img src={catalogue2} className="catalogue-images" />
                    <figcaption className="legend-image">Coats & Parkas</figcaption>
                    <figcaption><a href="#" className="explore-link" >Explore Now!<GoArrowRight /></a></figcaption>
                </figure>
                <figure>
                    <img src={catalogue3} className="catalogue-images" />
                    <figcaption>Tees & T-Shirt</figcaption>
                    <figcaption><a href="#" className="explore-link" >Explore Now!<GoArrowRight /></a></figcaption>
                </figure>
            </section>

        </main>
    );
};
export default Catalogue;