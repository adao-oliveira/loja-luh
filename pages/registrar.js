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

      <form className="container mx-auto my-4 mt-48" style={{ maxWidth: '600px' }} onSubmit={handleSubmit}>
        <h1 className="mb-4 font-light">Registre-se</h1>
        <div className="form-group input-field mt-2">
          <input type="text" id="name" name="name" value={name} onChange={handleChangeInput} placeholder="Nome" />
          <div class="underline"></div>
        </div>

        <div className="form-group input-field mt-6">
          <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={handleChangeInput} placeholder="E-mail" />
          <div class="underline"></div>
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>

        <div className="form-group input-field mt-6">
          <input type="password" id="exampleInputPassword1" name="password" value={password} onChange={handleChangeInput} placeholder="Senha" />
          <div class="underline"></div>
        </div>

        <div className="form-group input-field mt-6">
          <input type="password" id="exampleInputPassword2" name="cf_password" value={cf_password} onChange={handleChangeInput} placeholder="Confirme a senha" />
          <div class="underline"></div>
        </div>

        <input type="submit" value="Registrar" />

        <p className="my-2 pb-12 mt-4">
          J?? tem uma conta? <Link href="/login"><a style={{ color: 'crimson' }}>Fazer login</a></Link>
        </p>
      </form>
    </div>
  )
}

export default Registrar