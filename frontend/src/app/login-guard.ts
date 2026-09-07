import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { ServiceAuth } from './service-auth';


export const loginGuard: CanActivateFn = (route, state) =>
{
    const router = inject(Router);
    const auth = inject(ServiceAuth);

    if (auth.isLoggedIn())
    {
        return true;
    }

    return new RedirectCommand(router.parseUrl('/login'), {
        skipLocationChange: true,
    });
};
