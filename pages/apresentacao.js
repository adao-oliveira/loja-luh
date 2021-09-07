import React from "react";
import Head from 'next/head'

const Apresentacao = () => {

    return (
        <>
            <Head>
                <title>Apresentação</title>
            </Head>
            <div className="about-box-main mt-48">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h2 className="noo-sh-title text-block texto" id="textSlider">
                                Bem Vindo(a)!
                            </h2>
                            <img style={{width:'600px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1630951654/txx8patqnk9kxuakut3a.jpg" />

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Apresentacao;
