import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseContributionComponent } from './database-contribution/database-contribution.component';
import { TranslatorComponent } from './translator/translator.component';

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
