import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataPeopleService } from 'src/app/services/data-people.service';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {

  public listHouse: Array<any>=[]; //List house
  public selectHouse ;  // Save the selected house
  public loading= false; // Visualize in loading
  public selectNotHouse=false; // Variable for warning
   

  constructor(private _dataPeople: DataPeopleService, private router: Router) { 
    this.selectHouse='-- -- --';
    
  }
  /**
   * Created methods are initialized
   */
  ngOnInit(): void {
    this.getAllHouse();
  }

  /**
   * Get the houses that are in api
   * Recoore the list of causes to eliminate repeated houses
   */
  public getAllHouse(){
    this._dataPeople.getAllHouse().subscribe(data =>{
      for (let clave of data){
        if(this.listHouse.find(x=>x==clave.house)==undefined){
          this.listHouse.push(clave.house);
        }     
      }
    })
  }

  /**
   * Method that addresses the component of the list of members
   * It is compared if you have a selected house
   * A waiting loading is displayed
   * When checking the variables and they are true, go to the list component of the members of the house
   * If the condition is not met, it displays a warning
   */
  public getAllListMemberHouse(){
    if(this.selectHouse!='' && this.selectHouse!='-- -- --'){
      this.loading= true;     
      this.selectNotHouse=false;
      setTimeout(() => {
        this.router.navigate(['/listMember', this.selectHouse]);
        this.loading=false;
      }, 2000);
     
    }else{
      this.selectHouse='-- -- --';
      this.selectNotHouse=true;
    }   
  }
}
