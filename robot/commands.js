/*created by Pranav Gupta (pg07codes) on 15-10-2018 */

const robot=require("robotjs")
robot.setMouseDelay(1)

module.exports={
    moveUp(val){
        let X=robot.getMousePos().x
        let Y=robot.getMousePos().y
        robot.moveMouseSmooth(X,Y-val)
    },
    moveDown(val){
        let X=robot.getMousePos().x
        let Y=robot.getMousePos().y
        robot.moveMouseSmooth(X,Y+val)
    },
    moveLeft(val){
        let X=robot.getMousePos().x
        let Y=robot.getMousePos().y
        robot.moveMouseSmooth(X-val,Y)
    },
    moveRight(val){
        let X=robot.getMousePos().x
        let Y=robot.getMousePos().y
        robot.moveMouseSmooth(X+val,Y)
    },
    click(){
        robot.mouseClick()
    },
    rightClick(){
        robot.mouseClick('right')
    },
    doubleClick(){
        robot.mouseClick('left',true)
    }

}


