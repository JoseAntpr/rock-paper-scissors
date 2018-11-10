import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Own Modules
import { AppRoutingModule } from './app.routing';

// Third Modules
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { IndexComponent } from './components/game/index/index.component';
import { TableComponent } from './components/game/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
