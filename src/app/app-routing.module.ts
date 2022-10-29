import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseContributionComponent } from './pages/database-contribution/database-contribution.component';
import { ImpressumComponent } from './pages/legal-notice/impressum/impressum.component';
import { PrivacyPolicyComponent } from './pages/legal-notice/privacy-policy/privacy-policy.component';
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
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: 'datenschutz',
    component: PrivacyPolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
