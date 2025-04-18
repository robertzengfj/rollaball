import { _decorator, Component, Node,Input,input, EventKeyboard,KeyCode, Vec2, RigidBody,Vec3,Collider, ICollisionEvent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
    private moveDir:Vec2=Vec2.ZERO;
    @property
    public speed:number=5
    @property
    public moveForce:number=5


    private rgd:RigidBody=null

    private collider:Collider=null

    protected start():void{
        this.rgd=this.getComponent(RigidBody)//获取刚体组件
        this.collider=this.node.getComponent(Collider)//获取碰撞体组件
        console.log(this.collider)
        this.collider.on('onCollisionEnter',this.onCollisionEnter,this)//注册触发器进入事件
        this.collider.on('onCollisionExit',this.onCollisionExit,this)//注册触发器离开事件
        this.collider.on('onCollisionStay',this.onCollisionStay,this)//注册触发器停留事件
    }

    protected onLoad(): void {
       

        console.log("PlayerController loaded");
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }
    onCollisionEnter(event:ICollisionEvent){
        console.log("onCollisionEnter")
    }
    onCollisionExit(event:ICollisionEvent){
        console.log("onCollisionExit")
    }
    onCollisionStay(event:ICollisionEvent){
        console.log("onCollisionStay")
    }
    onDestroy (): void {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.collider.off('onCollisionEnter',this.onCollisionEnter,this)//注册触发器进入事件
        this.collider.off('onCollisionExit',this.onCollisionExit,this)//注册触发器离开事件
        this.collider.off('onCollisionStay',this.onCollisionStay,this)//注册触发器停留事件
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
        // const pos=this.node.position
        // this.node.setPosition(pos.x+this.moveDir.y*this.speed*dt,pos.y,pos.z+this.moveDir.x*this.speed*dt)
        this.rgd.applyForce(new Vec3(this.moveDir.y,0,this.moveDir.x).multiplyScalar(this.moveForce),);
    }
}
