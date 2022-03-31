import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from '../models/icharacter';
import { ICharacterList } from '../models/icharacter-list';
import { CharacterApiService } from '../services/character-api.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  public charact!: ICharacter;

  constructor(private _characApi: CharacterApiService, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this._activeRoute.snapshot.params['id']

    this._characApi.get(id).subscribe({
      next: (data) => {
        this.charact = data;
      }
    });
  }



}
