// const { join, resolve } = require('path');
// module.exports = () => {
//     console.log( join(__dirname, '..', 'node_modules', 'vue'))
//     return {
//         resolve: {
//             alias: {
//                 '@vue': resolve(
//                     join(__dirname, '..', 'node_modules', 'vue')
//                 ),
//                 '@page':resolve(
//                     join(__dirname, '..', 'src', 'pages')
//                 ),
//             }
//         }
//     };
// }

module.exports = function (params) {
    return {
        resolve: {
            modules: [
                `${params.basePath}Resources/app/storefront/node_modules/`
            ]
        }
    };
};
