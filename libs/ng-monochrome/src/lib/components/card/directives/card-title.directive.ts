import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: `monochrome-card-title, [monochrome-card-title], [monochromeCardTitle]`,
})
export class CardTitleDirective {
  @HostBinding('class') classes = 'monochrome-card-title';
}
