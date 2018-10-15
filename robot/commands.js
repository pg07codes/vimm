/*created by Pranav Gupta (pg07codes) on 15-10-2018 */

const robot=require("robotjs")
robot.setMouseDelay(1)

module.exports={
    moveUp(val){
        console.log("EXECUTING COMMAND: move up");
        let X=robot.getMousePos().x
        let Y=robot.getMousePos().y
        robot.moveMouseSmooth(X,Y-val)
    },
    moveDown(val){
        console.log("EXECUTING COMMAND: move down");
        let X=robot.getMousePos().x
        let Y=robot.getMousePos().y
        robot.moveMouseSmooth(X,Y+val)
    },
    moveLeft(val){
        console.log("EXECUTING COMMAND: move left");
        let X=robot.getMousePos().x
        let Y=robot.getMousePos().y
        robot.moveMouseSmooth(X-val,Y)
    },
    moveRight(val){
        console.log("EXECUTING COMMAND: move right");
        let X=robot.getMousePos().x
        let Y=robot.getMousePos().y
        robot.moveMouseSmooth(X+val,Y)
    },
    click(){
        console.log("EXECUTING COMMAND: click");
        robot.mouseClick()
    },
    rightClick(){
        console.log("EXECUTING COMMAND: right click");
        robot.mouseClick('right')
    },
    doubleClick(){
        console.log("EXECUTING COMMAND: double click");
        robot.mouseClick('left',true)
    }

}


