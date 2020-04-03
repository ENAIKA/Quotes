import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DefaultQuoteComponent } from './default-quote/default-quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { VotesDirective } from './votes.directive';
import { TimeElapsedPipe } from './time-elapsed.pipe';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyDNMgAIVEu7QWdXb8AWBQMDHeYJfwOqfsg",
  authDomain: "quotes-489c8.firebaseapp.com",
  databaseURL: "https://quotes-489c8.firebaseio.com",
  projectId: "quotes-489c8",
  storageBucket: "quotes-489c8.appspot.com",
  messagingSenderId: "648953544563",
};

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    DefaultQuoteComponent,
    QuoteDetailComponent,
    VotesDirective,
    TimeElapsedPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
