import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SensoresComponent } from './pages/sensores/sensores.component';
import { PrevisaoComponent } from './pages/previsao/previsao.component';
import { PrivacidadeComponent } from './pages/privacidade/privacidade.component';


export const routes: Routes = [

    {
    path: '',
    component: AuthLayoutComponent,
    children: [

      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },

      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'privacidade',
        component: PrivacidadeComponent
      }

    ]
  },

  {
    path: '',
    component: MainLayoutComponent,
    children: [

      {
        path: 'dashboard',
        component: DashboardComponent
      },

      {
        path: 'sensores',
        component: SensoresComponent
      },

      {
        path: 'previsao',
        component: PrevisaoComponent
      }

    ]
  }

];