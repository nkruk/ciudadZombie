/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  lastValidDirection: "",
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  mover: function(movX, movY, tecla, puedeMoverse) {
    if (puedeMoverse) {
      this.x -= movX;
      this.y -= movY; 
    switch (tecla) {
      case "der":
        this.sprite = "imagenes/auto_rojo_derecha.png";
        this.ancho = 30;
        this.alto = 15;
        this.lastValidDirection = "der";
        break;
      case "abajo":
        this.sprite = "imagenes/auto_rojo_abajo.png";
        this.ancho = 15;
        this.alto = 30;
        this.lastValidDirection = "abajo";
        break;
      case "izq":
        this.sprite = "imagenes/auto_rojo_izquierda.png";
        this.ancho = 30;
        this.alto = 15;
        this.lastValidDirection = "izq";
        break;
      case "arriba":
        this.sprite = "imagenes/auto_rojo_arriba.png";
        this.ancho = 15;
        this.alto = 30;
        this.lastValidDirection = "arriba";
        break;
      } 
    } else {
      switch (this.lastValidDirection) {
        case "der":
          this.sprite = "imagenes/auto_rojo_derecha.png";
          this.ancho = 30;
          this.alto = 15;
          this.lastValidDirection = "der";
          this.x -= 20;
          break;
        case "abajo":
          this.sprite = "imagenes/auto_rojo_abajo.png";
          this.ancho = 15;
          this.alto = 30;
          this.lastValidDirection = "abajo";
          this.y -= 20;
          break;
        case "izq":
          this.sprite = "imagenes/auto_rojo_izquierda.png";
          this.ancho = 30;
          this.alto = 15;
          this.lastValidDirection = "izq";
          this.x += 20;
          break;
        case "arriba":
          this.sprite = "imagenes/auto_rojo_arriba.png";
          this.ancho = 15;
          this.alto = 30;
          this.lastValidDirection = "arriba";
          this.y += 20;
          break;
        } 

    }
  },

  perderVidas: function(vidasPerdidas) {
    this.vidas -= vidasPerdidas;
    }
};
