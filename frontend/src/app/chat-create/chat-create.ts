import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { disallowCharactersValidator } from '../custom-validators';
import { ErrorMessages } from '../error-messages';
import { AsyncPipe } from '@angular/common';
import { Chats } from '../chats';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'app-chat-create',
    imports: [ AsyncPipe, ReactiveFormsModule ],
    templateUrl: './chat-create.html',
    styleUrl: './chat-create.css',
})
export class ChatCreate
{
    private readonly chats = inject(Chats);

    public form = new FormGroup({
        chatName: new FormControl('', [ Validators.required, disallowCharactersValidator(/\s/i) ]),
    });

    public errlogs = new ErrorMessages()


    public onSubmit()
    {
        if (this.form.controls.chatName.invalid)
        {
            this.errlogs.new('Please, provide valid chat name.');
            return;
        }

        this.chats.addNewChat(this.form.value.chatName!).subscribe({
            complete: () =>
            {
                this.errlogs.clear();
                //this.router.navigate([ '/' ]);
            },
            error: (err) =>
            {
                if (err instanceof HttpErrorResponse && err.statusText)
                {
                    this.errlogs.new(err.statusText);
                }
                else
                {
                    console.debug(err);
                    this.errlogs.new('Unknown error occured.');
                }
            },
        });
    }
}
