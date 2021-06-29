import React from "react";


const Home = () => {

  return (
    <>
      <div>
        <div className="mt-32">
          <video className="video-fluid z-depth-1 w-full -px-12" autoPlay loop muted>
            <source src="https://res.cloudinary.com/db5gm6hgs/video/upload/v1624565774/videos%20home/20210624_1713192_s9dshd.mp4" type="video/mp4" />
          </video>
        </div>

        {/* <!-- Grid row --> */}
        <div className="container">
          <div className="row">
            <div className="col-md-12 pt-10 col-center m-auto">
              {/* Bolos */}
              <div className="depoimento">
                <h2>Bolo</h2>
              </div>
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* <!-- Carousel --> */}
                <div className="carousel-inner" id="#bolos">
                  {/* carousel 1 */}
                  <div className="item carousel-item active">
                    <div class="card-deck">
                      <div class="card">
                        <img className="card-img-top" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624047762/img2_sdvf95.jpg" alt="" />
                        <div className="card-body">
                          <h5 className="overview mt-4 text-base"><b>Bolo temático:</b> Estrada</h5>
                          <p className="card-text text-lg" style={{color:'#ff6e86'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-danger">Veja mais</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* carousel 2 */}
                  <div className="item carousel-item">
                    <div class="card">
                      <img className="card-img-top" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624561920/fotos%20home/unicornio_frgfl7.jpg" alt="" />
                      <div className="card-body">
                        <h5 className="overview mt-4 text-base"><b>Bolo temático:</b> Unicórnio</h5>
                        <p className="card-text text-lg" style={{color:'#ff6e86'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-danger">Veja mais</a>
                      </div>
                    </div>
                  </div>
                  {/* carousel 3 */}
                  <div className="item carousel-item">
                    <div class="card">
                      <img className="card-img-top" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624561920/fotos%20home/mario_qbrzem.jpg" alt="" />
                      <div className="card-body">
                        <h5 className="overview mt-4 text-base"><b>Bolo temático:</b> Super Mário World</h5>
                        <p className="card-text text-lg" style={{color:'#ff6e86'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-danger">Veja mais</a>
                      </div>
                    </div>
                  </div>

                </div>
                {/* <!-- Carousel Controls --> */}
                <a className="carousel-control left carousel-control-prev" style={{ marginTop: '10px' }} href="#myCarousel" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                </a>
                <a className="carousel-control right carousel-control-next" style={{ marginTop: '10px' }} href="#myCarousel" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>

              <h1 style={{borderColor: '1px solid #e5202a',border:'1px solid #e5202a'}}></h1>

              {/* SALGADOS */}
              <div className="depoimento">
                <h2>Salgados</h2>
              </div>
              <div id="myCarousel2" className="carousel slide" data-ride="carousel">
                {/* <!-- Carousel --> */}
                <div className="carousel-inner">
                  {/* carousel 1 */}
                  <div className="item carousel-item active">
                    <div class="card-deck">
                      <div class="card">
                        <img className="card-img-top" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624562583/fotos%20home/empada_ncsihn.jpg" alt="" />
                        <div className="card-body">
                          <h5 className="overview mt-4 text-base"><b>Empada</b></h5>
                          <p className="card-text text-lg" style={{color:'#ff6e86'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-danger">Veja mais</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* carousel 2 */}
                  <div className="item carousel-item">
                    <div class="card">
                      <img className="card-img-top" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624562833/fotos%20home/enroladinho_zwvpog.jpg" alt="" />
                      <div className="card-body">
                        <h5 className="overview mt-4 text-base"><b>Enroladinho de Salsicha</b></h5>
                        <p className="card-text text-lg" style={{color:'#ff6e86'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-danger">Veja mais</a>
                      </div>
                    </div>
                  </div>
                  {/* carousel 3 */}
                  <div className="item carousel-item">
                    <div class="card">
                      <img className="card-img-top" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624562583/fotos%20home/coxinha2_hxroux.jpg" alt="" />
                      <div className="card-body">
                        <h5 className="overview mt-4 text-base"><b>Festa</b></h5>
                        <p className="card-text text-lg" style={{color:'#ff6e86'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-danger">Veja mais</a>
                      </div>
                    </div>
                  </div>

                </div>
                {/* <!-- Carousel Controls --> */}
                <a className="carousel-control left carousel-control-prev" style={{ marginTop: '10px' }} href="#myCarousel2" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                </a>
                <a className="carousel-control right carousel-control-next" style={{ marginTop: '10px' }} href="#myCarousel2" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>

              <h1 style={{borderColor: '1px solid #e5202a',border:'1px solid #e5202a'}}></h1>

              {/* DOCES */}
              <div className="depoimento">
                <h2>Doces</h2>
              </div>
              <div id="myCarousel3" className="carousel slide" data-ride="carousel">
                {/* <!-- Carousel --> */}
                <div className="carousel-inner">
                  {/* carousel 1 */}
                  <div className="item carousel-item active">
                    <div class="card-deck">
                      <div class="card">
                        <video className="video-fluid z-depth-1 w-full -px-12" autoPlay loop muted>
                          <source src="https://res.cloudinary.com/db5gm6hgs/video/upload/v1624561621/videos%20home/video-torta_p2hgqd.mp4" type="video/mp4" /> </video>
                        <div className="card-body">
                          <h5 className="overview mt-4 text-base"><b>Torta de Limão Suíço</b></h5>
                          <p className="card-text text-lg" style={{color:'#ff6e86'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-danger">Veja mais</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* carousel 2 */}
                  <div className="item carousel-item">
                    <div class="card-deck">
                      <div class="card">
                        <video className="video-fluid z-depth-1 w-full -px-12" autoPlay loop muted>
                          <source src="https://res.cloudinary.com/db5gm6hgs/video/upload/v1624561621/videos%20home/video-cupcake_tp5bm9.mp4" type="video/mp4" /> </video>
                        <div className="card-body">
                          <h5 className="overview mt-4 text-base"><b>Cupcake</b></h5>
                          <p className="card-text text-lg" style={{color:'#ff6e86'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-danger">Veja mais</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* carousel 3 */}
                  <div className="item carousel-item">
                    <div class="card">
                      <img className="card-img-top" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624562583/fotos%20home/brigadeiro_clqq8v.jpg" alt="" />
                      <div className="card-body">
                        <h5 className="overview mt-4 text-base"><b>Docinho de Festa</b></h5>
                        <p className="card-text text-lg" style={{color:'#ff6e86'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-danger">Veja mais</a>
                      </div>
                    </div>
                  </div>
                  {/* carousel 4 */}
                  <div className="item carousel-item">
                    <div class="card">
                      <img className="card-img-top" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624562583/fotos%20home/maca_bn3ftc.jpg" alt="" />
                      <div className="card-body">
                        <h5 className="overview mt-4 text-base"><b>Maça Caramelizada</b></h5>
                        <p className="card-text text-lg" style={{color:'#ff6e86'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-danger">Veja mais</a>
                      </div>
                    </div>
                  </div>

                </div>
                {/* <!-- Carousel Controls --> */}
                <a className="carousel-control left carousel-control-prev" style={{ marginTop: '10px' }} href="#myCarousel3" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                </a>
                <a className="carousel-control right carousel-control-next" style={{ marginTop: '10px' }} href="#myCarousel3" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;