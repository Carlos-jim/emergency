import { IsString, IsDate, IsNumber } from 'class-validator';
export class UpdateEmbarcacionDto {
  @IsString()
  nombre?: string;

  @IsString()
  tipo_embarcacion?: string;

  @IsString()
  tipo_material?: string;

  @IsNumber()
  capacidad_maxima?: number;

  @IsNumber()
  peso_embarcacion?: number;

  @IsDate()
  fecha_fabricacion?: Date;

  @IsNumber()
  cantidad_motor?: number;
}
