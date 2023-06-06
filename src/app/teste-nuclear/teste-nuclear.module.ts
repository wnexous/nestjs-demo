import { Module } from '@nestjs/common';
import { TesteNuclearController } from './teste-nuclear.controller';
import { TesteNuclearService } from './teste-nuclear.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './entity/teste.entity';

@Module({
  controllers: [TesteNuclearController],
  providers: [TesteNuclearService],
  exports: [TesteNuclearService],
  imports: [TypeOrmModule.forFeature([Usuarios])],
})
export class TesteNuclearModule {}
