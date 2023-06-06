import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TesteNuclearModule } from './app/teste-nuclear/teste-nuclear.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get('DB_HOST'),
        port: Number(configService.get('DB_PORT', '3306')),
        username: configService.get('DB_USERNAME', 'root'),
        password: configService.get('DB_PASSWORD', 'thisisnotapassword'),
        database: configService.get('DB_DATABASE', 'db'),
        entities: [],
        synchronize: true,
      }),
    }),
    TesteNuclearModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
