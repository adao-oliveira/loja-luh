import React, { useState, useEffect } from 'react'
import filterSearch from '../utils/filterSearch'
import { getData } from '../utils/fetchData'
import { useRouter } from 'next/router'

const Filter = ({ state }) => {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [category, setCategory] = useState('')

    const { categorias } = state

    const router = useRouter()


    const handleCategory = (e) => {
        setCategory(e.target.value)
        filterSearch({ router, category: e.target.value })
    }

    const handleSort = (e) => {
        setSort(e.target.value)
        filterSearch({ router, sort: e.target.value })
    }

    useEffect(() => {
        filterSearch({ router, search: search ? search.toLowerCase() : 'all' })
    }, [search])

    return (
        <div className="input-group mt-48">
            <div className="input-group-prepend col-md-2 px-0 mt-2">
                <select className="custom-select text-capitalize"
                    value={category} onChange={handleCategory}>

                    <option value="all">Todos os Produtos</option>

                    {
                        categorias.map(item => (
                            <option key={item._id} value={item._id}>{item.name}</option>
                        ))
                    }
                </select>
            </div>

            <div className="input-group-prepend col-md-2 px-0 mt-2">
                <select className="custom-select text-capitalize"
                    value={sort} onChange={handleSort}>

                    <option value="-createdAt">Mais recente</option>
                    <option value="oldest">Mais antigo</option>
                    <option value="-sold">Melhores vendas</option>
                    <option value="-price">Preço: Alto</option>
                    <option value="price">Preço: Baixo</option>

                </select>
            </div>

            <form autoComplete="off" className="mt-2 col-md-8 px-0">
                <input type="text" className="form-control" list="title_product"
                    value={search.toLowerCase()} onChange={e => setSearch(e.target.value)} placeholder="Pesquisar" />
            </form>


        </div>
    )
}

export default Filter
