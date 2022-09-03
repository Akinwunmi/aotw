import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltersComponent } from '../filters';
import { ItemsComponent } from '../items';
import { MainTopicsComponent } from '../main-topics';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [
    CommonModule,
    FiltersComponent,
    ItemsComponent,
    MainTopicsComponent
  ],
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent {}
