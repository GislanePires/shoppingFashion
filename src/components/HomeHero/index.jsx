import React from "react";
import home from "../../assets/images/home.png";
import Header from "../Header";
import ButtomNavigate from "../ButtomNavigate";
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
                   <ButtomNavigate route="shop" label="SHOP NOW" />
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
