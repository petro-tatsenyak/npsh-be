import express from 'express';
import multer from 'multer';
const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true
});

const upload = multer({ dest: os.tmpdir() });
const router = express.Router();

router.post('/', upload.single('image'), async (req, res) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(req.file.path, options);
    console.log(result);
    return result.public_id;
  } catch (error) {
    console.error(error);
  }
});

export default router;
