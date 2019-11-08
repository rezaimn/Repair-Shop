import { Injectable } from '@angular/core';
import {EventEmitterService} from './event-emitter.service';

@Injectable()
export class AlertMessageService {

  constructor(private eventEmitterService:EventEmitterService) { }
  success(title,message){
    this.eventEmitterService.alertMessage.emit({type:'success',title:title,message:message});
  }
  fail(title,message){
    this.eventEmitterService.alertMessage.emit({type:'danger',title:title,message:message});
  }
  warn(title,message){
    this.eventEmitterService.alertMessage.emit({type:'warning',title:title,message:message});
  }
  info(title,message){
    this.eventEmitterService.alertMessage.emit({type:'info',title:title,message:message});
  }

}
