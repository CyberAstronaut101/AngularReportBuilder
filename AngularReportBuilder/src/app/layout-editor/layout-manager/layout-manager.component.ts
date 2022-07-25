import { CdkDragEnd } from '@angular/cdk/drag-drop';
import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { ReportElementComponent } from '../report-element/report-element.component';

@Component({
  selector: 'app-layout-manager',
  templateUrl: './layout-manager.component.html',
  styleUrls: ['./layout-manager.component.scss'],
})
export class LayoutManagerComponent implements OnInit {
  // @ViewChild('boundary-box', { read: ViewContainerRef })
  // container?: ViewContainerRef;

  @ViewChild('reportElement', { read: ViewContainerRef })
  reportElement?: ViewContainerRef;

  @ViewChildren('reportBoundary') reportChildren?: QueryList<any>;

  // Track lists of generated components
  components = [];

  // Expose class so that it can be used in the template
  reportElementClass = ReportElementComponent;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {}

  dragEnd($event: CdkDragEnd) {
    console.log($event.source.getFreeDragPosition());
  }

  addReportElement() {
    // https://stackoverflow.com/questions/70946038/replace-deprecated-angular-componentfactoryresolver-componentfactory
    console.log('addReportElement');
    // const component = this.viewContainerRef.createComponent(
    //   ReportElementComponent
    // );

    const newReportElementRef = this.reportElement?.createComponent(
      ReportElementComponent
    );
    // newReportElementRef?.instance.data = 'Dynamic Passed Data?';
  }

  clearAllReportElements() {
    // this.reportBoundary?.clear();
  }

  getReportElements() {
    console.log('Getting All Report Element Info');
    // this.reportBoundary?
    console.log(this.reportChildren);
  }
}
