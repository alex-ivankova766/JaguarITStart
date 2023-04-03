import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Profile } from './profiles.model';
import { ProfilesService } from './profiles.service';
import { SelfAdminGuard } from 'src/auth/guards/self-guard';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { json } from 'sequelize';

@ApiTags('Profile')
@Controller('profiles')
export class ProfilesController {
    constructor(private profileService: ProfilesService
        ) {}
    
    @ApiOperation({summary: 'Registration'})
    @ApiResponse({status: 200, type: json})
    @Post('/registration')
    registration(@Body() profileDTO: CreateProfileDto) {
        return this.profileService.registration(profileDTO)
    }

    @ApiOperation({summary: 'Get all profiles (Authorized users only)'})
    @ApiResponse({status: 200, type: [Profile]})
    @UseGuards(AuthGuard)
    @Get()
    getAllProfiles() {
        return this.profileService.getAllProfiles();
    }

    @ApiOperation({summary: 'Update profile (Userself or admin only)'})
    @ApiResponse({status: 200, type: [Profile]})
    @UseGuards(SelfAdminGuard)
    @Post('/update')
    updateProfile(@Body() dto: UpdateProfileDto) {
        return this.profileService.updateProfile(dto);
    }

    @ApiOperation({summary: 'Delete profile (Userself or admin only)'})
    @ApiResponse({status: 200, type: [Profile]})
    @UseGuards(SelfAdminGuard)
    @Delete('/delete/:id')
    deleteProfile(@Param('id') id: number) {
        return this.profileService.deleteProfile(id);
    }
}