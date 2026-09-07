import { BehaviorSubject } from 'rxjs';


export class ErrorMessages
{
    public messages$ = new BehaviorSubject<string | null>(null);


    public new(message?: string | null)
    {
        this.messages$.next(message ?? null);
    }

    public clear()
    {
        this.messages$.next(null);
    }
}
