import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserRoles } from "./linkingTables/user-roles.model";
import { Role } from "./roles/roles.model";
import { RolesModule } from "./roles/roles.module";
import { User } from "./users/users.model";
import { UsersModule } from "./users/users.module";

// delete that imports because we will decompose the system into the separate submodules

// import { AppController } from "./app.controller";
// import { AppService } from "./demo/app.service";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';


@Module( { // controllers, providers, exports, imports
    controllers: [], // [AppController] and create file app.controller.ts 

    //(then delete it, it's won't be useful because we will decompose the system into separate submodules !!!)

    providers: [], // [AppService] and create file app.service.ts (then delete it, it's won't be useful...)


    imports: [ 
        ConfigModule.forRoot( { // that's mean that vars in .env
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot( {// for using database
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          models: [User, Role, UserRoles, Post],
          autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
        ServeStaticModule.forRoot( {
          rootPath: path.resolve(__dirname, 'static')
        })
      ],
})
export class AppModule {

}