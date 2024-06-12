

const io = require('socket.io')(8800,{
    cors :{
        origin:'https://connectify-beta.vercel.app/'
    }
})

let activeUsers = []


io.on('connection', socket => {

    socket.on('addUser', (userId)=>{
        if(!activeUsers.some(user => user.userId === userId)){
            activeUsers.push({userId, socketId: socket.id})
        }
        console.log('User connected',activeUsers)
        io.emit('getUsers', activeUsers)
    })

    socket.on('')

    socket.on('disconnect', ()=>{
        activeUsers = activeUsers.filter(user => user.socketId !== socket.id)
        console.log('User disconnected',activeUsers)
        io.emit('getUsers', activeUsers)
    })


})