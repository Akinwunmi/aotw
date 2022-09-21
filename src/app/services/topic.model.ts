export interface TopicsResponse {
  topics: Topic[];
}

export interface Topic {
  id: number;
  name: string;
  type: string;
  archiveId: number;
  topicId?: number;
}

export interface TopicWithChildren {
  name: string;
  topics: Topic[];
}
