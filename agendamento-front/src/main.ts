import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { TransferenciaComponent } from './app/components/transferencia/transferencia.component';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

bootstrapApplication(TransferenciaComponent, {
  providers: [provideHttpClient()] // ✅ aqui é onde o Angular fornece o HttpClient
})
  .catch(err => console.error(err));

