import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsRoomCreate } from './chats-room-create';

describe('ChatsRoomCreate', () => {
  let component: ChatsRoomCreate;
  let fixture: ComponentFixture<ChatsRoomCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatsRoomCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsRoomCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
