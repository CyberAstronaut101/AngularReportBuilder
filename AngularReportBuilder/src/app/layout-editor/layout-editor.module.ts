import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutEditorRoutingModule } from './layout-editor-routing.module';
import { LayoutManagerComponent } from './layout-manager/layout-manager.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReportElementComponent } from './report-element/report-element.component';
import { DynamicChildLoaderDirective } from '../directives/dynamic-child-loader.directive';

@NgModule({
  declarations: [LayoutManagerComponent, ReportElementComponent, DynamicChildLoaderDirective],
  imports: [CommonModule, LayoutEditorRoutingModule, DragDropModule],
})
export class LayoutEditorModule {}
