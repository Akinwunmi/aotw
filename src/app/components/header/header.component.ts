import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AvailableArchive } from '../../services/archive.model';
import { ArchiveService } from '../../services/archive.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent implements OnDestroy, OnInit {
  @Input()
  public activeArchive?: string;

  private _destroy$ = new Subject<void>();

  public archives!: AvailableArchive[];

  public isArchiveMenuOpen = false;
  public isMainMenuOpen = false;

  public constructor(private _archiveService: ArchiveService) {}

  public ngOnInit(): void {
    this._archiveService
      .getArchives()
      .pipe(takeUntil(this._destroy$))
      .subscribe(archives => {
        this.activeArchive = archives.find(archive => archive.name === 'Regions')?.name;
        this.archives = archives;
      });
  }

  public toggleMenu(menu: 'archive' | 'main'): void {
    if (menu === 'archive') {
      this.isArchiveMenuOpen = !this.isArchiveMenuOpen;
      this.isMainMenuOpen = false;
    }
    if (menu === 'main') {
      this.isArchiveMenuOpen = false;
      this.isMainMenuOpen = !this.isMainMenuOpen;
    }
  }

  public setActiveArchive(archive: AvailableArchive): void {
    this.activeArchive = archive.name;
    this.isArchiveMenuOpen = false;
    this.isMainMenuOpen = false;
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
