import {Injectable} from '@angular/core';
import {ToastController} from 'ionic-angular';

@Injectable()
export class ToastService{

    constructor(private toastCtrl: ToastController){

        
    }
    show(message: string, duration: number = 3000){

        return this.toastCtrl.
        create({
            message,
            duration
        })
        .present()
    }


    // why do this in a service?
    //may want a different toast controller based on the environment
    //may also not want to instantiate the toast controller
}