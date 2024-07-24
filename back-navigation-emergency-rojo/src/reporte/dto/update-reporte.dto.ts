import { IsDate, IsNumber, IsString } from 'class-validator';
export class UpdateReporteDto {
  @IsDate()
  fecha_reporte?: Date;

  @IsString()
  tipo_emergencia?: string;

  @IsNumber()
  latitud?: number;

  @IsNumber()
  longitud?: number;

  @IsString()
  descripcion?: string;
}
