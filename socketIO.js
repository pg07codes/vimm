/*created by Pranav Gupta (pg07codes) on 15-10-2018 */

module.exports=(io)=>{
    io.on('connection', function(socket){
        console.log('a user connected');
    })
}
