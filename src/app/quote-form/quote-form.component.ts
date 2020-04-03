import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = {id:0,quote:"",author:"",person:"",datePosted:new Date(),upVote:0,downVote:0};
  @Output() addQuote = new EventEmitter<Quote>();
quoteform:FormGroup;
  submitQuote(){
this.addQuote.emit(this.newQuote);
alert('Quote added successfully. Scroll down to see!');
this.newQuote = {id:0,quote:"",author:"",person:"",datePosted:new Date(),upVote:0,downVote:0};
  }

  constructor() { }

  ngOnInit(): void {
  }

}
