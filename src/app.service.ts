import { Injectable } from '@nestjs/common';
import { api } from './api';

@Injectable()
export class AppService {
  getStatus() {
    return api;
  }
}
