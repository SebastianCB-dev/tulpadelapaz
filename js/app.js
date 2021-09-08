'use strict';

const botonPaloma = document.querySelector('#Boton-Juega');
const Primera_Rul = document.querySelector('#first');
const Segunda_Rul = document.querySelector('#second');
const Tercera_Rul = document.querySelector('#third');
const tulpa = document.querySelector('.tulpa');
const resultados = document.querySelector('.resultados');

const generarRandom = (min) => {
    let numero = (Math.random() * (360 - min) + min).toFixed(0);
    numero *= 10;
    return numero;
}

let numeroPrimeraRuleta = generarRandom(327);

let numeroSegundaRul = generarRandom(327);

let numeroTerceraRul = generarRandom(325);

const animacion = (numeroRul, duration, ruleta) => {
    ruleta.style.WebkitTransitionDuration = duration;
    ruleta.style.webkitTransform = `rotate(${numeroRul}deg)`;
};

botonPaloma.addEventListener('click', () => {

    botonPaloma.setAttribute("disabled", "true");

    // Primera Ruleta corriendo
    animacion(numeroPrimeraRuleta, '10s', Primera_Rul);
    // segunda Ruleta
    animacion(numeroSegundaRul, '12s', Segunda_Rul);
    // tercera Ruleta corriendo
    animacion(numeroTerceraRul, '14s', Tercera_Rul);

    setTimeout(() => {
        mostrarResultados(numeroPrimeraRuleta, numeroSegundaRul, numeroTerceraRul);
    }, 16000);
});

const mostrarResultados = (numeroPrimeraRuleta, numeroSegundaRul, numeroTerceraRul) => {

    // Ocultar ruleta
    tulpa.style.display = 'none';
    resultados.style.display = 'block';
    const h3_Combinacion = document.createElement('h3')
    const div_Images_Combinacion = document.createElement('div');
    div_Images_Combinacion.classList.add('images-combinacion');
    const image_Primera = document.createElement('img');
    const image_Segunda = document.createElement('img');
    const parrafo_Combinacion = document.createElement('p');
    parrafo_Combinacion.classList.add('combinacion');
    const hr = document.createElement('hr');
    const h3_terceraRul = document.createElement('h3');
    h3_terceraRul.classList.add('terceraRuleta');
    h3_terceraRul.innerHTML = recuperarTerceraRuleta(numeroTerceraRul);
    const div_image_tercera = document.createElement('div');
    div_image_tercera.classList.add('image-terceraRuleta');
    const image_tercera = document.createElement('img');

    let urlImage = buscarImagenTercerCirculo(recuperarTerceraRuleta(numeroTerceraRul));
    image_tercera.src = urlImage;
    div_image_tercera.append(image_tercera);

    // Función Agregar
    const funcionAgregarDatos = (texto, path, path2, texto2) => {
        h3_Combinacion.innerHTML = texto;
        image_Primera.src = path;
        image_Segunda.src = path2;
        div_Images_Combinacion.append(image_Primera, image_Segunda);
        parrafo_Combinacion.innerHTML = texto2;
    }


    //Retos
    // Reto y pais
    if ((numeroPrimeraRuleta > 3512 && numeroPrimeraRuleta <= 3600) && (numeroSegundaRul >= 3270 && numeroSegundaRul <= 3392)) {
        funcionAgregarDatos('Reto-Pais', '../assets/icons/Reto.png', '../assets/icons/pais.png', 'Buscar en Google una noticia sobre el tema de la tercera circunferencia, en relación con el país. Todos buscarán la noticia y los primeros tres que la encuentren y levanten la mano, la compartirán. <strong>Al finalizar cada reto, se indagará por lo que significó el reto y la temática.</strong>')
    }
    // Reto y humanidad
    else if ((numeroPrimeraRuleta > 3512 && numeroPrimeraRuleta <= 3600) && (numeroSegundaRul > 3512 && numeroSegundaRul <= 3600)) {
        funcionAgregarDatos('Reto - Humanidad', '../assets/icons/Reto.png', '../assets/icons/humanidad.png', 'El grupo debe proponer un personaje (s), un lugar (es) y una situación, y a partir de estos, el participante construirá una historia en relación con el tema de la tercera circunferencia. Se sugiere también que pueden participar tres jóvenes, construyendo la historia en tres partes. Uno el inicio, el segundo el nudo, y el tercero el desenlace (el ejercicio se puede hacer las veces que sea necesario para que todos y todas participen).<strong>Al finalizar cada reto, se indagará por lo que significó el reto y la temática.</strong>');
    }
    //Reto y vida
    else if ((numeroPrimeraRuleta > 3512 && numeroPrimeraRuleta <= 3600) && (numeroSegundaRul > 3392 && numeroSegundaRul <= 3512)) {
        funcionAgregarDatos('Reto - Vida', '../assets/icons/Reto.png', '../assets/icons/vida.png', 'Todos representarán con un gesto de su cuerpo, lo que significa en su vida el tema de la tercera circunferencia. Darse un tiempo para contemplar a los otros. Preguntar a los y las participantes por su significado.<strong>Al finalizar cada reto, se indagará por lo que significó el reto y la temática.</strong>');
    }
    // Verdad
    else if (numeroPrimeraRuleta >= 3270 && numeroPrimeraRuleta <= 3392) {
        let nombre = recuperarSegundaRuleta(numeroSegundaRul);
        let urlImagen = recuperarImagenSegundaRuleta(nombre);
        h3_Combinacion.innerHTML = `Verdad - ${nombre}`;
        image_Primera.src = '../assets/icons/verdad.png';
        image_Segunda.src = urlImagen;
        div_Images_Combinacion.append(image_Primera, image_Segunda);
        parrafo_Combinacion.innerHTML = `Teniendo en cuenta la herencia (ya sea humanidad, país o mi propia vida) y el tema de la tercera circunferencia que indica la aguja, se compartirá una historia que sea importante para cada persona y que tenga en cuenta la herencia y el tema indicado.
        <br><i>¿Qué pasó?</i> Descripción de los hechos evitando juicios de valor. 
        <br><i>¿Cuál fue el contexto?</i> Lo que rodeó los hechos a nivel territorial, cultural, económico, ecológico y a los involucrados, sin valoraciones positivas o negativas. Es importante reconocer esas experiencias que hacen de tu historia una verdad significativa para ti y tu comunidad y que te permiten reconocer elementos históricos que posibilitan o impiden la construcción y/o promoción de culturas de paz.  
        <br><i>¿Qué aprendí con lo que pasó?</i> Elementos que ayuden a caminar hacia la sanación, identificar qué elementos de las herencias queremos adoptar y promover en la cotidianidad 
        <br><i>Desde mi quehacer cotidiano y habilidades, ¿Qué puedo hacer para fortalecer las relaciones y heredar a otros?</i> Proponer acciones transformadoras que tú puedes hacer para heredarle a otros la paz. 
        `;
    }
    //HERECIA - PAIS
    else if ((numeroPrimeraRuleta > 3392 && numeroPrimeraRuleta <= 3512) && (numeroSegundaRul >= 3270 && numeroSegundaRul <= 3392)) {
        funcionAgregarDatos('Herencia - Pais', '../assets/icons/herencia.png', '../assets/icons/pais.png', 'Hacer un dibujo donde se plasme qué he heredado en mi país en relación con el tema de la tercera circunferencia.<strong> Al finalizar, compartir el dibujo y su significado.</strong>');
    }
    // HERENCIA - HUMANIDAD
    else if ((numeroPrimeraRuleta > 3392 && numeroPrimeraRuleta <= 3512) && (numeroSegundaRul > 3512 && numeroSegundaRul <= 3600)) {
        funcionAgregarDatos('Herencia - Humanidad', '../assets/icons/herencia.png', '../assets/icons/humanidad.png', 'Buscar en el lugar donde estoy un objeto (o buscar una imagen del objeto en Internet) que simbolice lo que he heredado de la humanidad en relación con la temática de la tercera circunferencia.');
    }
    //HERECIA -VIDA
    else if ((numeroPrimeraRuleta > 3392 && numeroPrimeraRuleta <= 3512) && (numeroSegundaRul > 3392 && numeroSegundaRul <= 3512)) {
        funcionAgregarDatos('Herencia - Vida', '../assets/icons/herencia.png', '../assets/icons/vida.png', 'Cada participante compartirá un dicho o un refrán que haya heredado de alguna persona cercana (familia, amigos, conocidos). Compartir el refrán y la forma cómo se ha heredado.');
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = "Tirar de nuevo";
    button.classList.add('boton-refresh');
    button.addEventListener('click', () => {
        window.open('index.html', '_self');
    });
    // Agregar al html
    resultados.append(
        h3_Combinacion,
        div_Images_Combinacion,
        parrafo_Combinacion,
        hr,
        h3_terceraRul,
        div_image_tercera,
        button
    )
};


const recuperarSegundaRuleta = numeroSegundaRul => {

    if (numeroSegundaRul <= 3600 && numeroSegundaRul > 3511) {
        return 'Humanidad';
    } else if (numeroSegundaRul <= 3511 && numeroSegundaRul > 3392) {
        return 'Vida';
    } else if (numeroSegundaRul <= 3392 && numeroSegundaRul > 3269) {
        return 'Pais';
    }


}

const recuperarImagenSegundaRuleta = result => {
    if (result == 'Vida') {
        return '../assets/icons/vida.png';
    } else if (result == 'Humanidad') {
        return '../assets/icons/humanidad.png';
    } else if (result == 'Pais') {
        return '../assets/icons/pais.png';
    }
}

const recuperarTerceraRuleta = numeroTerceraRul => {
    // Tercera Ruleta
    if (numeroTerceraRul > 3575 && numeroTerceraRul <= 3600) {
        return 'Cultura';
    } else if (numeroTerceraRul > 3542 && numeroTerceraRul <= 3575) {
        return 'Paro Nacional';
    } else if (numeroTerceraRul > 3510 && numeroTerceraRul <= 3542) {
        return 'Pandemia';
    } else if (numeroTerceraRul > 3481 && numeroTerceraRul <= 3510) {
        return 'Casa Común';
    } else if (numeroTerceraRul > 3448 && numeroTerceraRul <= 3481) {
        return 'Familia';
    } else if (numeroTerceraRul > 3415 && numeroTerceraRul <= 3448) {
        return 'Derechos Humanos';
    } else if (numeroTerceraRul > 3383 && numeroTerceraRul <= 3415) {
        return 'Espiritualidad';
    } else if (numeroTerceraRul > 3350 && numeroTerceraRul <= 3383) {
        return 'Virtualidad';
    } else if (numeroTerceraRul > 3316 && numeroTerceraRul <= 3350) {
        return 'Sueños';
    } else if (numeroTerceraRul > 3283 && numeroTerceraRul <= 3316) {
        return 'Migracion';
    } else if (numeroTerceraRul > 3249 && numeroTerceraRul <= 3283) {
        return 'Violencia';
    }
}

const buscarImagenTercerCirculo = result => {


    if (result == 'Cultura') {
        return '../assets/icons/cultura.png';
    } else if (result == 'Paro Nacional') {
        return '../assets/icons/paroNacional.png';
    } else if (result == 'Pandemia') {
        return '../assets/icons/pandemia.png';
    } else if (result == 'Casa Común') {
        return '../assets/icons/casaComun.png';
    } else if (result == 'Familia') {
        return '../assets/icons/familia.png';
    } else if (result == 'Derechos Humanos') {
        return '../assets/icons/derechosHumanos.png';
    } else if (result == 'Espiritualidad') {
        return '../assets/icons/espiritualidad.png';
    } else if (result == 'Virtualidad') {
        return '../assets/icons/virtualidad.png';
    } else if (result == 'Sueños') {
        return '../assets/icons/sueños.png';
    } else if (result == 'Migracion') {
        return '../assets/icons/migracion.png';
    } else if (result == 'Violencia') {
        return '../assets/icons/violencia.png';
    }
};