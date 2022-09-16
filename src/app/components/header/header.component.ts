import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
  @Input()
  public title = 'Archive';

  public isArchiveMenuOpen = false;
  public isMainMenuOpen = false;

  public toggleMenu(menu: 'archive' | 'main'): void {
    if (menu === 'archive') {
      this.isArchiveMenuOpen = !this.isArchiveMenuOpen;
      this.isMainMenuOpen = false;
    }
    if (menu === 'main') {
      this.isArchiveMenuOpen = false;
      this.isMainMenuOpen = !this.isMainMenuOpen;
    }
  }
}
