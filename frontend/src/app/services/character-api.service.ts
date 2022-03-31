import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter } from '../models/icharacter';

@Injectable({
  providedIn: 'root'
})
export class CharacterApiService {

  private _url = "http://localhost:3000/data/"

  constructor(private _httpClient: HttpClient) { }

  public getAll(): Observable<ICharacter[]> {
    return this._httpClient.get<ICharacter[]>(this._url);
  }

  public get(id: number): Observable<ICharacter> {
    return this._httpClient.get<ICharacter>(this._url + id);
  }

  public delete(id: number) {
    return this._httpClient.delete(this._url + id)
  }
}
