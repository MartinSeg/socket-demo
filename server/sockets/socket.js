const { io } = require("../server");

io.on("connection", (client) => {
  console.log("user connected");

  client.on("disconnect", () => {
    console.log("usuario desconectado");
  });

  //Escuchar del cliente
  client.on("enviarMensaje", (data, cb) => {
    
    client.broadcast.emit("enviarMensaje", `${data.usuario}: ${data.mensaje}`);

    // if( mensaje.usuario){
    //     cb({
    //         resp: "TODO BIEN"
    //     })
    // }else{
    //     cb({
    //         resp: "TODO MAL"
    //     })
    // }
  });

  //Enviar al cliente
  client.emit("enviarMensaje", {
    usuario: "Admin",
    mensaje: "Bienvenido al servidor",
  });
});
