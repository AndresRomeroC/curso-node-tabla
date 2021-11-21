const fs = require('fs');
const colors = require('colors'); 

const crearArchivo = async( base = 5, listar = false, hasta = 10) => { 
    try{

        let salida = '';
        let consola = '';
        
        for( let i = 1; i <= hasta; i++){
            salida += `${ base } x ${ i }  =  ${base*i}\n` ;
            consola += `${ base } ${ 'x'.green} ${ i }  ${ '='.green}  ${base*i}\n` ;
        }
        
        if (listar) {
            console.log('===================='.yellow);
            console.log('  Tabla del : '.cyan, colors.bgYellow(base).blue.bold);
            console.log('===================='.yellow);
            console.log(consola);
        }
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        
        return `La tabla de multiplicar del  ${base} ha sido creada`;
    
        } catch (err){
        throw err;
    }
    
}

module.exports = {
  crearArchivo
}
    