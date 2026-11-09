import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { ServiceModal } from './service-modal';


@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ RouterOutlet, NgComponentOutlet, AsyncPipe ],
})
export class App
{
    public readonly modal = inject(ServiceModal);
}
