import {
  IsString,
  IsArray,
  IsOptional,
  IsBoolean,
  IsUrl,
} from 'class-validator';

export class CreateProjectDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  short_description: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsArray()
  @IsString({ each: true }) // Checkt of elk item in de array een string is
  tags: string[];

  @IsBoolean()
  @IsOptional()
  is_featured?: boolean;

  @IsUrl()
  @IsOptional()
  github_url?: string;
}
