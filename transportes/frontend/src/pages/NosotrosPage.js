import React from "react";

const NosotrosPage = (props) => {
    return (
        <main className="holder">
        <div className="historia">
            <h2>Historia</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi impedit sed laudantium voluptas incidunt
                ratione quae ea, error aliquid, dolore ipsa eius adipisci, cum non ad nihil? Aliquam, neque ipsam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia eius ea exercitationem
                explicabo sint voluptate dicta aspernatur odit maxime, iure in laudantium iste neque, labore vitae sit
                tempora distinctio!</p>
        </div>

        <div className="staff">
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/nosotros/nosotros1.jpg" alt="Juan Gomez"/>
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis placeat corporis fuga ab
                        cumque corrupti porro vitae nam praesentium dolores sed a voluptatibus, doloremque, consectetur
                        enim amet ratione saepe iusto!</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros2.jpg" alt="Diana Reyes"/>
                    <h5>Diana Reyes</h5>
                    <h6>Gerente Comercial</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis placeat corporis fuga ab
                        cumque corrupti porro vitae nam praesentium dolores sed a voluptatibus, doloremque, consectetur
                        enim amet ratione saepe iusto!</p>

                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros3.jpg" alt="Roberto Zapatos"/>
                    <h5>Roberto Zapatos</h5>
                    <h6>Gerente de Sistemas</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis placeat corporis fuga ab
                        cumque corrupti porro vitae nam praesentium dolores sed a voluptatibus, doloremque, consectetur
                        enim amet ratione saepe iusto!</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros4.jpg" alt="Sandra Mastropiero"/>
                    <h5>Sandra Mastropiero</h5>
                    <h6>Gerente de Marketing</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis placeat corporis fuga ab
                        cumque corrupti porro vitae nam praesentium dolores sed a voluptatibus, doloremque, consectetur
                        enim amet ratione saepe iusto!</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros5.jpg" alt="Luciano Figuero"/>
                    <h5>Luciano Figuero</h5>
                    <h6>Gerente Logística</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis placeat corporis fuga ab
                        cumque corrupti porro vitae nam praesentium dolores sed a voluptatibus, doloremque, consectetur
                        enim amet ratione saepe iusto!</p>
                </div>

            </div>
        </div>
    </main>
    );
}

export default NosotrosPage;