
//const { argv } = require('process');
const { crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs')
    .option('p',{
        alias : 'perro',
        type:'number',
        demandOption: true
    })
    .option('l',{
        alias : 'listar',
        type:'boolean',
        demandOption: true,
        default: false
    }) 
    .check( (argv, options) =>{
        
        if (isNaN(argv.p)) {
            throw 'El perro debe ser un número'
        }
        //console.log('yargs',argv);
        return true;
    })
    .argv;




console.clear();

//let base = 2;
//console.log(process.argv);

// const[,,arg3 =  'base=5']= process.argv;
// const[, base = 5] = arg3.split('=');

//console.log(process.argv);

console.log(argv);
//console.log('base: yargs',argv.perro);

crearArchivo(argv.p, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));






