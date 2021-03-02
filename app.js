const argv = require('yargs')
    .command('listar', 'imprime tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            demand: false,
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'crea un archivo de texto con una tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            demand: false,
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
const multiplicacion = require('./multiplicacion/multiplicacion');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        multiplicacion.imprimir(base, limite)
            .then()
            .catch(error => console.log(`Ocurrio un error: ${error}`));
        break;
    case 'crear':
        multiplicacion.archivo(base, limite)
            .then(nombre => console.log(`el archivo ${nombres} se creo`))
            .catch(error => console.log(`Ocurrio un error: ${error}`));
        break;
    default:
        console.log('comando incorrecto');

}