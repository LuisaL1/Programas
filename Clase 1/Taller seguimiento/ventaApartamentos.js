const apUsado1 = 22770000;
const apUsado2 = 52470000;
const apNuevo1 = 16800000;
const apNuevo2 = 77184000;
const comUsado = 1.10;
const comNuevo = 1.20;

let repetir = true;
let nombreDeUsuario = prompt("Bienvenido a InmoMain, tu Inmobiliaria de confianza, por favor ingresa nombre de usuario");

while (repetir) {
    let menúPrincipal = prompt(`Bienvenido ${nombreDeUsuario}, ¿Cómo podemos ayudarte? 1. Solicitar catálogo 2. Cotizar apartamento`);
    if (menúPrincipal == "1") {
        let tipoInmueble = prompt("1. Usados 2. Nuevos");
        if (tipoInmueble == "1") {
            window.alert("Apartamento ubicado en PEI, 2 habitaciones 2 baños, sala-comedor. Apartamento ubicado en ARM 3 habitaciones, 2 baños, balcón, sala-comedor.");
            let masInfo = prompt("¿Desea más información? 1. Si 2. No");
            if (masInfo == "1") {
                window.alert("Apartamento PEI, 25 m² a una cuadra del CC la arboleda. Apartamento ARM, 47 m² parque fundadores");
            } else {
                window.alert("Gracias por usar nuestros servicios");
            }
            repetir = false;
        } else if (tipoInmueble == "2") {
            window.alert("Apartaestudio ubicado en Bogotá, 1 habitación, baño, cocina. Apartamento ubicado en Salento 4 habitaciones, tres baños, balcón, sala-comedor.");
            let masInfo = prompt("¿Desea más información? 1. Si 2. No");
            if (masInfo == "1") {
                window.alert("Apartaestudio Bogotá 47 m² cerca a la estación de buses. Apartamento Salento 76 m² cerca al parque");
            } else {
                window.alert("Gracias por usar nuestros servicios");
            }
            repetir = true;
        } else {
            window.alert("Dato no válido");
        }
    }
    if (menúPrincipal == "2") {
        let costoApartamento = prompt("1. Cotizar usado 2. Cotizar nuevo");
        if (costoApartamento == "1") {
            let comisionInmobiliaria1 = (apUsado1 * comUsado).toFixed(0);
            let comisionInmobiliaria2 = (apUsado2 * comUsado).toFixed(0);
            window.alert(`AP. PEI $${comisionInmobiliaria1} AP. ARM $${comisionInmobiliaria2}`);
            let realizarCompra = prompt("¿Realizar compra? 1. Si 2. No");
            if (realizarCompra == "1") {
                let elije = prompt("1. AP. PEI $25'047.000 2. AP ARM $57'717.000");
                if (elije == "1") {
                    let detalles = prompt("Compra exitosa. 1 Ver detalles.");
                    if (detalles == "1") {
                        let comisionInmomain = (apUsado1 * 0.1).toFixed(0);
                        window.alert(`Precio propietario $${apUsado1} Comisión a InmoMain $${comisionInmomain}`);
                    }
                } else {
                    let detalles = prompt("Compra exitosa. 1 Ver detalles.");
                    if (detalles == "1") {
                        let comisionInmomain2 = (apUsado2 * 0.1).toFixed(0);
                        window.alert(`Precio propietario $${apUsado2} Comisión a InmoMain $${comisionInmomain2}`);
                    }
                }
            }
            repetir = false;
        } else if (costoApartamento == "2") {
            let comisionInmobiliaria3 = (apNuevo1 * comNuevo).toFixed(0);
            let comisionInmobiliaria4 = (apNuevo2 * comNuevo).toFixed(0);
            window.alert(`APS. Bogotá $${comisionInmobiliaria3} AP. Salento $${comisionInmobiliaria4}`);
            let realizarCompra = prompt("¿Realizar compra? 1. Si 2. No");
            if (realizarCompra == "1") {
                let elije = prompt("1. APS. Bogotá $20'160.000 2. AP. Salento $92'620.800");
                if (elije =="1"){
                    let detalles = prompt("Compra exitosa. 1 Ver detalles");
                    let comisionInmoMain3 = (apNuevo1 * 0.2).toFixed(0);
                    window.alert(`Precio propietario $${apNuevo1} Comisión a InmoMain $${comisionInmoMain3}`);
                } else {
                    let detalles = prompt("Compra exitosa. 1 Ver detalles");  
                    let comisionInmoMain4 = (apNuevo2 * 0.2).toFixed(0);
                    window.alert(`Precio propietario $${apNuevo2} Comisión a InmoMain $${comisionInmoMain4}`); 
                    repetir = false;        
                }
            }
        }
    } else {
        window.alert("Dato no válido");
        repetir = true;
    }
}







