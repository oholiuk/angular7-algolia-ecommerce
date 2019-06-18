import { Component, OnInit } from '@angular/core';
import { MessageService } from '../_core/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
    show: boolean = false;
    message: string;

    constructor(private messageService: MessageService) { }

    ngOnInit(): void {
        this.messageService.show.subscribe(val => {
            this.show = val;
        });

        this.messageService.message.subscribe(val => {
            this.message = val;
        });


    }
}
