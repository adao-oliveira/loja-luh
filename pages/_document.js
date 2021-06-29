import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    {/* SEO Meta Tags */}
                    <meta name="description" content="" />
                    <meta name="author" content="Adão Oliveira" />

                    {/* OG Meta Tags to improve the way the post looks when you share the page on LinkedIn, Facebook, Google+ */}
                    <meta property="og:site_name" content="Luh Cakes" /> {/* website name */}
                    <meta property="og:site" content="#" /> {/* website link */}
                    <meta property="og:title" content="Luh Cakes" /> {/* title shown in the actual shared post */}
                    <meta property="og:description" content="" /> {/* description shown in the actual shared post */}
                    <meta name="description" content="Loja online de Bolos, diratamente confeitados através da Chef Lu Cakes" />
                    <meta property="og:image" content="../public/images/bgHome.webp" /> {/* image link, make sure it's jpg */}
                    <meta property="og:url" content="" /> {/* where do you want your post to link to */}
                    <meta property="og:type" content="article" />
                    <meta name="twitter:image" content="../public/images/bgHome.webp" />

                    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
                    <link rel="stylesheet" href="/css/style.css" />
                    <link rel="stylesheet" href="/css/tailwind.css" />
                    <link rel="stylesheet" href="/css/responsive.css" />
                    <link rel="stylesheet" href="/css/bootsnav.css" />
                    <link rel="stylesheet" href="/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/css/all.css" />
                    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
                    <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
                    <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet"></link>
                    <link href="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css" rel="stylesheet"></link>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
                    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
                    {/* <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}></script> */}
                    <script src="/js/custom.js"></script>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script type="text/javascript" src="https://cdn.rawgit.com/igorescobar/jQuery-Mask-Plugin/master/src/jquery.mask.js"></script>
                    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
                    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>

                    <div className="whatsapp-fixo">
                        <a href="https://wa.me/5511991781497?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20de%20seu%20produto.">
                            <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624330267/whatsapp_aiqzbi.png" width="60px" height="60px" alt="Que tal fazermos um orçamento?" />
                        </a>
                    </div>
                    <a
                        href="#"
                        id="back-to-top"
                        title="Back to top"
                        style={{ display: "none" }}
                    >
                        <img src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624651563/iconUP2_ty3e4g.png" />
                    </a>
                </body>
            </Html>
        )
    }
}

export default MyDocument