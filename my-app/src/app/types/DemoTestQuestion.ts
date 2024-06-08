import { DemoTestQuestionAnswer } from "./DemoTestQuestionAnswer";

export type DemoTestQuestion = {
  id: string;
  demoTestId: string;
  question: string;
  order: number;
  answers: DemoTestQuestionAnswer[];
}