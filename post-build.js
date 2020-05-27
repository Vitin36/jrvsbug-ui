const fs = require('fs')
const sourceDir = './config/'
const targetDir = './dist/config/'

const createDir = async () => {
    const exists = await fs.existsSync(targetDir)
    if (!exists) {
        await fs.mkdirSync(targetDir)
    }
    return
}

const postBuild = async () => {
    if (process.env.APP_ENV) {
        const file = `${process.env.APP_ENV}.js`
        const fileSource = `${sourceDir}${file}`
        const fileTarget = `${targetDir}${file}`
        const configFileExits = await fs.existsSync(fileSource)

        if (!configFileExits)
            throw Error("Config File doesn't exists")

        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir);
        }

        await fs.copyFileSync(fileSource, fileTarget)

    }

    else throw Error("APP_ENV not defined")
}

postBuild()