import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'signin', component: SigninComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }