import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Topic } from '../../services/archive.model';
import { ArchiveService } from '../../services/archive.service';
import { FiltersComponent } from '../filters';
import { TopicComponent } from '../topic';
import { MainTopicComponent } from '../main-topics';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [
    CommonModule,
    FiltersComponent,
    MainTopicComponent,
    TopicComponent
  ],
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent {
  public mainTopic!: Topic;

  constructor(private archiveService: ArchiveService) { }

  ngOnInit(): void {
    this.archiveService.getArchive('regions').subscribe(archive => {
      this.mainTopic = archive.main;
    });
  }
}
