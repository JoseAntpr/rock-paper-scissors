import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Own Modules
import { AppRoutingModule } from './app.routing';

// Third Modules
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { IndexComponent } from './components/game/index/index.component';
import { TableComponent } from './components/game/table/table.component';
import { ErrorComponent } from './shared/error/error.component';

// Services
import { MovesService } from './services/moves.service';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    TableComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    MovesService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
