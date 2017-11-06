//angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatMenuModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//local file imports
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { ChirpformComponent } from './chirpform/chirpform.component'; 
import { DataService } from './data.service';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CountdownPipe } from './countdown.pipe';

const appRoutes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'single',
    component: SingleComponent 
  },
  {
    path: 'chirpform',
    component: ChirpformComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'AppComponent'
  }, 
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SingleComponent,
    ChirpformComponent,
    ProfileComponent,
    LoginComponent,
    CountdownPipe
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, ChirpformComponent], //Not sure if I need ChirpformComponent here in order to get it to print
  bootstrap: [AppComponent]
})
export class AppModule { }
