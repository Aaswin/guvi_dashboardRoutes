import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { BordersComponent } from './borders/borders.component';
import { ColorsComponent } from './colors/colors.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { OtherComponent } from './other/other.component';
import { TableComponent } from './table/table.component';

 const routes: Routes = [
   {
     path:'',
     component:MainpageComponent,
   },
   {
     path:'table',
     component:TableComponent
   },
   {
     path:'colors',
     component:ColorsComponent
   },
   {
    path:'animation',
    component:AnimationComponent
  },
  {
    path:'border',
    component:BordersComponent
  },
  {
    path:'other',
    component:OtherComponent
  },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
