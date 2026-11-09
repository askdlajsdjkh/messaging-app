import { Service, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Service()
export class ServiceModal
{
    public component$ = new BehaviorSubject<Type<any> | null>(null);

    public showModal(c: Type<any> | null)
    {
        this.component$.next(c);
    }

    public hideModal()
    {
        this.component$.next(null);
    }
}
