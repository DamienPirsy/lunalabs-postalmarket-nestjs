import { IsString, IsNotEmpty, MaxLength} from 'class-validator';

export class CreateCategoryDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly label: string;

  @IsString()
  @MaxLength(255)
  readonly description: string;

  readonly status: boolean;  
}