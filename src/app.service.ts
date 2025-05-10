import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      "name":"Shlok",
      "home":"Pune",
    };
  }
}
