export type Priority = 'Low' | 'Medium' | 'High';
export type FilterType = 'All' | 'Completed' | 'Incomplete';
export type SortType = 'Title' | 'Priority';

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  completed: boolean;
}
