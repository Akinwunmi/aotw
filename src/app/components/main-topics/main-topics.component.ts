import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Topic } from '../../services/archive.model';
import { ArchiveService } from '../../services/archive.service';

@Component({
  selector: 'app-main-topics',
  standalone: true,
  imports: [ CommonModule, HttpClientModule ],
  templateUrl: './main-topics.component.html',
  styleUrls: ['./main-topics.component.scss']
})
export class MainTopicsComponent implements OnInit {
  public mainTopicsName = '';
  public mainTopics!: Topic[];

  constructor(private archiveService: ArchiveService) { }

  ngOnInit(): void {
    this.archiveService.getArchive('regions').subscribe(archive => {
      this.mainTopicsName = archive.main.name;
      this.mainTopics = archive.main.topics;
    });
  }
}
