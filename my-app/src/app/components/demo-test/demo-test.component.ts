import { Component, Input } from '@angular/core';
import { DemoTest, SimpleDemoTest } from '../../types/DemoTest';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-test',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './demo-test.component.html',
  styleUrl: './demo-test.component.scss'
})
export class DemoTestComponent {
  @Input() test!: SimpleDemoTest;
}
