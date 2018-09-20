import { AppRutaModule } from './app-ruta.module';

describe('AppRutaModule', () => {
  let appRutaModule: AppRutaModule;

  beforeEach(() => {
    appRutaModule = new AppRutaModule();
  });

  it('should create an instance', () => {
    expect(appRutaModule).toBeTruthy();
  });
});
