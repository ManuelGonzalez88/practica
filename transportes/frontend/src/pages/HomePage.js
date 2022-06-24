import React from "react";

const HomePage = (props) => {
    return (
        <main className="holder">
        <div>
            <img src="img/home/img01.jpg" alt=""/>
        </div>
        <div className="columnas">
            <section className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quae aliquid, dolor tempore aut
                    officia. Magni, sed. Voluptates expedita ipsa quidem vel voluptatum, vero a ab veniam atque, dolorum
                    accusantium.</p>
            </section>

            <section className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente excelente</span>
                    <span className="autor">Juan Gomez - zapatos.com</span>
                </div>
            </section>
        </div>
    </main>
    );
}

export default HomePage;