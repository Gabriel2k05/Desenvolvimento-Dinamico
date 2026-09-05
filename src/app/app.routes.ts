import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PessoaComponent } from './pessoa/pessoa';
import { Integrantes } from './integrantes/integrantes';
import { NaoEncontrada } from './nao-encontrada/nao-encontrada';


export const routes: Routes = [
    { path: '', redirectTo: 'home', // Caso o endereço seja vazio, redireciona para Home
        pathMatch: 'full',
    },

    { path: 'home', component: Home },
    { path: 'pessoa', component: PessoaComponent }, 
    { path: 'integrantes', component: Integrantes}, // Componente solicitado pelo professor na primeira aula
   

    { path: '**', component: NaoEncontrada} // Esse vai ser o componente exibido caso as outras não funcionem
];

