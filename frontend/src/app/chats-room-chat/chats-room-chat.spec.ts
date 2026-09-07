import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsRoomChat } from './chats-room-chat';

describe('ChatsRoomChat', () => {
  let component: ChatsRoomChat;
  let fixture: ComponentFixture<ChatsRoomChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatsRoomChat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsRoomChat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
