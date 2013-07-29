function Cronometro(lugarCarga){
  var self = this;
  self.interval = 0;
  this.upd = function(){
    var secs = self.interval/100;
    var milis = self.interval%100;
    self.lugarCarga.innerHTML = Math.floor(secs)+":"+milis;
  }
  this.paso = function(){
    self.interval = self.interval + 1;
    self.upd();
  }
  this.iniciar = function(){
    self.lugarCarga = document.getElementById('reloj');
    self.id_intervalo = setInterval(self.paso,10);
  };
  this.detener = function(){
    clearInterval(self.id_intervalo);
  };
  this.reiniciar = function(){
    self.interval = 0;
    self.lugarCarga.innerHTML = "0:0";
  };
}

