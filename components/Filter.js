import React, { useState, useEffect } from 'react'
import filterSearch from '../utils/filterSearch'
import { getData } from '../utils/fetchData'
import { useRouter } from 'next/router'

const Filter = ({ state }) => {
    const [sort, setSort] = useState('')
    const [category, setCategory] = useState('')

    const { categories } = state

    const router = useRouter()


    const handleCategory = (e) => {
        setCategory(e.target.value)
        filterSearch({ router, category: e.target.value })
    }

    const handleSort = (e) => {
        setSort(e.target.value)
        filterSearch({ router, sort: e.target.value })
    }

    return (
        <div className="container flex flex-wrap mt-48">
            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 ml-auto">
                <select className="custom-select text-capitalize" value={category} onChange={handleCategory}>
                    <option value="all">Todos os Produtos</option>
                    {
                        categories.map(item => (
                            <option key={item._id} value={item._id}>{item.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="w-full md:w-1/2 px-3 md:mb-0 mr-auto -mb-2">
                <select className="custom-select text-capitalize" value={sort} onChange={handleSort}>
                    <option value="-createdAt">Mais recente</option>
                    <option value="oldest">Mais antigo</option>
                    <option value="-sold">Mais vendidos</option>
                    <option value="-price">Preço: Alto</option>
                    <option value="price">Preço: Baixo</option>
                </select>
            </div>
        </div>
    )
}

export default Filter
