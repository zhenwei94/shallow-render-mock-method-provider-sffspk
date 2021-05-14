import jasmineRequire from 'jasmine-core/lib/jasmine-core/jasmine.js';

window['jasmineRequire'] = jasmineRequire;

// To always mock I18n, you can mock it here.
// Shallow
//   .alwaysProvide({provide: I18n, useValue: key => key})
//   .neverMock(I18n);