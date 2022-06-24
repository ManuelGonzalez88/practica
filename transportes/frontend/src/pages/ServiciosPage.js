import React from "react";

const ServiciosPage = (props) => {
    return (
        <main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
            <img src="img/servicios/aereo.jpg" alt=""/>
            <div className="info">
                <h4>Transporte Aereo</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laborum ea alias vitae ad natus
                    impedit fugiat ullam libero! Libero nostrum cum, delectus at reprehenderit odio quaerat enim unde
                    iste?</p>
            </div>
        </div>

        <div className="servicio">
            <img src="img/servicios/ferroviario.jpg" alt=""/>
            <div className="info">
                <h4>Transporte Ferroviario</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laborum ea alias vitae ad natus
                    impedit fugiat ullam libero! Libero nostrum cum, delectus at reprehenderit odio quaerat enim unde
                    iste?</p>
            </div>
        </div>

        <div className="servicio">
            <img src="img/servicios/maritimo.jpg" alt=""/>
            <div className="info">
                <h4>Transporte Marítimo</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laborum ea alias vitae ad natus
                    impedit fugiat ullam libero! Libero nostrum cum, delectus at reprehenderit odio quaerat enim unde
                    iste?</p>
            </div>
        </div>

        <div className="servicio">
            <img src="img/servicios/terrestre.jpg" alt=""/>
            <div className="info">
                <h4>Transporte Terrestre</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident laborum ea alias vitae ad natus
                    impedit fugiat ullam libero! Libero nostrum cum, delectus at reprehenderit odio quaerat enim unde
                    iste?</p>
            </div>
        </div>
    </main>
    );
}

export default ServiciosPage;