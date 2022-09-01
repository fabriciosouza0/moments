import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutsComponent } from './app/components/pages/about/about.component';
import { EditMomentComponent } from './app/components/pages/edit-moment/edit-moment.component';
import { HomeComponent } from './app/components/pages/home/home.component';
import { MomentComponent } from './app/components/pages/moment/moment.component';
import { NewMomentComponent } from './app/components/pages/new-moment/new-moment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutsComponent },
  { path: 'moments/new', component: NewMomentComponent },
  { path: 'moment/:id', component: MomentComponent },
  { path: 'moment/edit/:id', component: EditMomentComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
