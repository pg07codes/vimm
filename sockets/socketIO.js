/*created by Pranav Gupta (pg07codes) on 15-10-2018 */
let robotCommand=require("../robot/commands")

module.exports=(io)=>{

    io.on('connection', function(socket){
        console.log('Client Connected with ID : '+ socket.id);

        socket.on('cmd',(cmd)=>{
            if(cmd.command==="move up"){
                robotCommand.moveUp(cmd.value)
            }
            else if(cmd.command==="move down"){
                robotCommand.moveDown(cmd.value)
            }
            else if(cmd.command==="move left"){
                robotCommand.moveLeft(cmd.value)
            }
            else if(cmd.command==="move right"){
                robotCommand.moveRight(cmd.value)
            }
            else if(cmd.command==="click"){
                robotCommand.click()
            }
            else if(cmd.command==="right click"){
                robotCommand.rightClick()
            }
        })

    })


}
