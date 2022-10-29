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
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    InputTextareaModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
