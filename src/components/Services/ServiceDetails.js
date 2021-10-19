import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useServices from "../hooks/useServices";
import topImg from "../../images/medserv.jpg";

// import img1 from "../../images/service-detail/service-1.jpg";
// import img2 from "../../images/service-detail/service-2.jpg";
// import img3 from "../../images/service-detail/service-3.jpg";
// import img4 from "../../images/service-detail/service-4.jpg";
// import img5 from "../../images/service-detail/service-5.jpg";
// import img6 from "../../images/service-detail/service-6.jpg";

const ServiceDetails = () => {
    const { serviceId } = useParams();
    // const [services] = useServices();
    // console.log("sr--", services);

    return (
        <div className="container">
            <div>
                <img className="mb-3 img-fluid" src={topImg} alt="" />
                <p>
                    dmiration we are surrounded possession frequently them.
                    Empilait acable heureuse capitale havresac nul etroites.
                    Tours him route accable ecarter grand. Remarkably didn’t
                    WordPress increasing occasional to difficulty especially.
                    Known tiled he sorry joy balls. Bed sudden manner indeed now
                    feebly. Bout avez was main jet. There are suivit bourse
                    depuis. Them longues republique paraissents i people young
                    evidemment reprende tristement the people grouillen musique
                    pressentit. Yeuses are in nouent no pleurs ouver forges. She
                    is coup entre art connu votre essor.
                </p>
            </div>
            <div className="mt-5 mb-5">
                <div className="row">
                    <p className="me-4 col-lg-7 col-md-12 col-sm-12">
                        Contented attending smallness the oh ye unwilling.
                        Turned favour A man two but lovers. Position couleurs
                        souliers ni matieres on joyeuses. Bout cinq elle qu nees
                        soit faux sa. Faite six nos ras grave voila. Ils
                        epluchant seulement bon alternent defensive portieres.
                        Me principles apartments. Has visitor law attacks
                        pretend you calling own excited paint. Contented
                        attending smallness the oh ye unwilling. Turned favour A
                        man two but lovers. Position couleurs souliers ni
                        matieres on joyeuses. Bout cinq elle qu nees soit faux
                        sa. Faite six nos ras grave voila. Ils epluchant
                        seulement bon alternent defensive portieres.
                    </p>
                    <img
                        className="img-fluid col-lg-4 col-md-6 col-sm-12 mx-auto"
                        src={`../../images/service-detail/service-${serviceId}.jpg`}
                        alt=""
                    />
                </div>
            </div>
            <div>
                <p>
                    Me principles apartments. Has visitor law attacks pretend
                    you calling own excited paint. Contented attending smallness
                    the oh ye unwilling. Turned favour A man two but lovers.
                    Position couleurs souliers ni matieres on joyeuses. Bout
                    cinq elle qu nees soit faux sa. Faite six nos ras grave
                    voila. Ils epluchant seulement bon alternent defensive
                    portieres.Prisonnier primeveres arriverent survivants
                    comprendre. Bas legerement etonnement bonte nationales
                    cimetieres clairieres mon remarquait. Abondance attardent
                    que age dentelles tot soufflent. Trouvent relevent hebetude
                    ne exploits promptes pu remparts ca ma. Heros ornee robes tu
                    me. Les dut ces brique grande ete semble.
                </p>
            </div>
        </div>
    );
};

export default ServiceDetails;
