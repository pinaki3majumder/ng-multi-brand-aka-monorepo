import { TestBed } from '@angular/core/testing';
import { CommonAppComponent } from './common-app.component';

describe('CommonAppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonAppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CommonAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ng-multi-brand-aka-monorepo' title`, () => {
    const fixture = TestBed.createComponent(CommonAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-multi-brand-aka-monorepo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CommonAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ng-multi-brand-aka-monorepo');
  });
});
