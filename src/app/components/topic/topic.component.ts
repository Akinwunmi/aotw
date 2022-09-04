import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topic } from 'src/app/services/archive.model';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopicComponent {
  @Input()
  public topic?: Topic;

  @Input()
  public view!: string;
}
