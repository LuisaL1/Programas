const porción = 7000;
const pizzaCompleta = 42000;
const Salsarella = 500;
const unidad = 5000;
const unidadS = 15000

window.alert("¡Bienvenido a Italiana de Pizzas! Deleitate con nuestras más exquisitas recetas");

let menúPrincipal = prompt("¿Qué desea ordenar? \n1. Pizzas \n2. Sandwiches \n3. Ensaladas");

if (menúPrincipal == "1") {
    let porciones = prompt("¿Cuántas porciones desea? ($7000 cada porción) \n1. \n2. \n3. \n6. (Pizza completa)");

    if (porciones == "1") {
        let adicionales = prompt("¿Desea añadirle Salsarella (salsa de la casa) por $500? 1. Si 2. No");

        if (adicionales == "1") {
            window.alert(`Gracias por su compra, recibo por compra de 1 porción + adicional $${porción + Salsarella}, ¡Vuelva pronto!`);
        } else {
            window.alert(`Gracias por su compra, recibo por compra de 1 porción $${porción}, ¡Vuelva pronto!`);
        }
    } else if (porciones == "2") {
        let adicionales = prompt("¿Desea añadirle Salsarella (salsa de la casa) por $500? 1. Si 2. No");

        if (adicionales == "1") {
            let porción2 = porción * 2;
            window.alert(`Gracias por su compra, recibo por compra de 2 porciones + adicional $${porción2 + Salsarella}, ¡Vuelva pronto!`);
        } else {
            window.alert(`Gracias por su compra, recibo por compra de 2 porciones $${porción * 2}, ¡Vuelva pronto! `);
        }
    } else if (porciones == "3") {
        let adicionales = prompt("¿Desea añadirle Salsarella (salsa de la casa) por $500? 1. Si 2. No");

        if (adicionales == "1") {
            let porción3 = porción * 3;
            window.alert(`Gracias por su compra, recibo por compra de 3 porciones + adicional $${porción3 + Salsarella}, ¡Vuelva pronto!`);
        } else {
            window.alert(`Gracias por su compra, recibo por compra de 3 porciones $${porción * 3}, ¡Vuelva pronto! `);
        }
    } else {
        let adicionales = prompt("¿Desea añadirle Salsarella (salsa de la casa) por $500? 1. Si 2. No");

        if (adicionales == "1") {
            window.alert(`Gracias por su compra, recibo por compra de una pizza completa + adicional $${pizzaCompleta + Salsarella}, ¡Vuelva pronto!`);
        } else {
            window.alert(`Gracias por su compra, recibo por compra de una pizza completa $${pizzaCompleta}, ¡Vuelva pronto!`);
        }
    }
} else if (menúPrincipal == "2") {
    let unidades = prompt("¿Cuántas unidades desea? 1. 2. 3.");

    if (unidades == "1") {
        let adicionales = prompt("¿Desea añadirle Salsarella (salsa de la casa) por $500? 1. Si 2. No");

        if (adicionales == "1") {
            window.alert(`Gracias por su compra, recibo por compra de 1 Sandwich + adicional $${unidad + Salsarella}, ¡Vuelva pronto!`);
        } else {
            window.alert(`Gracias por su compra, recibo por compra de 1 Sandwich $${unidad}, ¡Vuelva pronto!`);
        }
    } else if (unidades == "2") {
        let adicionales = prompt("¿Desea añadirle Salsarella (salsa de la casa) por $500? 1. Si 2. No");

        if (adicionales == "1") {
            let unidades2 = unidad * 2;
            window.alert(`Gracias por su compra, recibo por compra de 2 Sandwiches + adicional $${unidades2 + Salsarella}, ¡Vuelva pronto! `);
        } else {
            window.alert(`Gracias por su compra, recibo por compra de 2 Sandwiches $${unidad * 2}, ¡Vuelva pronto!`);
        }
    } else {
        let adicionales = prompt("¿Desea añadirle Salsarella (salsa de la casa) por $500? 1. Si 2. No");

        if (adicionales == "1") {
            let unidades3 = unidad * 3;
            window.alert(`Gracias por su compra, recibo por compra de 3 Sandwiches + adicional $${unidades3 + Salsarella}, ¡Vuelva pronto!`);
        } else {
            window.alert(`Gracias por su compra, recibo por compra de 3 Sandwiches $${unidad * 3}, ¡Vuelva pronto! `);
        }
    }
} else {
    let unidades = prompt("¿Cuántas unidades desea? 1. 2. 3.");
    if (unidades == "1") {
        let adicionales = prompt("¿Desea añadirle Salsarella (salsa de la casa) por $500? 1. Si 2. No");
        if (adicionales == "1") {
            window.alert(`Gracias por su compra, recibo por compra de 1 Ensalada + adicional $${unidadS + Salsarella}, ¡Vuelva pronto!`);
        } else {
            window.alert(`Gracias por su compra, recibo por compra de 1 Ensalada $${unidadS}`);
        }
    } else if (unidades == "2") {
        let adicionales = prompt("¿Desea añadirle Salsarella (salsa de la casa) por $500? 1. Si 2. No");
        if (adicionales == "1") {
            let unidadesS2 = unidadS * 2
            window.alert(`Gracias por su compra, recibo por compra de 2 Ensaladas + adicional $${unidadesS2 + Salsarella}, ¡Vuelva pronto!`);
        } else {
            window.alert(`Gracias por su compra, recibo por compra de 2 Ensaladas $${unidadS * 2}, ¡Vuelva pronto!`);
        }
    } else {
        let adicionales = prompt("¿Desea añadirle Salsarella (salsa de la casa) por $500? 1. Si 2. No");
        if (adicionales == "1") {
            let unidadesS3 = unidadS * 3
            window.alert(`Gracias por su compra, recibo por compra de 3 Ensaladas + adicional $${unidadesS3 + Salsarella}, ¡Vuelve pronto!`);
        } else {
            window.alert(`Gracias por su compra, recibo por compra de 3 Ensaladas $${unidadS * 3}, ¡Vuelve pronto!`);
        }
    }
}

