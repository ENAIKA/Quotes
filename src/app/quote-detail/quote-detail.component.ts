import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote}from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isDeleted = new EventEmitter<boolean>();

  quoteDelete(deleted:boolean){
    this.isDeleted.emit(deleted);
  }
  
  quoteUpVoted(){
    let total=0;
    let count=this.quote.upVote;
    total=count+1;
    this.quote.upVote=total;
    
  }
  quoteDownVoted(){
    let total=0;
    let count=this.quote.downVote;
    total=count+1;
    this.quote.downVote=total;
    
  }
  constructor() { }

  ngOnInit() {
  }

}
