import React from "react";
import hm from "../../assets/images/hm.png";
import obey from "../../assets/images/obey.png";
import shopify from "../../assets/images/shopify.png";
import lacoste from "../../assets/images/lacoste.png";
import levis from "../../assets/images/levis.png";
import amazon from "../../assets/images/amazon.png";

const HomeFooter = () => {
    return(
        <main>
            <figure>
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