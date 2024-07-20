import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class userDto {
  @IsString()
  @MinLength(3, {
    message: 'name is too short',
  })
  @MaxLength(10, {
    message: 'name is too long',
  })
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MinLength(8, {
    message: 'password is too short',
  })
  @MaxLength(50, {
    message: 'password is too long',
  })
  @IsNotEmpty()
  readonly password: string;
}
