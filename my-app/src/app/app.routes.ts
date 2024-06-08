import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DemoTestsComponent } from './pages/demo-tests/demo-tests.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DemoTestPageComponent } from './pages/demo-test-page/demo-test-page.component';
import { DemoTestQuestionsComponent } from './pages/demo-test-questions/demo-test-questions.component';

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'demo-tests', component: DemoTestsComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'demo-tests/:id', component: DemoTestPageComponent},
  {path: 'demo-tests/:id/quest', component: DemoTestQuestionsComponent}
];
