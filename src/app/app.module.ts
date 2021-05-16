import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { AdddataformComponent } from './component/adddataform/adddataform.component';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart'
import { Viewdirective } from './component/adddataform/view.directive';

@NgModule({
  entryComponents: [ AdddataformComponent ],
  declarations: [
    AppComponent,
    MainComponent,
    AdddataformComponent,
    Viewdirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EmojiModule,
    PickerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
