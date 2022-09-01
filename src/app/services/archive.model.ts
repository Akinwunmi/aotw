export interface Archive {
  main: Topic;
}

export interface Topic {
  name: string;
  topics: Topic[];
}
