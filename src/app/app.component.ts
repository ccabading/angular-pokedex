import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  typeUrl: string;
  searchText: string;

  childEventClicked(typeSelected: any) {
    this.typeUrl = typeSelected;
  }

  searchChanged(searchValue: any) {
    this.searchText = searchValue;
  }

}
