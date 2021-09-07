import React from "react";
import Head from 'next/head'

const Depoimentos = () => {

    return (
        <>
            <Head>
                <title>Depoimentos</title>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pt-10 col-center m-auto">
                        <div className="depoimento">
                            <h2>Depoimentos</h2>
                        </div>
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            {/* <!-- Carousel --> */}
                            <div className="carousel-inner">
                                <div className="item carousel-item active">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1630952008/fotos%20depoimento/ujtvi4npeax84uruacuh.png" alt="" />
                                    </div>
                                    <p className="overview mt-4 text-base"><b></b>Bolo de aniversário</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624562212/fotos%20depoimento/dp4_vt9mu4.jpg" alt="" />
                                </div>
                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1630952008/fotos%20depoimento/ujtvi4npeax84uruacuh.png" alt="" />
                                    </div>
                                    <p className="overview mt-4 text-base"><b>Stella</b>, Bolo</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624562212/fotos%20depoimento/dp3_wpxs4q.jpg" alt="" />
                                </div>
                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1630952008/fotos%20depoimento/ujtvi4npeax84uruacuh.png" alt="" />
                                    </div>
                                    <p className="overview mt-4 text-base"><b>Tassi</b>, Empada</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624562212/fotos%20depoimento/dp5_ghaigk.jpg" alt="" />
                                </div>
                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1630952008/fotos%20depoimento/mjvw9damonzwpxu3rbxh.png" alt="" />
                                    </div>
                                    <p className="overview mt-4 text-base"><b>Saulo</b>, Salgados</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624562212/fotos%20depoimento/dp2_kxsa4m.jpg" alt="" />
                                </div>
                                <div className="item carousel-item">
                                    <div className="img-box">
                                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1630952008/fotos%20depoimento/ujtvi4npeax84uruacuh.png" alt="" />
                                    </div>
                                    <p className="overview mt-4 text-base"><b>Stephanie</b>, Maça do Amor</p>
                                    <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624562212/fotos%20depoimento/dp6_t3atpz.jpg" alt="" />
                                </div>
                            </div>
                            {/* <!-- Carousel Controls --> */}
                            <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <i className="fa fa-angle-left"></i>
                            </a>
                            <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Depoimentos;
