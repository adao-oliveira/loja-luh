import Head from 'next/head'
import { useState, useContext } from 'react'
import { getData } from '../../utils/fetchData'
import { DataContext } from '../../store/GlobalState'
import { addToCart } from '../../store/Actions'

const DetailProduct = (props) => {
    const [product] = useState(props.product)
    const [tab, setTab] = useState(0)

    const { state, dispatch } = useContext(DataContext)
    const { carrinho } = state

    const isActive = (index) => {
        if (tab === index) return " active";
        return ""
    }

    return (
        <div className="detail_page w-full max-w-lg container mt-48 mb-32">
            <Head>
                <title>Detalhes do Produto</title>
            </Head>
            <div className="grid justify-items-center">
                <div className="flex flex-wrap">
                    <div class="w-full md:w-1/2 col-md-6 px-3 mb-3 md:mb-0">
                        <img src={product.images[tab].url} alt={product.images[tab].url} className="d-block img-thumbnail rounded w-100" style={{ height: '350px' }} />
                        <div className="row mx-0" style={{ cursor: 'pointer' }} >
                            {product.images.map((img, index) => (
                                <img key={index} src={img.url} alt={img.url}
                                    className={`img-thumbnail rounded ${isActive(index)}`}
                                    style={{ height: '80px', width: '20%' }}
                                    onClick={() => setTab(index)} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div class="w-full md:w-1/2 col-md-12 px-3 md:mb-0">
                            <h1 className="text-uppercase font-light text-3xl">{product.title}</h1>
                            <h5 className="text-danger">R${product.price}</h5>
                            <div className="my-2">{product.description}</div>
                            <div className="my-2">
                                {product.content}
                            </div>

                            <div className="grid justify-items-left">
                                <button type="button" className="btn btn-danger d-block my-2 px-4 w-50" onClick={() => dispatch(addToCart(product, carrinho))} >
                                    Comprar
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ params: { id } }) {

    const res = await getData(`product/${id}`)
    // server side rendering
    return {
        props: { product: res.product }, // will be passed to the page component as props
    }
}


export default DetailProduct