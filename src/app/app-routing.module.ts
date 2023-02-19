import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutme', component: AboutmeComponent },
    { path: 'proyects', component: ProyectsComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
