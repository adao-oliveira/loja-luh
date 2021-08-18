import React from "react";
import Head from 'next/head';
import emailjs from "emailjs-com";

function sendEmailContato(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_h85wzix', e.target, 'user_0eDmuHI0mHtyFtGplyTGo')
        .then((result) => {
            alert("E-mail enviado com sucesso");
        }, (error) => {
            alert("Ocorreu um erro inesperado, verifique os dados e tente novamente!");
        });
    e.target.reset()
}

const Contato = () => {

    return (
        <>
            <Head>
                <title>Apresentação</title>
            </Head>
            <div className="mt-48">
                <section className="form-section">
                    <h2> Entre em contato </h2>

                    <div className="form-wrapper">
                        <form onSubmit={sendEmailContato}>
                            <div className="input-block">
                                <input type='nome' name="from_name" id="from_name" placeholder="Nome completo" required />
                            </div>
                            <div className="input-block">
                                <input type="tell" name="telefone" id="telefone" maxLength="11" onkeypress="mascara(this)" placeholder="Número para contato" required />
                            </div>
                            <div className="input-block">
                                <textarea type='assunto' className="form-control" rows="6" name="mensagem" id="mensagem" placeholder="Mensagem..." required />
                            </div>
                            <button type='submit' className="btn-enviar mt-4">Enviar Avaliação</button>
                        </form>

                        <h1 className="text-center text-lg leading-relaxed">
                            Aproveite e siga-nos nas redes sociais:
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
                        </h1>
                    </div>
                </section>
            </div>

            <style jsx>{`

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 50px;
    }
    
    h2 {
      color: #f53625;
      padding-top: 40px;
      font-size: 30px;
      text-align: center;
    }
    
    .form-wrapper form {
      margin: 20px 0;
      background-color: #f53625;
      padding: 30px 25px;
      border-radius: 5px;
    }
    
    .form-wrapper form .input-block {
      margin-bottom: 20px;
    }
    
    .form-wrapper form .input-block label {
      font-size: 14px;
      color: #111;
    }
    
    .form-wrapper form .input-block input {
      width: 100%;
      margin-top: 8px;
      padding: 7px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 16px;
      color: #f53625;
      outline-color: #f53625;
      height: 50px;
      border: none;
      border-radius: 5px;
      background: #ffffff;
      box-shadow: inset 9px 9px 19px #d9d9d9, inset -9px -9px 19px #ffffff;
    }
  
    textarea {
      font-family: 'Courier New', Courier, monospace;
      min-width: 30vw;
      margin: 10px auto;
      padding: 20px;
      border-radius: 5px;
      outline-color: #f53625;
      background: #fff;
      box-shadow: inset 9px 9px 19px #d9d9d9, inset -9px -9px 19px #fff;
    }
    
  .btn-enviar {
      display: block;
      min-width: 150px;
      border: none;
      background-color: #FFC0CB;
      color: #111;
      border-radius: 25px;
      margin: auto;
      padding: 7px;
    }
  
  .btn-enviar:hover {
      background-color: #fff;
    }

`}</style>

        </>
    );
};

export default Contato;