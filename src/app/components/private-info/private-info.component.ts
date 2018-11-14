import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-private-info',
  templateUrl: './private-info.component.html',
  styleUrls: ['./private-info.component.scss']
})
export class PrivateInfoComponent {
  @Input() public privateInfo;

  constructor() { }
}
