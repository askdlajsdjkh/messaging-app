import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ServiceAuth } from '../service-auth';


@Component({
    selector: 'app-chats-room',
    imports: [ RouterOutlet ],
    templateUrl: './chats-room.html',
    styleUrl: './chats-room.css',
})
export class ChatsRoom
{
    private readonly router = inject(Router);
    public readonly auth = inject(ServiceAuth);


    public navigateToCreateChat()
    {
        this.router.navigate([ '/chatsRoom/create' ]);
    }

    public navigateToJoinChat()
    {
        this.router.navigate([ '/chatsRoom/join' ]);
    }
}
