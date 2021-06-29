import Head from 'next/head'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../store/GlobalState'
import { updateItem } from '../../store/Actions'

import { useRouter } from 'next/router'
import { patchData } from '../../utils/fetchData'

const EditUser = () => {
    const router = useRouter()
    const { id } = router.query

    const { state, dispatch } = useContext(DataContext)
    const { auth, usuarios } = state

    const [editUser, setEditUser] = useState([])
    const [checkAdmin, setCheckAdmin] = useState(false)
    const [num, setNum] = useState(0)

    useEffect(() => {
        usuarios.forEach(user => {
            if (user._id === id) {
                setEditUser(user)
                setCheckAdmin(user.role === 'admin' ? true : false)
            }
        })
    }, [usuarios])

    const handleCheck = () => {
        setCheckAdmin(!checkAdmin)
        setNum(num + 1)
    }

    const handleSubmit = () => {
        let role = checkAdmin ? 'admin' : 'user'
        if (num % 2 !== 0) {
            dispatch({ type: 'NOTIFY', payload: { loading: true } })
            patchData(`user/${editUser._id}`, { role }, auth.token)
                .then(res => {
                    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

                    dispatch(updateItem(usuarios, editUser._id, {
                        ...editUser, role
                    }, 'ADD_USERS'))

                    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
                })
        }

    }


    return (
        <div className="edit_user my-3 mt-48">
            <Head>
                <title>Editar usuário</title>
            </Head>

            <div className="col-md-4 mx-auto my-4">
                <h2 className="text-uppercase text-dark">Editar usuário</h2>

                <div className="form-group">
                    <label htmlFor="name" className="d-block">Nome</label>
                    <input type="text" id="name" defaultValue={editUser.name} disabled />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="d-block">E-mail</label>
                    <input type="text" id="email" defaultValue={editUser.email} disabled />
                </div>

                <div className="form-group">
                    <input type="checkbox" id="isAdmin" checked={checkAdmin}
                        style={{ width: '20px', height: '20px' }} onChange={handleCheck} />

                    <label htmlFor="Administrador" style={{ transform: 'translate(4px, -3px)' }}>
                        Administrador
                    </label>
                </div>

                <div>
                    <button className="btn btn-danger" onClick={() => router.back()}>
                        <i className="fas fa-long-arrow-alt-left" aria-hidden></i> Voltar
                    </button>
                </div>

                <button className="btn btn-danger" onClick={handleSubmit}>Atualizar</button>

            </div>

        </div>
    )
}

export default EditUser