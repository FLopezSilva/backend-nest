import { Controller, Get, Query } from '@nestjs/common';
import { OperacionesService } from './operaciones.service';

@Controller('operaciones')
export class OperacionesController {

    constructor(private readonly openService: OperacionesService){}

    @Get()
    operar(
        @Query('operacion') operacion: string,
        @Query('a') a: number,
        @Query('b') b: number
    ):{resultado: number, mensaje: string}
    {
       const calculo = this.openService.operar(operacion, +a , +b);
       if (calculo){
        return {resultado: calculo , mensaje: 'Operacion Exitosa'}
       }
       return {resultado: NaN , mensaje : 'Operacion no pudo  ser calculada'}

    }
    
}
