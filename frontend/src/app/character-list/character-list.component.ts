import { Component, OnInit } from '@angular/core';
import { CharacterApiService } from '../services/character-api.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  constructor(private _charac: CharacterApiService) { }


  ngOnInit(): void {
    this._charac.getAll();
  }

}
