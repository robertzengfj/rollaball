import { _decorator, Component, Node,Input,input, EventKeyboard,KeyCode, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
    private moveDir:Vec2=Vec2.ZERO;
    @property
    public speed:number=5

    protected onLoad(): void {
        console.log("PlayerController loaded");
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }
    onDestroy (): void {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    }
    onKeyDown(event:EventKeyboard){
        // console.log("Key Down: ", event.keyCode);
        // switch (event.keyCode) {
        //     case 87: // 'W' key
        //         console.log("Move Forward");
        //         break;
        //     case 83: // 'S' key
        //         console.log("Move Backward");
        //         break;
        //     case 65: // 'A' key
        //         console.log("Move Left");
        //         break;
        //     case 68: // 'D' key
        //         console.log("Move Right");
        //         break;
        //     default:
        //         break;
        // }
        switch (event.keyCode) {
            case KeyCode.KEY_A: // 'W' key
                console.log("Move left");
                this.moveDir=new Vec2(-1,this.moveDir.y)
                //this.node.setPosition(pos.x,pos.y,pos.z-0.2);
                break;
            case KeyCode.KEY_D: // 'S' key
                console.log("Move right");
                this.moveDir=new Vec2(1,this.moveDir.y)
                //this.node.setPosition(pos.x,pos.y,pos.z+0.2);
                break;
            case KeyCode.KEY_W: // 'A' key
                console.log("Move forward");
                this.moveDir=new Vec2(this.moveDir.x,1)
                //this.node.setPosition(pos.x+0.2,pos.y,pos.z);
                break;
            case KeyCode.KEY_S: // 'D' key
                console.log("Move back");
                //this.node.setPosition(pos.x-0.2,pos.y,pos.z);
                this.moveDir=new Vec2(this.moveDir.x,-1)
                break;
            default:
                break;
        }

    }
    onKeyUp(event:EventKeyboard){
        console.log("Key Up: ", event.keyCode);

        switch (event.keyCode) {
            case KeyCode.KEY_A: // 'W' key
                console.log("Move left");
                this.moveDir=new Vec2(0,this.moveDir.y)
                //this.node.setPosition(pos.x,pos.y,pos.z-0.2);
                break;
            case KeyCode.KEY_D: // 'S' key
                console.log("Move right");
                this.moveDir=new Vec2(0,this.moveDir.y)
                //this.node.setPosition(pos.x,pos.y,pos.z+0.2);
                break;
            case KeyCode.KEY_W: // 'A' key
                console.log("Move forward");
                this.moveDir=new Vec2(this.moveDir.x,0)
                //this.node.setPosition(pos.x+0.2,pos.y,pos.z);
                break;
            case KeyCode.KEY_S: // 'D' key
                console.log("Move back");
                //this.node.setPosition(pos.x-0.2,pos.y,pos.z);
                this.moveDir=new Vec2(this.moveDir.x,0)
                break;
            default:
                break;
        }
    }
    onKeyPressing(event:EventKeyboard){
        const pos=this.node.position;
        console.log("Key Press: ", event.keyCode);
        // switch (event.keyCode) {
        //     case KeyCode.KEY_A: // 'W' key
        //         console.log("Move left");
        //         this.node.setPosition(pos.x,pos.y,pos.z-0.2);
        //         break;
        //     case KeyCode.KEY_D: // 'S' key
        //         console.log("Move right");
        //         this.node.setPosition(pos.x,pos.y,pos.z+0.2);
        //         break;
        //     case KeyCode.KEY_W: // 'A' key
        //         console.log("Move forward");
        //         this.node.setPosition(pos.x+0.2,pos.y,pos.z);
        //         break;
        //     case KeyCode.KEY_S: // 'D' key
        //         console.log("Move back");
        //         this.node.setPosition(pos.x-0.2,pos.y,pos.z);
        //         break;
        //     default:
        //         break;
        // }
    }
    protected update(dt: number): void {
        const pos=this.node.position
        this.node.setPosition(pos.x+this.moveDir.y*this.speed*dt,pos.y,pos.z+this.moveDir.x*this.speed*dt)
    }
}
