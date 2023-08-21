import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TranslatorComponent } from './pages/translator/translator.component';
import { DatabaseContributionComponent } from './pages/database-contribution/database-contribution.component';
import { TextAreaComponent } from './shared/ui/text-area/text-area.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { IconButtonComponent } from './shared/ui/icon-button/icon-button.component';
import { InputTextComponent } from './shared/ui/input-text/input-text.component';
import { DropdownComponent } from './shared/ui/dropdown/dropdown.component';
import { ButtonComponent } from './shared/ui/button/button.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImpressumComponent } from './pages/legal-notice/impressum/impressum.component';
import { PrivacyPolicyComponent } from './pages/legal-notice/privacy-policy/privacy-policy.component';
import { ToastModule } from 'primeng/toast';
import { BookAdComponent } from './shared/ui/book-ad/book-ad.component';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TranslatorComponent,
    DatabaseContributionComponent,
    TextAreaComponent,
    IconButtonComponent,
    InputTextComponent,
    DropdownComponent,
    ButtonComponent,
    ImpressumComponent,
    PrivacyPolicyComponent,
    BookAdComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    InputTextareaModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    TabViewModule,
    ToastModule,
    AdsenseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
