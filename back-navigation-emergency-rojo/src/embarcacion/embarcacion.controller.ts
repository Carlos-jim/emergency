import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { EmbarcacionService } from './embarcacion.service';
import { Embarcacion } from './embarcacion.entity';
import { CreateEmbarcacionDto } from './dto/create-embarcacion.dto';
import { UpdateEmbarcacionDto } from './dto/update-embarcacion.dto';

@Controller('embarcacion')
export class EmbarcacionController {
  constructor(private embarcacionService: EmbarcacionService) {}

  //Registrar una embarcacion
  @Post()
  create(@Body() newEmbarcacion: CreateEmbarcacionDto) {
    return this.embarcacionService.create(newEmbarcacion);
  }

  //Listar todas las embarcaciones registrada en la DB
  @Get()
  gets(): Promise<Embarcacion[]> {
    return this.embarcacionService.gets();
  }

  //Obtener una embarcacion por un UUID
  @Get(':uuid')
  getByUUID(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.embarcacionService.getByUUID(uuid);
  }

  //Eliminar una embarcacion por un UUID
  @Delete(':uuid')
  delete(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.embarcacionService.delete(uuid);
  }

  //Actualizar una embarcacion por un UUID (No es necesario actualizar obligatoriamente todos los campos)
  @Patch(':uuid')
  update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() embarcacion: UpdateEmbarcacionDto
  ) {
    return this.embarcacionService.update(uuid, embarcacion);
  }
}
