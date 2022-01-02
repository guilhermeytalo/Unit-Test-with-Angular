import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name,() => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID durging ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });


  it('Should NOT auto-generate ID durigin ngOnInit when (@Input id) is assigned', () => {
    const someID = 'someId';
    component.id = someID;
    fixture.detectChanges();
    expect(component.id).toBe(someID);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    should trigger (@Output liked) when called`, () => {
      spyOn(component.liked, 'emit');
      fixture.detectChanges();
      component.like();
      expect(component.liked.emit).toHaveBeenCalled();
    }
  );
});