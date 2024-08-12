import React from "react";
import home from "../../assets/images/home.png";
import Header from "../Header";
import "./style.css";

const HomeHero = () => {
    return(
        <main class="hero-header">
            <Header />
            <section className="text-home-container">
                <section class="texto-botao">
                    <article>
                        <h1>LET’S</h1>
                        <h1>EXPLORE</h1>
                        <h1 className="titulo-destaque" >UNIQUE</h1>
                        <h1>CLOTHES.</h1>
                        <p class="nota-hero">Live for Influential and Innovative fashion!</p>
                    </article>
                    <button>SHOP NOW</button>
                </section>
                <figure>
                    <img src={home} class="imagem-hero" alt="Dancing girl" />
                </figure>
            </section>
            {/* <HomeFooter /> */}
        </main>

    );
};
export default HomeHero;
