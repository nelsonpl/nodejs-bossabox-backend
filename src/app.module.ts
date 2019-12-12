import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './environments/environment';
import { ToolModule } from './tool/tool.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot(environment.dataBaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }),
    AuthModule,
    ToolModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
