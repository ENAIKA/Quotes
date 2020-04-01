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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
