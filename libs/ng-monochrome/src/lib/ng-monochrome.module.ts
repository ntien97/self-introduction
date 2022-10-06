import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  CardTitleDirective,
  MonochromeCardHeaderComponent,
} from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CardComponent,
    MonochromeCardHeaderComponent,
    CardTitleDirective,
  ],
  exports: [CardComponent, MonochromeCardHeaderComponent, CardTitleDirective],
})
export class NgMonochromeModule {}
