import { Component, NgModule, TRANSLATIONS } from '@angular/core';
import { Shallow } from 'shallow-render';
import { I18n } from '@ngx-translate/i18n-polyfill';

////// Module Setup //////
@Component({
  selector: 'dummy-label',
  template: '<label>{{i18n("MY_KEY")}}</label>',
})
class DummyLabelComponent {
  constructor(public i18n: I18n) {}
}

@NgModule({
  providers: [
    {provide: TRANSLATIONS, useValue: {fake: 'translations'}},
    I18n
  ],
  declarations: [DummyLabelComponent],
})
class DummyModule {}
//////////////////////////

describe('component with routing', () => {
  let shallow: Shallow<DummyLabelComponent>;

  beforeEach(() => {
    shallow = new Shallow(DummyLabelComponent, DummyModule)
      .provide({provide: I18n, useValue: key => key})
      .dontMock(I18n);
    // If you would like to do this permanently for all your tests
    // you can use alwaysProvide and alwaysMock in your test root (
    // like karma-shim or global-jasmine in this stack-blitz).
    // Shallow
    //   .alwaysProvide({provide: I18n, useValue: key => key})
    //   .neverMock(I18n);
  });

  it('uses the mocked I18n object', async () => {
    const {element} = await shallow.render();
    
    expect(element.nativeElement.textContent).toBe('MY_KEY');
  });
});
