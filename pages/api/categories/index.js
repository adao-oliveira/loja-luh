import connectDB from '../../../utils/connectDB'
import Categorias from '../../../models/categoriasModel'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await createCategory(req, res)
            break;
        case "GET":
            await getCategorias(req, res)
            break;
    }
}

const createCategory = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.role !== 'admin')
        return res.status(400).json({err: "A autenticação não é válida"})

        const { name } = req.body
        if(!name) return res.status(400).json({err: "O nome não pode ficar em branco"})

        const newCategory = new Categorias({name})

        await newCategory.save()
        res.json({
            msg: 'Sucesso! Criou uma nova categoria',
            newCategory
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const getCategorias = async (req, res) => {
    try {
        const categorias = await Categorias.find()

        res.json({categorias})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}