import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemsComponent {}
