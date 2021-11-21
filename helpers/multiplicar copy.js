const fs = require('fs');

const crearArchivo = async( base = 5, listar = false) => { 


    try{

        let salida = '';
        
        for( let i = 1; i <= 10; i++){
            salida += `${ base } x ${ i } = ${base*i}\n` ;
        }
        
        if (listar) {
            console.log('====================');
            //console.log(`  Tabla del : ${base}`);
            console.log('  Tabla del : ', base);
            console.log('====================');
            console.log(salida);
        }
        
        fs.writeFileSync( `./helpers/tabla-${base}.txt`, salida);
        
        return `La tabla de multiplicar del  ${base} ha sido creada`;
    
        } catch (err){
        throw err;
    }
    
}

module.exports = {
  // redunddante crearArchivo: crearArchivo
  crearArchivo
}
    

    
    
    
    // for( let base = 1; base <= 10; base++){
//     for( let i = 1; i <= 10; i++){
//         salida += `${ base } x ${ i } = ${base*i}\n` ;
//     }

//     fs.writeFile( `./helpers/tabla-${base}.txt`, salida, (err) => {
//         if (err) throw err;
//         console.log(`La tabla de multiplicar del  ${base} ha sido creada`);
//     });
//     salida = '';
// }


