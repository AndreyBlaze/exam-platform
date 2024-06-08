import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { DemoTest, DemoTestFilter, SimpleDemoTest } from '../types/DemoTest';

@Injectable({
  providedIn: 'root'
})
export class DemoTestsService extends BaseService {

  constructor() {
    super();
  }

  public getAllDemoTests(filter: DemoTestFilter) {
    let url = `${this.baseUrl}/api/tests?type=${filter.type}`;

    if (filter.itemId) url += `&itemId=${filter.itemId}`;
    if (filter.search) url += `&search=${filter.search}`;
    
    return this.http.get<SimpleDemoTest[]>(url);
  }

  public getDemoTestById(id: string) {
    return this.http.get<DemoTest>(`${this.baseUrl}/api/tests/${id}`);
  }
}
