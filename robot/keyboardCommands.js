/*created by Pranav Gupta (pg07codes) on 15-10-2018 */

let fs = require('fs');
const robot=require("robotjs")
robot.setMouseDelay(1)

module.exports={
    type(str){
        console.log("EXECUTING COMMAND: type : "+str);
        robot.typeString(str+" ")
    },
    // this is a keyboard shortcut and thus placed here (not being used as of now)
    // snapshot(){
    //     console.log("EXECUTING COMMAND: snapshot ");
    //     let imgData = robot.screen.capture()
    //     let imgBuffer=imgData.image
    //     console.log(imgBuffer)
    //     fs.writeFile('C:\\Users\\iampr\\Desktop\\snapshot.png', imgBuffer, (err) => {
    //         if (err) throw err;
    //         console.log('The file has been saved!');
    //     });
    // }
}


