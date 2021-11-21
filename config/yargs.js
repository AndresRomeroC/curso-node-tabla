
const argv = require('yargs')
    .option('p',{
        alias : 'perro',
        type:'number',
        demandOption: true,
        describe : 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias : 'listar',
        type:'boolean',
        demandOption: true,
        default: false,
        describe : 'Muestra la tabla de multiplicar'
    }) 
    .option('h',{
        alias : 'hasta',
        type:'number',
        demandOption: true,
        default: 10,
        describe : 'Hasta que número deseo multiplicar'
    }) 
    .check( (argv, options) =>{
        
        if (isNaN(argv.p)) {
            throw 'El perro debe ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;
          