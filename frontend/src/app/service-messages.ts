import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';


interface WSMessage {
    username: string;
    text: string;
    timestamp: number;
}

interface ChatMessage extends WSMessage {
    type : 'message';
}
interface ChatError {
    type : 'error';
    text: string;
    timestamp: number;
}

type ChatContent = ChatMessage | ChatError;


@Injectable()
export class ServiceMessages
{
    private readonly http = inject(HttpClient);
    private ws$: WebSocketSubject<WSMessage> | null = null;

    public readonly messages$ = new ReplaySubject<ChatContent>();


    public connect(chatId: string)
    {
        const token = localStorage.getItem('jwttoken');
        if (token === null)
        {
            throw new Error('Cannot get JWT token from localStorage.');
        }

        this.ws$ = webSocket(`ws://${window.location.hostname}:8080?token=${token}&chatId=${chatId}`);
        this.ws$.subscribe({
            next: (val) =>
            {
                this.messages$.next({
                    type: 'message',
                    ...val,
                });
            },
            error: (err) =>
            {
                let errMessage: string;

                if (err instanceof Error)
                {
                    errMessage = err.message;
                }
                else
                {
                    errMessage = String(err)
                }

                this.messages$.next({
                    type: 'error',
                    text: errMessage,
                    timestamp: Date.now(),
                });
            },
        });
    }


    /** Sends message. */
    public send(message: string)
    {
        //
    }
}
