import React from "react";
import ButtomNavigate from "../../components/ButtomNavigate";
import image_fashion from "../../assets/images/image_fashion.png";
import "./style.scss";

const FashionPage = () => {
    return(
        <main className="principal-fashion">
            <section className="container-fashion">
                <img src={image_fashion} className="image-fashion"/>
                <article className="text-fashion">
                    <h1 className="emphasis-title-fashion">PAYDAY</h1>
                    <h1 className="title-fashion">SALE NOW</h1>
                    <p className="paragraph-fashion">Spend minimal $100 get 30% off </p>
                    <p className="paragraph-fashion">voucher code for your next purchase</p>
                    <h3 className="subtitle-fashion">1 June - 10 June 2021</h3>
                    <p className="paragraph-terms">*Terms & Conditions apply</p>
                    <ButtomNavigate route="fashion" label="SHOP NOW" className="buttom-fashion"/>
                </article>
            </section>
        </main>
    );
};
export default FashionPage;