import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
    selector: 'app-chat-body',
    imports: [ AsyncPipe, ReactiveFormsModule ],
    templateUrl: './chat-body.html',
    styleUrl: './chat-body.css',
})
export class ChatBody implements OnInit
{
    public form = new FormGroup({
        text: new FormControl('', []),
    });


    public ngOnInit()
    {
        // this.messagesService.messages$.subscribe((val) =>
        // {
        //     this._messagesState.push(val);
        //     this.messages$.next(this._messagesState);
        // });
    }

    public onSubmit()
    {
        //
    }
}
