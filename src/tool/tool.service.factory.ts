import { ToolDto } from "./tool.model";

export const ToolMock: ToolDto[] = [
    { title: 'titulo', link: 'link', description: 'descricao', tags: ['tag'] },
    { title: 'titulo', link: 'link', description: 'descricao', tags: ['tag2'] },
];

export class ToolServiceFactory {

    findAll(tag: string) {
        if (tag) {
            if (tag === 'tag')
                return ToolMock[0];
            else
                return [];
        }

        return ToolMock;
    }

    create(dto: ToolDto): ToolDto {
        return { title: 'titulo', link: 'link', description: 'descricao', tags: ['tag'] };
    }

    delete(id: string) {

    }

}
