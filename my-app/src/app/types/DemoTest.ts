import { DemoTestQuestion } from "./DemoTestQuestion";

export type DemoTest = {
  id: string;
  title: string;
  description: string;
  instruction: string;
  timeToComplete: number;
  type: string;
  color: string;
  itemId: string;
  dateCreated: string;
  questions: DemoTestQuestion[];
}

export type SimpleDemoTest = {
  id: string;
  title: string;
  color: string;
  questionsCount: number;
  dateCreated: string;
}

export type DemoTestFilter = {
  type: string;
  itemId: string | null;
  search: string | null;
}