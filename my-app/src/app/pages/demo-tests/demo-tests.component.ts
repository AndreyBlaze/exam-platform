import { Component, computed, inject, signal } from '@angular/core';
import { DemoTest, DemoTestFilter, SimpleDemoTest } from '../../types/DemoTest';
import { Subject, combineLatest, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { DemoTestsService } from '../../services/demo-tests.service';
import { Item } from '../../types/Item';
import { DemoTestComponent } from "../../components/demo-test/demo-test.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-demo-tests',
    standalone: true,
    templateUrl: './demo-tests.component.html',
    styleUrl: './demo-tests.component.scss',
    imports: [DemoTestComponent, CommonModule, FormsModule]
})
export class DemoTestsComponent {
  demoTestsService = inject(DemoTestsService);

  data = signal<SimpleDemoTest[]>([]);
  total = computed(() => this.data().length);

  // items = signal<Item[]>([]);
  items = signal(['Математика', 'География']);
  showItems = signal(false);

  currentOrder = signal<'asc' | 'desc'>('desc');

  filter = signal<DemoTestFilter>({
    type: "ОГЭ",
    itemId: 'f280b883-8985-4a7a-a9f8-6a778b720ffb',
    search: 'гео'
  }); 

  types = ['ОГЭ', 'ЕГЭ'];

  searchDebouncer$ = new Subject();
  search = '';

  destroy$ = new Subject<void>();

  constructor() {
    this.demoTestsService.getAllDemoTests(this.filter()).pipe(takeUntil(this.destroy$)).subscribe(res => {
      console.log(res)
    });
    this.searchDebouncer$.pipe(distinctUntilChanged(), debounceTime(600)).subscribe(val => {
      this.filter.update(value => {
        return {...value, search: val} as DemoTestFilter;
      })
    })
  }

  sortTests(order: 'asc' | 'desc') {
    this.currentOrder.set(order);
    this.data.update(values => {
      return [...values.sort((a, b) => order === 'asc' ? a.dateCreated.localeCompare(b.dateCreated) : b.dateCreated.localeCompare(a.dateCreated))];
    })
  }

  setItem(item: Item) {
    this.filter.update(value => {
      return {...value, itemId: item.id}
    });
    this.showItems.set(false);
  }
}
