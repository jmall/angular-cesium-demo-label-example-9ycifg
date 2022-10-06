import { from as observableFrom, Observable } from 'rxjs';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AcLayerComponent, AcNotification, ActionType } from 'angular-cesium';

@Component({
  selector: 'label-layer-example',
  templateUrl: 'label-layer-example.component.html',
})
export class LabelLayerExampleComponent implements OnInit, AfterViewInit {
  @ViewChild(AcLayerComponent, {static: false}) layer: AcLayerComponent;

  bases$: Observable<AcNotification>;
  show = true;

  constructor() {
    const base1: AcNotification = {
      id: '0',
      actionType: ActionType.ADD_UPDATE,
      entity: {name: 'base alpha', position: Cesium.Cartesian3.fromDegrees(-80, 49), show: true}
    };
    const base2 = {
      id: '1',
      actionType: ActionType.ADD_UPDATE,
      entity: {name: 'base beta', position: Cesium.Cartesian3.fromDegrees(-80, 30), show: true}
    };
    const baseArray = [base1, base2];
    this.bases$ = observableFrom(baseArray);

    setTimeout(() => {
      base2.entity.name = 'base gama';
      this.layer.updateNotification(base2);
    }, 5000);
    setTimeout(() => {
      this.layer.refreshAll(baseArray);
    }, 10000);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  removeAll() {
    this.layer.removeAll();
  }

  setShow($event: boolean) {
    this.show = $event;
  }

}
