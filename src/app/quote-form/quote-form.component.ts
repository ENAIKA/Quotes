import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = {id:0,quote:"",author:"",person:"",datePosted:new Date()};
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
this.newQuote = {id:0,quote:"",author:"",person:"",datePosted:new Date()};;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
