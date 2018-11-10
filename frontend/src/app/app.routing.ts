import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { IndexComponent } from './components/game/index/index.component';
import { TableComponent } from './components/game/table/table.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'remote', component: TableComponent },
  { path: 'local', component: TableComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
