import { NgModule }      from '@angular/core';
import { AppComponent }       from './app.component';
import { routing, appRoutingProviders} from './app.routing';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }