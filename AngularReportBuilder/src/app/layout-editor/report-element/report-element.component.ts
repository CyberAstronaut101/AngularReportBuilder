import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'report-element',
  templateUrl: './report-element.component.html',
  styleUrls: ['./report-element.component.scss'],
})
export class ReportElementComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {
    console.log('Created Report Element Component');
  }

  dragEnd($event: CdkDragEnd) {
    console.log($event.source.getFreeDragPosition());
  }

  about() {
    console.log('About Report Element TMP');
  }

  computeDragRenderPos(pos: any, dragRef: any) {
    // [cdkDragConstrainPosition]="computeDragRenderPos"
    return { x: Math.floor(pos.x / 30) * 30, y: pos.y }; // will render the element every 30 pixels horizontally
  }
}
