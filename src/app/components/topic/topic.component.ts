import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

import { Topic } from '../../services/archive.model';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopicComponent {
  @Input()
  public topic?: Topic;

  @Input()
  public view!: string;

  // ! TEMP to test image ratio
  public dimensionsMock = {
    width: Math.ceil(Math.random() * (1000 - 400) + 400),
    height: Math.ceil(Math.random() * (500 - 300) + 300)
  };
}
