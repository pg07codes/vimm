/*created by Pranav Gupta (pg07codes) on 15-10-2018 */
let mouseCommand=require("../robot/mouseCommands")
let kbCommand=require("../robot/keyboardCommands")

module.exports=(io)=>{

    io.on('connection', function(socket){
        console.log('Client Connected with ID : '+ socket.id);

        socket.on('cmd',(cmd)=>{
            if(cmd.command==="move up"){
                mouseCommand.moveUp(cmd.value)
            }
            else if(cmd.command==="move down"){
                mouseCommand.moveDown(cmd.value)
            }
            else if(cmd.command==="move left"){
                mouseCommand.moveLeft(cmd.value)
            }
            else if(cmd.command==="move right"){
                mouseCommand.moveRight(cmd.value)
            }
            else if(cmd.command==="click"){
                mouseCommand.click()
            }
            else if(cmd.command==="right click"){
                mouseCommand.rightClick()
            }
            else if(cmd.command==="double click"){
                mouseCommand.doubleClick()
            }
            else if(cmd.command==="scroll up"){
                mouseCommand.scrollUp(cmd.value)
            }
            else if(cmd.command==="scroll down"){
                mouseCommand.scrollDown(cmd.value)
            }
            else if(cmd.command==="type"){
                kbCommand.type(cmd.value)
            }
            else if(cmd.command==="snapshot"){
                kbCommand.snapshot()
            }
        })

    })


}
