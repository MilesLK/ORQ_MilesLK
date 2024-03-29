import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { FindFilmsComponent } from './components/find-films/find-films.component';
import { FindSeriesComponent } from './components/find-series/find-series.component';
import { CrudComponent } from './components/crud/crud.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

export const routes: Routes = [
    {path:"",component: AccueilComponent},
    {path:"connexion", component: ConnexionComponent},
    {path:"inscription",component: InscriptionComponent},
    {path:"findFilms",component:FindFilmsComponent},
    {path:"findSeries", component:FindSeriesComponent},
    {path:"crud", component:CrudComponent},
    {path:"watchlist", component:WatchlistComponent},
];

