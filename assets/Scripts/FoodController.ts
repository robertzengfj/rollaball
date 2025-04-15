import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FoodController')
export class FoodController extends Component {
    private _rotationSpeed: number = 90; // Rotation speed in degrees per second
    start() {

    }

    update(deltaTime: number) {
       const rotation = this.node.eulerAngles;
       const newRotation = new Vec3(rotation.x, rotation.y + this._rotationSpeed * deltaTime, rotation.z);
       this.node.eulerAngles = newRotation;
    }
}


