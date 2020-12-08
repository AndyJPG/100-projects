import express from "express"
import path from "path"
import hbs from 'hbs'
import dotenv from 'dotenv'

const app: express.Application = express()
const PORT: number = parseInt(<string>process.env.PORT) || 4000

// Express config paths
const publicDirPath: string = path.join(__dirname, '../client')
const viewsDirPath: string = path.join(__dirname, '../templates/views')
const partialsDirPath: string = path.join(__dirname, '../templates/partials')

// Setup views engine
app.set('view engine', 'hbs')
app.set('views', viewsDirPath)
hbs.registerPartials(partialsDirPath)

app.use(express.static(publicDirPath))

app.listen(PORT, () => {
    console.log('Server running at port : ' + PORT)
})
