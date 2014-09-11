var pkg = require('../package.json');

module.exports = {

    closureStart: '(function(){ \n',
    closureEnd: '\n })();',
    dist: 'dist',
    pluginFiles: [
        'src/module.js',
        'src/plugins/*.js'
    ],
    versionData: {
        version: pkg.version
    }

};
