import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:'full'},
  {path:"home",component:HomeComponent, title:'Home'},
  {path:"about",component:AboutComponent,title:'About'},
  {path:"portfolio",component:PortfolioComponent,title:'portfolio'},
  {path:'contact', component:ContactComponent, title:'Contact'},
  {path:"**" , component:NotfoundComponent, title:'Notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:'enabled'}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
