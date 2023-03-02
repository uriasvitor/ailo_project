import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { AsideComponent } from './components/aside/aside.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { dashboardComponent } from './pages/dashboard/dashboard.component';
import { NotificationComponent } from './components/Ui/notification/notification.component';
import { ProfileComponent } from './components/Ui/profile/profile.component';
import { StartComponent } from './pages/form/start/start.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ContentHeaderComponent } from './components/content/content-header/content-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentHeaderComponent,
    AsideComponent,
    FooterComponent,
    LayoutComponent,
    MainHeaderComponent,
    dashboardComponent,
    NotificationComponent,
    ProfileComponent,
    ContentComponent,
    StartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideNgxMask(),HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
