function contarPalabras(texto) {
  //*Minuscula
  texto = texto.toLowerCase();

  //* Cambiar los caracteres especiales.
  const caracteresEspeciales = ['.', ',', ':', ';', '!', '?'];
  caracteresEspeciales.forEach(caracter => {
    //! si se cambia g no se vulve global y solo cambiaria el primer caracter
    texto = texto.replace(new RegExp('\\' + caracter, 'g'), '');
  });
  //* Dividir el texto en palabras
  const palabras = texto.split(/\s+/);

  //*Contar
  const contar = {};
  palabras.forEach(palabra => {
    if (contar[palabra]) {
      contar[palabra]++;
    } else {
      contar[palabra] = 1;
    }
  });

  return contar;
}

const oracion = "NO ME MIRES QUE MIRAN QUE NOS MIRAMOS. MIREMOS LA MANERA DE NO MIRARNOS. MIRA: NO NOS MIREMOS. Y CUANDO NO NOS MIREN, NOS MIRAREMOS.";

const resultado = contarPalabras(oracion);
console.log("Resultado:");
console.log(resultado);

//! para que funcione utiliza npm run dev

