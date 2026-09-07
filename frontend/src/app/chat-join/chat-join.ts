import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessages } from '../error-messages';


@Component({
    selector: 'app-chat-join',
    imports: [ AsyncPipe, ReactiveFormsModule ],
    templateUrl: './chat-join.html',
    styleUrl: './chat-join.css',
})
export class ChatJoin
{
    public form = new FormGroup({
        chatName: new FormControl('', [ Validators.required ]),
    });

    public errlogs = new ErrorMessages()


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
