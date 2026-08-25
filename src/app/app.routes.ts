import { Routes } from '@angular/router';
import { Pessoa } from './pessoa/pessoa';
import { Home } from './home/home';

export const routes: Routes = [{ path: 'pessoa', component: Pessoa }, { path: 'home', component: Home }];
