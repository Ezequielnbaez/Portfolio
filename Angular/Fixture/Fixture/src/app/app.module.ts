import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRadioModule } from '@angular/material/radio';
import { SwiperModule } from 'swiper/angular';
import { ReactiveFormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { ListcountComponent } from './components/listcount/listcount.component';
import { CountriesItemComponent } from './components/countries-item/countries-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountrySlideComponent } from './components/country-slide/country-slide.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { FormFixtureComponent } from './components/form-fixture/form-fixture.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  { path: '', component: ListcountComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ListcountComponent,
    CountriesItemComponent,
    CountrySlideComponent,
    ContactFormComponent,
    FooterComponent,
    FixtureComponent,
    FormFixtureComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    MatRadioModule,
    FormsModule,
    SwiperModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
