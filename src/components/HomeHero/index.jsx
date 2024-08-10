import React from "react";
import home from "../../assets/images/home.png";
import HomeFooter from "../HomeFooter";

const HomeHero = () => {
    return(
        <main>
            <section className="text-home-container">
                <article>
                    <h1>LET’S</h1>
                    <h1>EXPLORE</h1>
                    <h1>UNIQUE</h1>
                    <h1>CLOTHES.</h1>
                    <p>Live for Influential and Innovative fashion!</p>
                </article>
                <button>SHOP NOW</button>
                <figure>
                    <img src={home} alt="Dancing girl" />
                </figure>
            </section>
            <HomeFooter />
        </main>

    );
};
export default HomeHero;
