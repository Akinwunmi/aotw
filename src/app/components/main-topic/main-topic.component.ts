import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Topic, TopicWithChildren } from '../../services/topic.model';

@Component({
  selector: 'app-main-topic',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './main-topic.component.html',
  styleUrls: ['./main-topic.component.scss']
})
export class MainTopicComponent {
  private _mainTopic!: TopicWithChildren;

  @Input()
  public set mainTopic(mainTopic: TopicWithChildren) {
    this._mainTopic = mainTopic;
    const activeTopic = mainTopic.topics[0];
    this.setActiveTopic(activeTopic);
    this.selectedTopic.emit(activeTopic);
  }

  public get mainTopic(): TopicWithChildren {
    return this._mainTopic;
  }

  @Output()
  public selectedTopic = new EventEmitter<Topic>();

  public activeTopic!: Topic;

  public setActiveTopic(topic: Topic): void {
    this.activeTopic = topic;
    this.selectedTopic.emit(topic);
  }
}
