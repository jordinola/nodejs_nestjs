export class UpdateProfileDto {
  name: string;
  description: string;
}

export class UpdateProfileResponseDto extends UpdateProfileDto {
  id: string;
}
