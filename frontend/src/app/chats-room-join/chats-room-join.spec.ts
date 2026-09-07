import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsRoomJoin } from './chats-room-join';

describe('ChatsRoomJoin', () => {
  let component: ChatsRoomJoin;
  let fixture: ComponentFixture<ChatsRoomJoin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatsRoomJoin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsRoomJoin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
