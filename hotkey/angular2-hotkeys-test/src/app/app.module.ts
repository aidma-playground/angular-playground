import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HotkeyModule, HotkeysService, Hotkey } from 'angular2-hotkeys';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HotkeyModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _hotkeysService: HotkeysService) {
    this._hotkeysService.add(new Hotkey('shift+g', (event: KeyboardEvent): boolean => {
        alert('Typed hotkey');
        return false; // Prevent bubbling
    }));
  }
}
