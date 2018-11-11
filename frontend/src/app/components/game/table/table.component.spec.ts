import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { TableComponent } from './table.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { GameService } from 'src/app/services/game.service';
import { MovesService } from 'src/app/services/moves.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';


describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  const service = new MovesService(null);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      providers: [
        GameService,
        MovesService
      ],
      imports: [
        RouterTestingModule,
        AngularFontAwesomeModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('LocalGame - should be create a new message in history', () => {
    component.play(0);
    expect(component.history.length).toBeGreaterThan(0);
  });


});
