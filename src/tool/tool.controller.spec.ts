import { Test, TestingModule } from '@nestjs/testing';
import { ToolController } from './tool.controller';
import { ToolService } from './tool.service';
import { ToolServiceFactory, ToolMock } from './tool.service.factory';

describe('Tool Controller', () => {
  let controller: ToolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToolController],
      providers: [
        {
          provide: ToolService,
          useClass: ToolServiceFactory,
        },]
    }).compile();

    controller = module.get<ToolController>(ToolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('testando buscar...', async () => {
    expect(await controller.findAll()).toStrictEqual(ToolMock);

  });

  it('testando buscar por tag...', async () => {
    const value = ToolMock[0];
    expect(await controller.findAll('tag')).toStrictEqual(value);
  });

  it('testando buscar por tag que não existe...', async () => {
    expect(await controller.findAll('tag-2')).toStrictEqual([]);
  });

  it('testando cadastrar...', async () => {
    const value = ToolMock[0];
    expect(await controller.create(value)).toStrictEqual(value);
  });

  it('testando excluir...', async () => {
    const id = 'id';
    expect(await controller.delete(id)).toBe(undefined);
  });
});
