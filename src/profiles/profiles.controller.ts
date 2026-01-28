import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import {
  UpdateProfileDto,
  UpdateProfileResponseDto,
} from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
  @Get()
  findAll(@Query('location') location: string) {
    return [{ location }];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    } satisfies CreateProfileDto;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return {
      id: id,
      name: updateProfileDto.name,
      description: updateProfileDto.description,
    } satisfies UpdateProfileResponseDto;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {}
}
