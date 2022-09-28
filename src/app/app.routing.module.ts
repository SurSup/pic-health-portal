import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './accounts/components/home/home.component';
import { LoginComponent } from './accounts/components/login/login.component';
import { SignupComponent } from './accounts/components/signup/signup.component';
import { MatCardDarshboardComponent } from './accounts/components/matCardDashboard/matCardDashboard.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: 'matCardDashboard',
    component: MatCardDarshboardComponent,
    children: [
      {
        path: 'calculator',
        loadChildren: () =>
          import('./calculator/calculator.module').then(
            (m) => m.CalculatorModule
          ),
      },
      {
        path: 'department',
        loadChildren: () =>
          import('./department/department.module').then(
            (m) => m.DepartmentModule
          ),
      },
      {
        path: 'hospital',
        loadChildren: () =>
          import('./hospital/hospital.module').then((m) => m.HospitalModule),
      },
      {
        path: 'logout',
        loadChildren: () =>
          import('./logout/logout.module').then((m) => m.LogoutModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }