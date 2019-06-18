import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
    show: Subject<boolean> = new Subject();
    message = new Subject<any>();

    constructor(private _ngZone: NgZone) {      
        
    }

    showMessage(message: string) {
        this.show.next(true);
        this.message.next(message);
        this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
                this._ngZone.run(()=> {
                    this.show.next(false);
                });
            }, 5000 );
        });
    }

    hideMessage() {
        this.show.next(false);
    }

}
