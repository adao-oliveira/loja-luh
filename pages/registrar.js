import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import valid from '../utils/valid'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'
import { useRouter } from 'next/router'


const Registrar = () => {
  const initialState = { name: '', email: '', password: '', cf_password: '' }
  const [userData, setUserData] = useState(initialState)
  const { name, email, password, cf_password } = userData

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
    const errMsg = valid(name, email, password, cf_password)
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } })

    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    const res = await postData('auth/registrar', userData)

    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
  }

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/")
  }, [auth])

  return (
    <div>
      <Head>
        <title>Registrar</title>
      </Head>

      <main class="container mt-48 mb-32" style={{ maxWidth: '600px' }}>
        <h1>Registre-se</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div class="input-field">
              <input type="text" id="name"
                name="name" value={name} onChange={handleChangeInput} placeholder="Nome" />
              <div class="underline"></div>
            </div>
          </div>

          <div className="form-group">
            <div class="input-field">
              <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp"
                name="email" value={email} onChange={handleChangeInput} placeholder="E-mail" />
              <div class="underline"></div>
            </div>
          </div>

          <div className="form-group">
            <div class="input-field">
              <input type="password" id="exampleInputPassword1"
                name="password" value={password} onChange={handleChangeInput} placeholder="Senha" />
              <div class="underline"></div>
            </div>
          </div>

          <div className="form-group">
            <div class="input-field">
              <input type="password" id="exampleInputPassword2"
                name="cf_password" value={cf_password} onChange={handleChangeInput} placeholder="Confirme a Senha" />
              <div class="underline"></div>
            </div>
          </div>

          <button type="submit" className="btn btn-danger w-100">Registrar</button>

          <p className="my-2">
            Já tem uma conta? <Link href="/login"><a style={{ color: 'crimson' }}>Fazer login</a></Link>
          </p>
          
        </form>
      </main>
    </div>
  )
}

export default Registrar