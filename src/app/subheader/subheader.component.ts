import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subheader',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SubheaderComponent {
  public tabs = [
    { id: 1, title: 'Search' },
    { id: 1, title: 'Discover' }
  ]
}
