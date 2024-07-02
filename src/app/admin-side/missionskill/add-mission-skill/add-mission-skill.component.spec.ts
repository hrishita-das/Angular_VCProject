import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMissionSkillComponent } from './add-mission-skill.component';

describe('AddMissionSkillComponent', () => {
  let component: AddMissionSkillComponent;
  let fixture: ComponentFixture<AddMissionSkillComponent>;

  
beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMissionSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMissionSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  <div>
  <label for="skillName">Skill Name</label>
  <input id="skillName" type="text" [(ngModel)]="skill.skillName">
</div>
<div>
  <label for="status">Status</label>
  <input id="status" type="text" [(ngModel)]="skill.status">
</div>

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
