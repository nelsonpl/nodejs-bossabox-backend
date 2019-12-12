import { AppController } from './app.controller';
import { AppService } from './app.service';
import { api } from './api';
import { UserService } from './user/user.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const appService = new AppService();
    appController = new AppController(appService);

  });

  describe('root', () => {
    it('should return "Desafio BossaBox - Dev. Back-End - 1.0.0"', () => {
      expect(appController.getStatus()).toBe(api);
    });
  });
});
