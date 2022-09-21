export interface ArchivesResponse {
  archives: Archive[];
}

export interface ArchiveResponse {
  archive: [Archive];
}

export interface Archive {
  id: number;
  mainTopicsType: string;
  name: string;
}

export interface Topic {
  name: string;
  topics: Topic[];
}
