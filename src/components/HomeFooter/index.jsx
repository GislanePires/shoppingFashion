import React from "react";
import hm from "../../assets/images/hm1.png";
import obey from "../../assets/images/obey1.png";
import shopify from "../../assets/images/shopify1.png";
import lacoste from "../../assets/images/lacoste1.png";
import levis from "../../assets/images/levis1.png";
import amazon from "../../assets/images/amazon1.png";
import "./style.scss";

const HomeFooter = () => {
    return(
        <main className="footer-content">
            <figure className="footer-images">
                <img src={hm} alt="HM" />
                <img src={obey} alt="Obey" />
                <img src={shopify} alt="Shopify" />
                <img src={lacoste} alt="Lacoste" />
                <img src={levis} alt="Levis" />
                <img src={amazon} alt="Amazon" />
            </figure>
        </main>
    );
};
export default HomeFooter;