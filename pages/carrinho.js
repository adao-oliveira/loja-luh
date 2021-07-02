import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../store/GlobalState'
import CartItem from '../components/CartItem'
import Link from 'next/link'
import { getData, postData } from '../utils/fetchData'
import { useRouter } from 'next/router'


const Cart = () => {
  const { state, dispatch } = useContext(DataContext)
  const { carrinho, auth, orders } = state

  const [total, setTotal] = useState(0)

  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState('')

  const [callback, setCallback] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const getTotal = () => {
      const res = carrinho.reduce((prev, item) => {
        return prev + (item.price * item.quantity)
      }, 0)

      setTotal(res)
    }

    getTotal()
  }, [carrinho])

  useEffect(() => {
    const cartLocal = JSON.parse(localStorage.getItem('__next__cart01__devat'))
    if (cartLocal && cartLocal.length > 0) {
      let newArr = []
      const updateCart = async () => {
        for (const item of cartLocal) {
          const res = await getData(`product/${item._id}`)
          const { _id, title, images, price, inStock, sold } = res.product
          if (inStock > 0) {
            newArr.push({
              _id, title, images, price, inStock, sold,
              quantity: item.quantity > inStock ? 1 : item.quantity
            })
          }
        }

        dispatch({ type: 'ADD_CART', payload: newArr })
      }

      updateCart()
    }
  }, [callback])

  const handlePayment = async () => {
    if (!address || !mobile)
      return dispatch({ type: 'NOTIFY', payload: { error: 'Por favor, adicione seu endereço e celular' } })

    let newCart = [];
    for (const item of carrinho) {
      const res = await getData(`product/${item._id}`)
      if (res.product.inStock - item.quantity >= 0) {
        newCart.push(item)
      }
    }

    if (newCart.length < carrinho.length) {
      setCallback(!callback)
      return dispatch({
        type: 'NOTIFY', payload: {
          error: 'O produto está fora de estoque ou a quantidade é insuficiente'
        }
      })
    }

    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    postData('order', { address, mobile, carrinho, total }, auth.token)
      .then(res => {
        if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

        dispatch({ type: 'ADD_CART', payload: [] })

        const newOrder = {
          ...res.newOrder,
          user: auth.user
        }
        dispatch({ type: 'ADD_ORDERS', payload: [...orders, newOrder] })
        dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
        return router.push(`/order/${res.newOrder._id}`)
      })

  }

  if (carrinho.length === 0)
    return <img className="img-responsive w-100" src="https://res.cloudinary.com/db5gm6hgs/image/upload/v1624114292/cart.png" alt="not empty" />

  return (
    <div className="row mx-auto mt-32" style={{paddingTop:'50px'}}>
      <Head>
        <title>Carrinho</title>
      </Head>

      <div className="col-md-8 text-dark table-responsive my-3">

        <table className="table my-3">
          <tbody>
            {
              carrinho.map(item => (
                <CartItem key={item._id} item={item} dispatch={dispatch} carrinho={carrinho} />
              ))
            }
          </tbody>
        </table>
      </div>

      <div className="col-md-4 my-3 text-center text-uppercase text-dark">
        <h3>Total: <span className="text-danger mb-2">R${total}</span></h3>


        {/* <Link href={auth.user ? '#!' : '/login'}>
  <a className="btn btn-dark my-2" onClick={handlePayment}>Pagamento</a>
</Link> */}
        <form>
          <h2 className="mt-8">Formas de pagamento</h2>
          <Link href={auth.user ? '#!' : '/login'}>
            <a className="btn btn-danger my-2 form-control mb-2" onClick={handlePayment}>PIX</a>
          </Link>

          <Link href={auth.user ? '#!' : '/login'}>
            <a className="btn btn-danger my-2 form-control mb-2" onClick={handlePayment}>BOLETO</a>
          </Link>
        </form>

      </div>
    </div>
  )
}

export default Cart