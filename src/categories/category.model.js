import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String },
  description: { type: String, required: true },
});

const categoryModel = mongoose.model('Category', categorySchema);

export default categoryModel;
