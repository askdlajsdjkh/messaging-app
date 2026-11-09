import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCreateForm } from './chat-create-form';


describe('ChatCreateForm', () =>
{
    let component: ChatCreateForm;
    let fixture: ComponentFixture<ChatCreateForm>;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [ChatCreateForm],
        }).compileComponents();

        fixture = TestBed.createComponent(ChatCreateForm);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });


    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});
