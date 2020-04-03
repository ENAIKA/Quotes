import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-default-quote',
  templateUrl: './default-quote.component.html',
  styleUrls: ['./default-quote.component.css']
})
export class DefaultQuoteComponent implements OnInit {
  quotes: Quote[] = [
    {id:1,quote:'Tough times don’t last. Tough people do.',author:' Robert H. Schuller',person:'Nakish',datePosted:new Date(2019,2,14),upVote:9,downVote:0},
    {id:2,quote:'Courage is one step ahead of fear',author:'Coleman Young',person:'Nakish',datePosted:new Date(2019,2,14),upVote:12,downVote:3},
    {id:3,quote:'Everything you’ve ever wanted is on the other side of fear. ',author:'George Addair',person:'Nakish',datePosted:new Date(2020,1,31),upVote:100,downVote:0},
    {id:4,quote:'Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed.',author:'Bob Riley',person:'Nakish',datePosted:new Date(2020,1,31),upVote:10,downVote:0},
    {id:5,quote:'It’s not about perfect. It’s about effort. ',author:'Jillian Michaels',person:'Nakish',datePosted:new Date(2020,1,31),upVote:20,downVote:0},
    {id:6,quote:'Life is 10% what happens to us and 90% how we react to it. ',author:'Dennis P. Kimbro',person:'Nakish',datePosted:new Date(2020,1,31),upVote:100,downVote:0},
    {id:7,quote:'There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures. ',author:'Josiah Gilbert Holland',person:'Nakish',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:8,quote:'Even if you’re on the right track, you’ll get run over if you just sit there ',author:'Will Rogers',person:'Nakish',datePosted:new Date(2020,1,31),upVote:100,downVote:0},
    {id:9,quote:'Don’t worry about failures, worry about the chances you miss when you don’t even try.',author:'Jack Canfield',person:'Nakish',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:10,quote:'Do not let what you cannot do interfere with what you can do.',author:'John Wooden',person:'Nakish',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:11,quote:'Nobody ever wrote down a plan to be broke, fat, lazy, or stupid. Those things are what happen when you don’t have a plan. ',author:'Larry Winget',person:'Nakish',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:12,quote:'I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.',author:'Albert Einstein',person:'Nakish',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:13,quote:'The greatest mistake you can make in life is to be continually fearing you will make one. ',author:'Elbert Hubbard',person:'Carpiscoh',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:14,quote:'As soon as anyone starts telling you to be “realistic,” cross that person off your invitation list.',author:'John Eliot',person:'Nakish',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:15,quote:'Sometimes good things fall apart so better things can fall together',author:'Marilyn Monroe',person:'MoM',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:16,quote:'Never, never, never, never give up. ',author:'Winston Churchill',person:'Nakish',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:17,quote:'Life is a series of natural and spontaneous changes. Don’t resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. ',author:'Lao Tzu',person:'Nakish',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:18,quote:'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',author:'Norman Vincent Peale',person:'Nakish',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:19,quote:'Success is what comes after you stop making excuses.  ',author:'Luis Galarza',person:'Nakish',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:20,quote:'Don’t wish it were easier. Wish you were better. ',author:'Jim Rohn',person:'Nakish',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:21,quote:'Goals may give focus, but dreams give power. ',author:'John Maxwell',person:'Nakish',datePosted:new Date(2020,3,31),upVote:100,downVote:0},
    {id:22,quote:'Staying positive does not mean that things will turn out okay. Rather it is knowing that you will be okay no matter how things turn out.  ',author:'Unkown',person:'Nakish',datePosted:new Date(2020,3,31),upVote:100,downVote:0},

    
     
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
    quote.datePosted = new Date(quote.datePosted);
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(){
  }

}
