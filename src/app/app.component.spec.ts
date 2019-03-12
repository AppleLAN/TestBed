import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppComponentService } from './app-component.service';

class MockAppComponentService extends AppComponentService {
  getUserData() {
    return {user: 'hello im a mocked user'};
  }
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let appComponentService: MockAppComponentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [{provide: AppComponentService, useClass: MockAppComponentService}]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    appComponentService = TestBed.get(MockAppComponentService);
  }));

  it('AppComponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('AppComponent title property should be equal to angular-test-bed', () => {
    expect(component.title).toEqual('angular-test-bed');
  });

  it('AppComponent should render h1 title tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-test-bed');
  }));

  it('AppComponent numberAddition should be truthy', () => {
    expect(component.numberAddition).toBeTruthy();
  });

  it('AppComponent numberAddition should work as expected', () => {
    const number1 = 1;
    const number2 = 2;
    const result = component.numberAddition(number1, number2);
    expect(result).toEqual(3);
  });

  it('appComponentService injected via inject() and TestBed.get() should be the same instance', 
    inject([MockAppComponentService], (injectedAppComponentService) => {
      expect(injectedAppComponentService).toBeTruthy();
      expect(injectedAppComponentService).toBe(appComponentService);
    }));

  it('AppComponentService should be truthy', () => {
    expect(appComponentService).toBeTruthy();
  });

  it('AppComponent multiplyNumbersFromComponent should work as expected', () => {
    const number1 = 1;
    const number2 = 2;
    const result = component.multiplyNumbersFromComponent(number1, number2);
    expect(result).toEqual(2);
  });

  it('AppComponent getUserData should work as expected', () => {
    const result = component.getUserDataFromComponent();
    expect(result).toEqual('hello im a mocked user');
  });
});
