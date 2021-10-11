const process = require('process')

class ModuleTest {
    constructor() {
    }

    getModuleDetails() {
        return {
            'execPath' :process.execPath,
            '__dirname': __dirname,
            'cwd': process.cwd(),
            'argv[1]': process.argv
        }
    }
}

module.exports = ModuleTest