/*created by Pranav Gupta (pg07codes) on 15-10-2018 */

const robot=require("robotjs")
robot.setMouseDelay(1)
const color=require("hex-to-color-name")


module.exports={
    moveUp(val){
        val=parseInt(val)
        console.log("EXECUTING COMMAND: move up : "+val);
        let X=robot.getMousePos().x
        let Y=robot.getMousePos().y
        console.log("INITIAL POS : ",X," , ",Y)
        robot.moveMouseSmooth(X,Y-val)
        console.log("FINAL POS : ",robot.getMousePos().x," , ",robot.getMousePos().y)

    },
    moveDown(val){
        val=parseInt(val)
        console.log("EXECUTING COMMAND: move down : "+val);
        let X=robot.getMousePos().x
        let Y=robot.getMousePos().y
        console.log("INITIAL POS : ",X," , ",Y)
        robot.moveMouseSmooth(X,Y+val)
        console.log("FINAL POS : ",robot.getMousePos().x," , ",robot.getMousePos().y)

    },
    moveLeft(val){
        val=parseInt(val)
        console.log("EXECUTING COMMAND: move left : "+val);
        let X=robot.getMousePos().x
        let Y=robot.getMousePos().y
        console.log("INITIAL POS : ",X," , ",Y)
        robot.moveMouseSmooth(X-val,Y)
        console.log("FINAL POS : ",robot.getMousePos().x," , ",robot.getMousePos().y)

    },
    moveRight(val){
        val=parseInt(val)
        console.log("EXECUTING COMMAND: move right : "+val);
        let X=robot.getMousePos().x
        let Y=robot.getMousePos().y
        console.log("INITIAL POS : ",X," , ",Y)
        robot.moveMouseSmooth(X+val,Y)
        console.log("FINAL POS : ",robot.getMousePos().x," , ",robot.getMousePos().y)

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
    },
    scrollUp(val){
        console.log("EXECUTING COMMAND: scroll up :"+val);
        robot.scrollMouse(0,val);
    },
    scrollDown(val){
        console.log("EXECUTING COMMAND: scroll down:"+val);
        robot.scrollMouse(0,-val);
    },
    whatColor(){
        let X=robot.getMousePos().x
        let Y=robot.getMousePos().y
        console.log("EXECUTING COMMAND: what color : "+X+" "+Y);
        let hex=robot.getPixelColor(X,Y)
        let colorMap={
            "white": "FFFFFF",
            "black": "000000",
            "red": "FF0000",
            "green": "00FF00",
            "blue": "0000FF",
            "pink": "FF00FF",
            "yellow": "FFFF00",
            "teal": "00FFFF"
        }
        let c=color('#'+hex,colorMap)
        console.log(c)
       // return color
    }

}


