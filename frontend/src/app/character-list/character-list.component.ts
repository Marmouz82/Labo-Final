import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../models/icharacter';
import { ICharacterList } from '../models/icharacter-list';
import { CharacterApiService } from '../services/character-api.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public charact!: ICharacter;
  public characts: ICharacterList[] = [];

  constructor(private _characApi: CharacterApiService) { }


  ngOnInit(): void {
    this._characApi.get(1).subscribe({
      next: (data) => {
        this.charact = data;
      }
    });

    this._characApi.getAll().subscribe({
      next: datas => this.characts = datas
    });
  }

}
