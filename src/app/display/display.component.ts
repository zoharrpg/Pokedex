import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import { EngineService } from '../engine.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  
  @ViewChild('rendererCanvas',{static :true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private engServ:EngineService ) { }

  ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas)
    this.engServ.animate();

  }

}
