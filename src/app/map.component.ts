import { Component, Input } from '@angular/core';

@Component({
  selector: 'map',
  template: `
  <div style="height: 100vh">
    <ac-map>
      <label-layer-example></label-layer-example>
    </ac-map>
  </div>`,
})
export class MapComponent  {
  @Input() name: string;
}
