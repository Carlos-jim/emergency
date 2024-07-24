import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { AlertaService } from './alerta.service';
import { Alerta } from './alerta.entity';
import { CreateAlertDto } from './dto/create-alert.dto';

@Controller('alerta')
export class AlertaController {
  constructor(private alertService: AlertaService) {}

  //Listar todas las alertas
  @Get()
  gets(): Promise<Alerta[]> {
    return this.alertService.gets();
  }

  //Registrar una alerta asociada a un UUID de embarcacion
  @Post(':uuid/embarcacion')
  createAlert(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() alerta: CreateAlertDto
  ) {
    return this.alertService.create(uuid, alerta);
  }
}
