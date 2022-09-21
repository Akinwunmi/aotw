import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin, map, Subject, takeUntil } from 'rxjs';

import { ArchiveService } from '../../services/archive.service';
import { Topic, TopicWithChildren } from '../../services/topic.model';
import { TopicService } from '../../services/topic.service';
import { FiltersComponent } from '../filters';
import { MainTopicComponent } from '../main-topic';
import { TopicComponent } from '../topic';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule, FiltersComponent, MainTopicComponent, TopicComponent],
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnDestroy, OnInit {
  private _destroy$ = new Subject<void>();

  public mainTopic: TopicWithChildren = {
    name: '',
    topics: []
  };

  public selectedTopic!: Topic;

  public selectedView = 'grid';

  public constructor(
    private _archiveService: ArchiveService,
    private _topicService: TopicService
  ) {}

  public ngOnInit(): void {
    const archive$ = this._archiveService.getArchive(5);
    const topics$ = this._topicService.getTopics();
    forkJoin([archive$, topics$])
      .pipe(
        map(([archive, topics]) => {
          const topicsInArchive = topics.filter(
            topic => topic.archiveId === archive.id && !topic.topicId
          );
          return { name: archive.mainTopicsType, topics: topicsInArchive } as TopicWithChildren;
        }),
        takeUntil(this._destroy$)
      )
      .subscribe(mainTopic => {
        this.mainTopic = mainTopic;
      });
  }

  public setTopic(topic: Topic): void {
    this.selectedTopic = topic;
  }

  public setView(view: string): void {
    this.selectedView = view;
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
