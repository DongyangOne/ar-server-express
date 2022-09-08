const express = require("express")
const app = express()
const bodyPaser = require("body-parser")
const cors = require("cors")
const { sequelize } = require("./models")
const port = 3000

app.use(cors())
app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({ extended: false }))
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공")
  })
  .catch((err) => {
    console.error(err)
  })

app.use("/api", require("./api"))

app.listen(port, () => console.log(`SERVER ON PORT :${port}`))
