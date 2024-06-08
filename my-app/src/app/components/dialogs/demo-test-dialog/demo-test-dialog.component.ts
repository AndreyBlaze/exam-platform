import { Component, inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog'
import { DialogData } from '../../../types/DialogData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-test-dialog',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './demo-test-dialog.component.html',
  styleUrl: './demo-test-dialog.component.scss'
})
export class DemoTestDialogComponent {
  data: DialogData = inject(MAT_DIALOG_DATA);
}
