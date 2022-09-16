export interface ArchivesResponse {
  archives: AvailableArchive[];
}

export interface AvailableArchive {
  id: number;
  name: string;
}

export interface Archive {
  main: Topic;
}

export interface Topic {
  name: string;
  topics: Topic[];
}
