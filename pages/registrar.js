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
    <div className="pt-16">
      <Head>
        <title>Registrar</title>
      </Head>

      <form className="mx-auto my-4 mt-48" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input type="text" className="form-control" id="name"
            name="name" value={name} onChange={handleChangeInput} />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">E-mail</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name="email" value={email} onChange={handleChangeInput} />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Senha</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
            name="password" value={password} onChange={handleChangeInput} />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirmar Senha</label>
          <input type="password" className="form-control" id="exampleInputPassword2"
            name="cf_password" value={cf_password} onChange={handleChangeInput} />
        </div>

        <button type="submit" className="btn btn-dark w-100">Registrar</button>

        <p className="my-2">
          Já tem uma conta? <Link href="/login"><a style={{ color: 'crimson' }}>Fazer login</a></Link>
        </p>
      </form>
    </div>
  )
}

export default Registrar