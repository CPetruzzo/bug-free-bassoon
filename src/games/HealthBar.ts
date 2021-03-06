import { AnimatedSprite, Texture, TextureSource} from "pixi.js";
import { PhysicsContainer } from "./PhysicsContainer";

export class HealthBar extends PhysicsContainer{
    

    public shape: TextureSource;
    private bar: AnimatedSprite;


    constructor(shape: TextureSource, width: number, height: number){

        super();
        this.shape= shape;
            
        this.bar = new AnimatedSprite([
            Texture.from(shape),]
        );
        this.bar.width= width;
        this.bar.height= height;
        this.bar.position.set(30, 28);
        
        this.addChild(this.bar);        
    }

    public override update(deltaMS: number) {
        this.bar.update(deltaMS / (1000 / 60));
    }
}