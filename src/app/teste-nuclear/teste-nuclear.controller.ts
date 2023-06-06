import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TesteNuclearService } from './teste-nuclear.service';
import { Usuarios } from './entity/teste.entity';

@Controller('teste-nuclear')
export class TesteNuclearController {
  constructor(private readonly dbService: TesteNuclearService) {}
  //   @Get()
  //   getTest(@Query() query: { name: string }): string {
  //     return 'Feijaozinho' + query.name;
  //   }

  @Get()
  async index() {
    console.log('caiu aqui1');
    return this.dbService.searchAll();
  }

  @Post()
  create(@Body() body: Usuarios) {
    return this.dbService.create(body);
  }

  @Get(':id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    console.log('caiu aqui2');
    return await this.dbService.searchByIdOrFail(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', new ParseUUIDPipe()) id: string) {
    this.dbService.deletebyId(id);
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: Usuarios,
  ) {
    return await this.dbService.updateById(id, data);
  }
}
