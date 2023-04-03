/*  #1. nest new project-name + delete linters, src, test
    #2. for database installing:
      1) $ npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2
      2) $ npm install --save-dev @types/sequelize 
      3) npm install --save pg pg-hstore # Postgres
    #3. create separate submodules:
      1) create dir users
      2) nest generate module users
      3) nest generate controller users
      4) nest generate service users
      5) checking imports app.module !!! UsersModule must be there !!!
      6) delete unusable .spec. files 
    #4. npm install @nestjs/config
    #5. npm install cross-env
    #6. create files: .development.env &&& .production.env
    #7. at the package.json update commands start &&& start:dev :
        cross-env NODE_ENV=production nest start &&& cross-env NODE_ENV=development nest start --watch
    #8. create file users.model.ts
    #9. add imports to users.module.ts == [ SequelizeModule.forFeature([User]) ]
    #10 for documenting REST API I need to install 'npm install @nestjs/swagger swagger-ui-express'
    #11 create block config & document & setup there
    #12 use decorators  @ApiOperation & @ApiResponse in the controller
    #13 use decorator @ApiProperty in the model
    #14 npm install @nestjs/jwt bcryptjs
    #15 add to auth.module.imports JwtModule (import {JwtModule} from '@nestjs/jwt';)
    #16 create src/pipes/validation.pipe.ts
    #16 npm install class-validator class-transformer
    #17 create src/exceptions
    #18  npm install uuid
    #19 npm install --save @nestjs/serve-static

    */ 
 
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { ValidationPipe } from "./pipes/validation.pipe";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)  
    // ( need a module, create that in file app.module.ts )

    const config = new DocumentBuilder()
        .setTitle('Backend lesson')
        .setDescription('REST API docs')
        .setVersion('1.0.0')
        .addTag('Hotels.ru & ULBI TV')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    // app.useGlobalGuards(JwtAuthGuard); // global auth guard
    // app.useGlobalPipes(new ValidationPipe()); //global pipe


    await app.listen(PORT, () => console.log(`Server started on PORT ${PORT}...`))
}

start()