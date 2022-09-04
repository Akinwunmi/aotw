import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Topic } from '../../services/archive.model';

@Component({
  selector: 'app-main-topic',
  standalone: true,
  imports: [ CommonModule, HttpClientModule ],
  templateUrl: './main-topic.component.html',
  styleUrls: ['./main-topic.component.scss']
})
export class MainTopicComponent {
  private _mainTopic!: Topic;

  @Input()
  public set mainTopic(mainTopic: Topic) {
    this._mainTopic = mainTopic;
    const activeTopic = mainTopic.topics[0];
    this.setActiveTopic(activeTopic);
    this.selectedTopic.emit(activeTopic);
  }

  @Output()
  public selectedTopic = new EventEmitter<Topic>();

  public get mainTopic(): Topic {
    return this._mainTopic;
  }

  public activeTopic!: Topic;

  public setActiveTopic(topic: Topic): void {
    this.activeTopic = topic;
    this.selectedTopic.emit(topic);
  }
}
