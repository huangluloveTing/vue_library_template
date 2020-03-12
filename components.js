const path = require('path')
const glob = require('glob')

function searchPatterComponents() {
    const paths = glob.sync(path.join('src/packages/**/index.js'))
    const components = {}
    paths.forEach(keyPath => {
        const coms = keyPath.split('/')
        const pathName = coms.splice(-2, 1)
        components[pathName] = path.join(__dirname, keyPath)
    });
    return components
}

const components = searchPatterComponents()

console.log(components)

module.exports = {
    ...components
}