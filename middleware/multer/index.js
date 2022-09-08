const multer = require("multer")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img/")
  },
  filename: (req, file, cb) => {
    cb(null, "name")
  },
})
const upload = multer({ storage: storage })

module.exports = { upload }
