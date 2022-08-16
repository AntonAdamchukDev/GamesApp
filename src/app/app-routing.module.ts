import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: GamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
