import { Controller, Get, Query } from '@nestjs/common';

@Controller('teste-nuclear')
export class TesteNuclearController {
  constructor() {}
  @Get()
  getTest(@Query() query: { name: string }): string {
    return 'Feijaozinho' + query.name;
  }
}
