import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'character-list', component: CharacterListComponent },
  { path: 'character-details/:id', component: CharacterDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
