import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards } from '@nestjs/common';
import { ToolService } from './tool.service';
import { ToolDto } from './tool.model';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth, ApiQuery, ApiHeader, ApiResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('tool')
@Controller('tool')
@UseGuards(AuthGuard('jwt'))
export class ToolController {
    constructor(private readonly service: ToolService) { }

    @ApiQuery({ name: 'tag', required: false })
    @ApiOkResponse({ status: 200, description: 'Ferramentas encontradas.', type: [ToolDto] })
    @Get()
    async findAll(@Query('tag') tag?: string): Promise<ToolDto[]> {
        const lista = this.service.findAll(tag);
        return lista;
    }

    @Post()
    @ApiOkResponse({ status: 201, description: 'Ferramenta cadastrada.', type: ToolDto })
    async create(@Body() tool: ToolDto): Promise<ToolDto> {
        return this.service.create(tool);
    }

    @Delete(':id')
    @ApiOkResponse({ status: 200, description: 'Ferramenta deletada.' })
    async delete(@Param('id') id: string) {
        this.service.delete(id);
    }
}
