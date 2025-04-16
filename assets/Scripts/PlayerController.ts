import { _decorator, Component, Node,Input,input, EventKeyboard,KeyCode } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {

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
        console.log("Key Down: ", event.keyCode);
        switch (event.keyCode) {
            case 87: // 'W' key
                console.log("Move Forward");
                break;
            case 83: // 'S' key
                console.log("Move Backward");
                break;
            case 65: // 'A' key
                console.log("Move Left");
                break;
            case 68: // 'D' key
                console.log("Move Right");
                break;
            default:
                break;
        }

    }
    onKeyUp(event:EventKeyboard){
        console.log("Key Up: ", event.keyCode);
    }
    onKeyPressing(event:EventKeyboard){
        const pos=this.node.position;
        console.log("Key Press: ", event.keyCode);
        switch (event.keyCode) {
            case KeyCode.KEY_A: // 'W' key
                console.log("Move left");
                this.node.setPosition(pos.x,pos.y,pos.z-0.2);
                break;
            case KeyCode.KEY_D: // 'S' key
                console.log("Move right");
                this.node.setPosition(pos.x,pos.y,pos.z+0.2);
                break;
            case KeyCode.KEY_W: // 'A' key
                console.log("Move forward");
                this.node.setPosition(pos.x+0.2,pos.y,pos.z);
                break;
            case KeyCode.KEY_S: // 'D' key
                console.log("Move back");
                this.node.setPosition(pos.x-0.2,pos.y,pos.z);
                break;
            default:
                break;
        }
    }
}
