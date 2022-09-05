import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChildren } from '@angular/core';
import { AotwTab } from '@aotw/components';

@Component({
  selector: 'app-subheader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SubheaderComponent {
  @ViewChildren('aotw-tab')
  public aotwTabs!: AotwTab[];

  public tabs = [
    { id: 1, title: 'Search' },
    { id: 2, title: 'Discover' }
  ];
}
