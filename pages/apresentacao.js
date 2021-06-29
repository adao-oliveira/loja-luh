import React from "react";

const Apresentacao = () => {

    return (
        <>
            <div className="about-box-main mt-48">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h2 className="noo-sh-title text-block texto" id="textSlider">
                                Bem Vindo(a)!
                            </h2>
                            <div className="text-lg leading-relaxed mt-5">
                                <p>
                                    Oi! Meu nome é Luciana. Sou a chef e proprietária da Lu Cakes Confeitaria 😀
                                </p>
                                <p>
                                    Quem me conhece sabe que a criatividade rola solta por aqui e que estou sempre atrás da inovação.💡
                                </p>
                                <p>
                                    Adoro fazer sonhos dos meus clientes se transformarem em realidade através dos meus doces e bolos e colocar ao máximo amor e conhecimento em cada pedido.
                                </p>
                            </div>
                            <h2 className="text-lg leading-relaxed" style={{fontFamily: 'Garamond'}}>
                                Aproveite também para nos seguir nas redes sociais:
                                <div className="social mt-4 my-2">
                                <a href="https://www.facebook.com/luciana.valerio.180" target="_blank" className="long-share-btn facebook">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/luuh_.miranda/" target="_blank" className="long-share-btn instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://wa.me/5511991781497?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20de%20seu%20produto." target="_blank" className="long-share-btn whatsapp">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                                Um abraço.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Apresentacao;
