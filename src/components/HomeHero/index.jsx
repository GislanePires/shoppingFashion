import React from "react";
import home from "../../assets/images/home.png";
import ButtomNavigate from "../ButtomNavigate";
import "./style.scss";

const HomeHero = () => {
    return(
        <main className="hero-header">
            <section className="text-home-container">
                <section className="texto-botao">
                    <article>
                        <h1 className="titulo-destaque1">LET’S</h1>
                        <h1>EXPLORE</h1>
                        <h1 className="titulo-destaque2" >UNIQUE</h1>
                        <h1>CLOTHES.</h1>
                        <p className="nota-hero">Live for Influential and Innovative fashion!</p>
                    </article>
                   <ButtomNavigate route="shop" label="SHOP NOW" />
                </section>
                <figure>
                    <img src={home} className="imagem-hero" alt="Dancing girl" />
                </figure>
            </section>
        </main>

    );
};
export default HomeHero;
