import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent_v1 } from './keyup.component';
import { KeyUpComponent_v2 } from './keyup.component.v2';
import { KeyUpComponent_v3 } from './keyup.component.v3';
import { KeyUpComponent_v4 } from './keyup.component.v4';
import { LoopbackComponent } from './loop-back.component';
import { HeroFormComponent } from './hero-form.component';
import { LittleTourComponent } from './little-tour.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { Logger } from './logger.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule 
  ],
  declarations: [ 
    AppComponent,
    ClickMeComponent,
    KeyUpComponent_v1,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    LittleTourComponent,
    LoopbackComponent,
    HeroFormComponent,
    HeroesComponent,
    HeroListComponent
  ],//,
  providers: [Logger],
  /*
  providers: [
    //UserService,
    //{ provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ],
  */
  bootstrap: [ AppComponent ]
})
export class AppModule { }