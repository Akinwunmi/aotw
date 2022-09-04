import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';

import { Topic } from '../../services/archive.model';

@Component({
  selector: 'app-main-topic',
  standalone: true,
  imports: [ CommonModule, HttpClientModule ],
  templateUrl: './main-topic.component.html',
  styleUrls: ['./main-topic.component.scss']
})
export class MainTopicComponent {
  @Input()
  public mainTopic!: Topic;
}
