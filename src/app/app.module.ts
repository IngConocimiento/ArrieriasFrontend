import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//Create components
import { AppComponent } from './app.component';
import { ListHouseComponent } from './components/list-house/list-house.component';
import { ListMemberComponent } from './components/list-member/list-member.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

//Create pipe
import { SearchPipe } from './pipeFilter/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListHouseComponent,
    ListMemberComponent,
    NavbarComponent,
    SearchPipe,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
