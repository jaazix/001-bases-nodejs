const { rejects } = require('assert');
const fs = require('fs');//paquete de manipulacion de archivos

let archivo = (base, limite) => {
    return new Promise ((resolve, reject) => {
            let tabla = '';
            
            if(!Number(base)){
                reject('favor de insetar una base valida');
                return;
            }

            if(!Number(limite)){
                reject('favor de insetar un limite valido');
                return;
            }

            for(let i=1; i<= limite; i++){
                tabla = tabla + `${base} x ${i} = ${base*i} \n`;
            }
            
            fs.writeFile(`files/file-${base}.txt`,tabla,(err)=>{
                if(err) reject(err)
                else
                resolve(`file-${base}.txt`);
            });

           
        }
        
    );
};


let imprimir = (base, limite) => {
    return new Promise ((resolve, reject) => {           
            
            if(!Number(base)){
                reject('favor de insetar una base valida');
                return;
            }

            if(!Number(limite)){
                reject('favor de insetar un limite valido');
                return;
            }

            for(let i=1; i<= limite; i++){
                console.log(`${base} x ${i} = ${base*i}`);
            }
            return;           
        }        
    );
};

module.exports = {
                archivo,
                imprimir
            };