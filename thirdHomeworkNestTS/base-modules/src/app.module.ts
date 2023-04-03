import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserRoles } from "./linkingTables/user-roles.model";
import { Role } from "./roles/roles.model";
import { RolesModule } from "./roles/roles.module";
import { User } from "./users/users.model";
import { UsersModule } from "./users/users.module";
import { AuthModule } from './auth/auth.module';
import { BlocksModule  } from './textBlocks/blocks.module';
import { TextBlock } from "./textBlocks/blocks.model";
import { UploadFolderModule } from './upload-folder-module/upload-folder.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { ProfilesModule } from './profiles/profiles.module';
import * as path from 'path';
import { Profile } from "./profiles/profiles.model";
import { DatabaseFilesModule } from "./databaseFiles/files.module";
import {DatabaseFile} from "./databaseFiles/files.model";
import { TokensModule } from './tokens/tokens.module';

@Module( { // controllers, providers, exports, imports
    providers: [],
    imports: [ 
        ConfigModule.forRoot( { // .dev.env or .prod.env with "cross-env NODE_ENV=" in {scripts}
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot( {// for using database
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,

          models: [User, Role, UserRoles, TextBlock, Profile, DatabaseFile],
          autoLoadModels: true // to auto-create tables
        }),
        AuthModule,
        DatabaseFilesModule,
        UploadFolderModule,
        BlocksModule,
        ProfilesModule,
        RolesModule,
        UsersModule,
        ServeStaticModule.forRoot( {
          rootPath: path.resolve(__dirname, 'static'),

        }),
        TokensModule
      ],
})
export class AppModule {

}