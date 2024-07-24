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
import { ReporteService } from './reporte.service';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';

@Controller('reporte')
export class ReporteController {
  constructor(private reporteService: ReporteService) {}

  @Post()
  create(@Body() reporte: CreateReporteDto) {
    return this.reporteService.create(reporte);
  }

  @Get()
  gets() {
    return this.reporteService.gets();
  }

  @Get(':uuid')
  get(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.reporteService.getByUUID(uuid);
  }

  @Delete(':uuid')
  delete(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.reporteService.delete(uuid);
  }

  @Patch(':uuid')
  update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() reporte: UpdateReporteDto
  ) {
    return this.reporteService.update(uuid, reporte);
  }
}
