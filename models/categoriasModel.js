import mongoose from 'mongoose'

const CategoriasSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.categorias || mongoose.model('categorias', CategoriasSchema)
export default Dataset