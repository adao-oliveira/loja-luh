import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../store/GlobalState'
import { imageUpload } from '../../utils/imageUpload'
import { postData, getData, putData } from '../../utils/fetchData'
import { useRouter } from 'next/router'

const ProductsManager = () => {
    const initialState = {
        product_id: "",
        title: '',
        price: '',
        description: '',
        content: '',
        category: ''
    }
    const [product, setProduct] = useState(initialState)
    const { product_id, title, price, description, content, category } = product

    const [images, setImages] = useState([])

    const { state, dispatch } = useContext(DataContext)
    const { categories, auth } = state

    const router = useRouter()
    const { id } = router.query
    const [onEdit, setOnEdit] = useState(false)

    useEffect(() => {
        if (id) {
            setOnEdit(true)
            getData(`product/${id}`).then(res => {
                setProduct(res.product)
                setImages(res.product.images)
            })
        } else {
            setOnEdit(false)
            setProduct(initialState)
            setImages([])
        }
    }, [id])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
        dispatch({ type: 'NOTIFY', payload: {} })
    }

    const handleUploadInput = e => {
        dispatch({ type: 'NOTIFY', payload: {} })
        let newImages = []
        let num = 0
        let err = ''
        const files = [...e.target.files]

        if (files.length === 0)
            return dispatch({ type: 'NOTIFY', payload: { error: 'Arquivos não existem' } })

        files.forEach(file => {
            if (file.size > 1024 * 1024)
                return err = 'O maior tamanho de imagem é 1mb'

            if (file.type !== 'image/jpeg' && file.type !== 'image/png')
                return err = 'O formato da imagem está incorreto'

            num += 1;
            if (num <= 5) newImages.push(file)
            return newImages;
        })

        if (err) dispatch({ type: 'NOTIFY', payload: { error: err } })

        const imgCount = images.length
        if (imgCount + newImages.length > 5)
            return dispatch({ type: 'NOTIFY', payload: { error: 'Selecione até 5 imagens' } })
        setImages([...images, ...newImages])
    }

    const deleteImage = index => {
        const newArr = [...images]
        newArr.splice(index, 1)
        setImages(newArr)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (auth.user.role !== 'admin')
            return dispatch({ type: 'NOTIFY', payload: { error: 'A autenticação não é válida' } })

        if (!product_id || !title || !price || !description || !content || category === 'all' || images.length === 0)
            return dispatch({ type: 'NOTIFY', payload: { error: 'Por favor, adicione todos os campos' } })


        dispatch({ type: 'NOTIFY', payload: { loading: true } })
        let media = []
        const imgNewURL = images.filter(img => !img.url)
        const imgOldURL = images.filter(img => img.url)

        if (imgNewURL.length > 0) media = await imageUpload(imgNewURL)

        let res;
        if (onEdit) {
            res = await putData(`product/${id}`, { ...product, images: [...imgOldURL, ...media] }, auth.token)
            if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })
        } else {
            res = await postData('product', { ...product, images: [...imgOldURL, ...media] }, auth.token)
            if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })
        }

        return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })

    }

    return (
        <div className="products_manager mt-48">
            <Head>
                <title>Produtos</title>
            </Head>
            <form className="w-full max-w-lg container" onSubmit={handleSubmit}>
                <div class="flex flex-wrap -mx-3 -mb-8">
                    <div class="w-full md:w-1/2 px-3 md:mb-0 -mb-8">
                        <input type="text" name="product_id" value={product_id} placeholder="ID Produto" className="d-block my-4 w-100 p-2 input-group-text text-left bg-white" onChange={handleChangeInput} />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <input type="text" name="title" value={title} placeholder="Título" className="d-block my-4 w-100 p-2 input-group-text bg-white text-left" onChange={handleChangeInput} />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3">
                    <div class="w-full md:w-1/2 px-3 md:mb-0 -mb-8">
                        <textarea name="description" id="description" cols="20" rows="3" placeholder="Resumo" onChange={handleChangeInput} className="d-block my-4 w-100 p-2 input-group-text bg-white text-left" value={description} />
                    </div>
                    <div class="w-full md:w-1/2 px-3 md:mb-0 -mb-2">
                        <textarea name="content" id="content" cols="20" rows="3" placeholder="Descrição" onChange={handleChangeInput} className="d-block my-4 w-100 p-2 input-group-text bg-white text-left" value={content} />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3">
                    <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0 ml-auto">
                        <select name="category" id="category" value={category}
                            onChange={handleChangeInput} className="custom-select text-capitalize">
                            <option value="all">Todos os produtos</option>
                            {
                                categories.map(item => (
                                    <option key={item._id} value={item._id}>
                                        {item.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div class="w-full md:w-1/2 px-3 md:mb-0 mr-auto -mb-2">
                        <input type="number" name="price" value={price} placeholder="Preço" className="d-block w-100 p-2 custom-select" onChange={handleChangeInput} />
                    </div>
                </div>
                <div className="grid justify-items-center">
                    <div className="col-md-6 my-4">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Upload</span>
                            </div>
                            <div className="custom-file border rounded">
                                <input type="file" className="custom-file-input"
                                    onChange={handleUploadInput} multiple accept="image/*" />
                            </div>
                        </div>
                        <div className="row img-up mx-0">
                            {
                                images.map((img, index) => (
                                    <div key={index} className="file_img my-1">
                                        <img src={img.url ? img.url : URL.createObjectURL(img)}
                                            alt="" className="img-thumbnail rounded" />

                                        <span onClick={() => deleteImage(index)}>X</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="grid justify-items-center">
                    <button type="submit" className="btn btn-danger my-2 px-4 w-50">
                        {onEdit ? 'Atualizar' : 'Criar'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ProductsManager