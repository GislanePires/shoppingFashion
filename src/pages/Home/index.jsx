import React from "react";
// import Header from "../../components/Header";
import HomeHero from "../../components/HomeHero";
import HomeFooter from "../../components/HomeFooter";
import "./style.css";
const Home = () => {
    return(
        <main class="pagina-home">
            {/* <Header/> */}
            <HomeHero />
            <HomeFooter />
        </main>
   
        
    );
};
export default Home;