import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'

const Login = () => {
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch({ type: 'NOTIFY', payload: { loading: true } })
    const res = await postData('auth/login', userData)

    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })
    dispatch({ type: 'NOTIFY', payload: { success: res.msg } })

    dispatch({
      type: 'AUTH', payload: {
        token: res.access_token,
        user: res.user
      }
    })

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    })

    localStorage.setItem('firstLogin', true)
  }

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/")
  }, [auth])

  return (
    <div>
      <Head>
        <title>Pagina de Login</title>
      </Head>

      <main class="container mt-48 mb-32" style={{ maxWidth: '600px' }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div class="input-field">
            <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp"
              name="email" value={email} onChange={handleChangeInput}  placeholder="E-mail" />

              <div class="underline"></div>

          </div>
          <div class="input-field">
            <input type="password" id="exampleInputPassword1"
              name="password" value={password} onChange={handleChangeInput} placeholder="Senha" />

              <div class="underline"></div>
              
          </div>

          <input type="submit" value="Login" />
          <p className="my-2">
            Ainda não tem conta? <Link href="/registrar"><a style={{ color: 'crimson' }}>Registrar agora</a></Link>
          </p>
        </form>
      </main>
    </div>
  )
}

export default Login