import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseContributionComponent } from './pages/database-contribution/database-contribution.component';
import { TranslatorComponent } from './pages/translator/translator.component';

const routes: Routes = [
  {
    path: 'wissen-beitragen',
    component: DatabaseContributionComponent,
  },
  {
    path: '',
    component: TranslatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
