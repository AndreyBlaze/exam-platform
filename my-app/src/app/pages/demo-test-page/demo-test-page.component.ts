import { Component, Inject, inject, signal } from '@angular/core';
import { DemoTest } from '../../types/DemoTest';
import { DemoTestsService } from '../../services/demo-tests.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DemoTestDialogComponent } from '../../components/dialogs/demo-test-dialog/demo-test-dialog.component';
import { DialogData } from '../../types/DialogData';

@Component({
  selector: 'app-demo-test-page',
  standalone: true,
  imports: [RouterModule, MatDialogModule],
  templateUrl: './demo-test-page.component.html',
  styleUrl: './demo-test-page.component.scss'
})
export class DemoTestPageComponent {
  demoTestsService = inject(DemoTestsService);
  dialog = inject(MatDialog);
  router = inject(Router);

  demoTest = signal<DemoTest | null>(null);
  demoTestId = this.aroute.snapshot.params['id'];

  data: DialogData = {
    title: 'Инструкция к тесту «ОГЭ. География. 2023. Вариант 2»',
    desc: 'Экзаменационная работа состоит из 30 заданий. На выполнение работы по географии отводится 2,5 часа (150 минут). Ответы к заданиям 1, 4, 5, 6, 11, 16–18 записываются в виде одной цифры, которая соответствует номеру правильного ответа. Эту цифру запишите в поле ответа в тексте работы, а затем перенесите в бланк ответов № 1. Ответы к заданиям 2, 3, 7–10, 13–15, 19–27, 30 записываются в виде числа, слова (словосочетания) или последовательности цифр. Если ответ на задание имеет единицу измерения, то при переносе ответа на бланк следует записать только полученное число. Единицы измерения в ответе указывать не надо.Все бланки заполняются яркими чёрными чернилами. Допускается использование гелевой или капиллярной ручки. При выполнении заданий можно пользоваться черновиком. Записи в черновике, а также в тексте контрольных измерительных материалов не учитываются при оценивании работы. Баллы, полученные вами за выполненные задания, суммируются. Постарайтесь выполнить как можно больше заданий и набрать наибольшее количество баллов. После завершения работы проверьте, чтобы ответ на каждое задание в бланках ответов № 1 и № 2 был записан под правильным номером.',
    actions: [
      {
        text: 'Ясно, начать тест',
        returnType: true,
        main: true
      }
    ]
  }

  constructor(private aroute: ActivatedRoute) {
    this.demoTestsService.getDemoTestById(this.demoTestId).subscribe(res => {
      this.demoTest.set(res);
    });
  }

  start() {
    this.dialog.open(DemoTestDialogComponent, {
      data: this.data
    })
  }
}
