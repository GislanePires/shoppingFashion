import React from "react";
import HomeHero from "../../components/HomeHero";
import HomeFooter from "../../components/HomeFooter";
import "./style.scss";
const Home = () => {
    return(
        <main class="pagina-home">
            <HomeHero />
            <HomeFooter />
        </main>
   
        
    );
};
export default Home;