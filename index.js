const dotenv = require('dotenv') ;

const cors = require('cors') ;

const express = require('express') ;
const app = express();

app.use(cors());

const {Server} = require('socket.io') ;

const http = require('http');
const server = http.createServer(app);

const io = new Server(server , {
    cors:{
        origin:'*' ,
        methods:['GET' , 'POST'] ,
    }
});             

io.on("connection" , (socket) => {

    console.log('it s connection');

    socket.on('message' , (message) => {

        console.log(message);

        io.emit('message' , {
            message:'hello from the server' ,
        });

        // socket.

        // socket.broadcast.emit('message' , {
        //     message:'hello from the server' ,
        // });

    });

    console.log('connection from ' , socket.id);
});

const PORT = process.env.PORT || 3001 ;

server.listen(PORT , () => {
    console.log('server run on port : ' + PORT );
});

const P0RT = 3002 ;

app.listen(P0RT , () => {
    console.log('hello i am App , i am listen the port : ' , P0RT);
});

app.get('/' , (req , res) => {
    res.send('<div class="foo-bar">hello</div>');
}) ;