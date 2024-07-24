import { uuid } from 'uuidv4';
import { IsUUID, IsString } from 'class-validator';

export class CreateAlertDto {
  @IsUUID()
  id = uuid();

  @IsString()
  descripcion: string;
}
