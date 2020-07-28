export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './shoesController.service';
import { ShoesControllerService } from './shoesController.service';
export * from './usuarioController.service';
import { UsuarioControllerService } from './usuarioController.service';
export const APIS = [BasicErrorControllerService, ShoesControllerService, UsuarioControllerService];
