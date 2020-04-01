import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-default-quote',
  templateUrl: './default-quote.component.html',
  styleUrls: ['./default-quote.component.css']
})
export class DefaultQuoteComponent implements OnInit {
  quotes: Quote[] = [
    {id:1,quote:'Love is overrated, we just need someone who cares for us and support us nommater what',author:'Nakish',person:'Nakish',datePosted:new Date(2019,2,14)},
    {id:2,quote:'Better late than never',author:'Wahenga',person:'Nakish',datePosted:new Date(2019,2,14)},
    {id:3,quote:'Just do it',author:'anonymous',person:'Nakish',datePosted:new Date(2020,3,31)},
  ];
  deleteQuote(isDeleted, index){
    if (isDeleted) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quotesNumber= this.quotes.length;
    quote.id = quotesNumber+1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(){
  }

}
