import { uuid } from 'uuidv4';
import { IsString, IsDate, IsUUID, IsNumber } from 'class-validator';
import { } from '@nestjs/typeorm';
export class CreateReporteDto {
  @IsUUID()
  id = uuid();

  @IsDate()
  fecha_reporte: Date;

  @IsString()
  tipo_emergencia: string;

  @IsNumber()
  latitud: number;

  @IsNumber()
  longitud: number;

  @IsString()
  descripcion: string;

  @IsUUID()
  embarcacionId: string;

  @IsUUID()
  alertaId: string;
}