import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Juan',
      description: 'Lorem ipsum',
    },
    {
      id: randomUUID(),
      name: 'Tom',
      description: 'Lorem ipsum',
    },
    {
      id: randomUUID(),
      name: 'Rosa',
      description: 'Lorem ipsum',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.profiles.find((p) => p.id === id);
  }

  create(createProfileDto: CreateProfileDto) {
    const newProfile = {
      id: randomUUID(),
      ...createProfileDto,
    };
    this.profiles.push(newProfile);
    return newProfile;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const profile = this.profiles.find((p) => p.id === id);

    if (!profile) return {};

    profile.name = updateProfileDto.name;
    profile.description = updateProfileDto.description;

    return profile;
  }

  remove(id: string) {
    const profileIndex = this.profiles.findIndex((p) => p.id === id);

    if (profileIndex < 0) return {};

    this.profiles.splice(profileIndex, 1);
  }
}
