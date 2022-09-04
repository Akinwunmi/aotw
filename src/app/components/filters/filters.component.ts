import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FiltersComponent implements OnInit {
  @Output()
  public selectedView = new EventEmitter<string>();

  ngOnInit(): void {
    this.setView('grid');
  }

  public setView(view: string): void {
    this.selectedView.emit(view);
  }
}
