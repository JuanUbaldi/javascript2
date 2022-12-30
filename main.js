let pueblo = prompt("ingrese ciudad");

let temperature = parseFloat(prompt("ingrese la temperatura en grados centigrados"));
let precipitaciones = parseFloat(prompt("ingrese la lluvia anual en mmts."));

function determinador(t, p) {
  if ((t < 10) & (p < 500)) {
    alert("estamos en " + pueblo + " y el clima es frio y seco");
  } else if ((t < 10) & (p > 500)) {
    alert("estamos en " + pueblo + " y el clima es frio y humedo");
  } else if ((t <= 10) & (t > 20) & (p < 500)) {
    alert("estamos en " + pueblo + " y el clima es templado y seco");
  } else if ((t <= 10) & (t > 20) & (p > 500)) {
    alert("estamos en " + pueblo + " y el clima es templado y humedo");
  } else if ((t >= 20) & (p > 500)) {
    alert("estamos en " + pueblo + " y el clima es calido y seco");
  } else {
    alert("estamos en " + pueblo + " y el clima es calido y humedo");
  }
}

determinador(temperature, precipitaciones);

function hola() {
  let pregunta = prompt(
    "ahora, ¿querés saber el promedio de temperaturas de la semana en tu ciudad? (responde si o no)"
  );
  let totalMa = 0;
  let totalMi = 0;
  if (pregunta === "si") {
    for (let i = 0; i < 7; i++) {
      let temperatMa = parseInt(prompt("ingrese la temperatura máxima"));
      let temperatMe = parseInt(prompt("ingrese la temperatura mínima"));
      totalMa = totalMa + temperatMa;
      totalMi = totalMi + temperatMe;
    }
    alert(
      "La temperatura maxima es " +
        parseInt(totalMa / 7) +
        " y la temperatura minima semanal es " +
        parseInt(totalMi / 7)
    );
  } else if (pregunta === "no") {
    alert("Muchas gracias");
  } else {
    alert("respuesta invalida");
  }
}

hola();
