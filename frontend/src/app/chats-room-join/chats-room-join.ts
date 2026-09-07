import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorMessages } from '../error-messages';


@Component({
    selector: 'app-chats-room-join',
    imports: [ AsyncPipe, ReactiveFormsModule ],
    templateUrl: './chats-room-join.html',
    styleUrl: './chats-room-join.css',
})
export class ChatsRoomJoin
{
    public form = new FormGroup({
        chatName: new FormControl('', [ Validators.required ]),
    });

    public errlogs = new ErrorMessages();


    public onSubmit()
    {
        if (this.form.controls.chatName.invalid)
        {
            this.errlogs.new('Please, provide valid chat name.');
            return;
        }

        // process joining to chat
    }
}
