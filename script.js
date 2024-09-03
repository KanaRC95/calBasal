function ocultar(clase){
    var elementos = document.getElementsByClassName(clase);
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = 'none';
    }
}

function mostrar(clase){
    var elementos = document.getElementsByClassName(clase);
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = 'block';
    }
}

function calcHid(){
    let peso = Number(document.getElementById('peso').value);
    console.log(peso);
    var diario;
    var mantenimiento;
    var mm2;

    if (peso==0){
        ocultar('resultado');
        document.getElementById('hs').style.display = 'none';
        document.getElementById('sc').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        
    }else if (peso<30){
        document.getElementById('hs').style.display = 'block';
        document.getElementById('sc').style.display = 'none';
        document.getElementById('error').style.display = 'none';
        mostrar("resultado");
        /*Método Holliday-Segar
        Se calcula de la siguiente manera:
        Cuando el niño tiene hasta 10kg: 100cc por cada kilo.
        Luego, por cada kilo arriba de 10 y hasta 20kg, se suman 50cc.
        Finalmente, por cada kilo arriba de 20kg se suman 20cc.*/
        
        if (peso<=10){
            diario = peso*100;
        }else if(peso <=20){
            let aux = peso-10;
            diario = 10*100+aux*50;
        }else{
            let aux = peso-20;
            diario = 10*100+10*50+aux*20;
        }
        mantenimiento = (diario/24).toFixed(2);
        mm2 = (mantenimiento*1.5).toFixed(2);

        document.getElementById('diario').innerHTML = "Volumen diario en cc: " + diario;
        document.getElementById('man').innerHTML = "Mantenimiento: " + mantenimiento + " cc/hr";
        document.getElementById('mm2').style.display = 'block';
        document.getElementById('mm2').innerHTML =  "m+m/2: " + mm2+ " cc/hr";
        document.getElementById('tipores').innerHTML = "Se utilizo el metodo Holliday-Segar";
    
    }else{
        document.getElementById('hs').style.display = 'none';
        document.getElementById('sc').style.display = 'block';
        mostrar("resultado");
        document.getElementById('error').style.display = 'none';
        document.getElementById('mm2').style.display = 'none';
        diario = ( (peso * 4) + 7) / (peso + 90);
        let sc1500 = diario*1500;
        let sc2000 = diario*2000;
        
        
        document.getElementById('diario').innerHTML = "SC*1500: " + (sc1500).toFixed(2) + 'cc';
        document.getElementById('man').innerHTML = "SC*2000: " + (sc2000).toFixed(2) + 'cc';
        document.getElementById('tipores').innerHTML = "Se utilizo el metodo de Superficie Corporal.";

    }
}

