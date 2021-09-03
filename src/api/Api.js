import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:4000')

function subscribeToTimer(cb) {

    socket.on('connect', function () {

            socket.emit('start');

            socket.on('ticker', data => {

                cb(data)

            })
        }
    )
}

export default subscribeToTimer

