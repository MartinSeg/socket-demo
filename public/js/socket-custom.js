var socket = io();

socket.on('connect', function(){
    console.log('conectado')
})

socket.on('disconnect', function(){
    console.log('desconectado')
})

socket.emit('enviarMensaje', {
    usuario: 'Mart',
    mensjae: 'Mensaje'
}, function(resp){
    console.log(resp)
})

socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje)
})