import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FiltersComponent {}
