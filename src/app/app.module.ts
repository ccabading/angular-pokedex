import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      PokemonListComponent,
      AdvancedSearchComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      RouterModule.forRoot([
        { path: '', component: PokemonListComponent },
      ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
