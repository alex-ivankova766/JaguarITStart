This is a API with CRUD-methods, file-manager and JWT-authorization

The algorithm of writing: 

1. nest new project-name (-npm) + delete linters, src, test

2. create app.module.ts for const app = await NestFactory.create(AppModule) :
        imports:    .env,
                    database,
                    Modules,
                    path 'static'

3. for database installing:
      1 $ npm install --save @nestjs/sequelize sequelize sequelize-typescript
      2 $ npm install --save-dev @types/sequelize 
      3 npm install --save pg pg-hstore # Postgres

4. create separate submodules:
      1 create dir submodule
      2 nest generate module submodule
      3 nest generate controller submodule
      4 nest generate service submodule
      5 checking imports app.module !!! Module must be there !!!
      6 delete unusable .spec. files 

5.  1 npm install @nestjs/config

    2 npm install cross-env

    3 create files: .development.env &&& .production.env

    4 at the package.json update commands start &&& start:dev :
        cross-env NODE_ENV=production nest start &&& cross-env NODE_ENV=development nest start --watch

8. create file submodule.model.ts
        extends Model<sub, createSub>, this class describes columns and their properties for create

9.  add imports to submodule.module.ts == [ SequelizeModule.forFeature([Sub]) ]
    and to imports app.module

10. submodules.service.ts: 
        constructor(@InjectModel(Sub) private SubRepo: typeof Sub)
        create functions(dto: DTO)
        create file DTO 

10. submodules.controller.ts: 
        constructor(private SubService: SubService)
        create functions(@Body dto: DTO)
        return this.SubService.Func(dto)

11. for documenting REST API I need to install 'npm install @nestjs/swagger swagger-ui-express'

12. to config Swagger create block (config & document & setup) in 'main.ts'
        use decorators  @ApiOperation & @ApiResponse in the controller
        use decorator @ApiProperty in the model

13. Set all submodules, models, tables, injectedTables... 

14. npm install @nestjs/jwt bcryptjs

15. add to auth.module.imports JwtModule (import {JwtModule} from '@nestjs/jwt';)

16. create src/pipes/validation.pipe.ts

17. npm install class-validator class-transformer

18. create src/exceptions

19.  npm install uuid

20. npm install --save @nestjs/serve-static