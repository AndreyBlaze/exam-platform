import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

export class BaseService {
  protected http = inject(HttpClient);
  protected baseUrl = 'https://e231-176-115-145-69.ngrok-free.app';
}