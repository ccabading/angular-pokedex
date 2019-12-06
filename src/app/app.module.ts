import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonCardContentComponent } from './pokemon-card-content/pokemon-card-content.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { PokemonListNavComponent } from './pokemon-list-nav/pokemon-list-nav.component';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      PokemonListComponent,
      PokemonDetailsComponent,
      PokemonCardContentComponent,
      PokemonListNavComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      RouterModule.forRoot([
        { path: '', component: PokemonListComponent },
      ]),
      MatToolbarModule,
      MatInputModule,
      MatButtonModule,
      MatGridListModule,
      MatCardModule,
      MatDialogModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [PokemonDetailsComponent]
})
export class AppModule { }
