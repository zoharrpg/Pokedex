import { core } from '@angular/compiler';
import { Injectable,ElementRef,NgZone } from '@angular/core';
import {
  Engine,ArcRotateCamera,Scene,HemisphericLight ,Vector3,SceneLoader
} from 'babylonjs'


@Injectable({
  providedIn: 'root'
})
export class EngineService {
  private canvas: HTMLCanvasElement;
  private engine: Engine;
  private camera: ArcRotateCamera;
  private scene: Scene;
  private light: HemisphericLight;



  constructor(
    private ngZone:NgZone,
  
  ) { }

public createScene(canvas:ElementRef<HTMLCanvasElement>): void{
  this.canvas=canvas.nativeElement;
  
  this.engine=new Engine(this.canvas,true);
 
  this.scene=new Scene(this.engine);
  
  SceneLoader.ImportMeshAsync("","https://assets.babylonjs.com/meshes/","box.babylon");

  this.camera=new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new Vector3(0, 0, 0),this.scene);

  this.camera.attachControl(this.canvas,true);

  this.light= new HemisphericLight("light", new Vector3(1, 1, 0),this.scene);

  



}

public animate():void{

  this.ngZone.runOutsideAngular(()=>
  {
    const rendererLoopCallback = () => {
      this.scene.render();
    };

    this.engine.runRenderLoop(rendererLoopCallback);

  }
  
  
  
  );
}


}
