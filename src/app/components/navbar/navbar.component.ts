import { flatten } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public search =''; // Saves the values ​​that are searched
  public loading =false;
  @Output() filter = new EventEmitter<string>(); // Take the value that is passed from child to parent
  
  constructor(private router: Router) {    }
  
  ngOnInit(): void {
  
  }
  /**
   * Gets the value when an event changes
  */
  updateSearch(){
    this.filter.emit(this.search);
    
  }
}
