import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

import { Topic } from '../../services/archive.model';
import { ArchiveService } from '../../services/archive.service';
import { FiltersComponent } from '../filters';
import { TopicComponent } from '../topic';
import { MainTopicComponent } from '../main-topic';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule, FiltersComponent, MainTopicComponent, TopicComponent],
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnDestroy, OnInit {
  private _destroy$ = new Subject<void>();

  public mainTopic: Topic = {
    name: '',
    topics: []
  };

  public selectedTopic!: Topic;

  public selectedView = 'grid';

  public constructor(private _archiveService: ArchiveService) {}

  public ngOnInit(): void {
    this._archiveService
      .getArchive('regions')
      .pipe(takeUntil(this._destroy$))
      .subscribe(archive => {
        this.mainTopic = archive.main;
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
