import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Models/student';
import { DataPeopleService } from 'src/app/services/data-people.service';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {

  public filter=''; // Take the words that are leaking
  public house : string; // Variable house selected
  public listStudent: Array<Student> =[];  // List the member
  public orderSortName = true; // Asc or Des name 
  public orderSortGender = true; // Asc or Des gender

 
  constructor(private _dataPeople: DataPeopleService, private router: ActivatedRoute) { 
    // Variable that stores the selected house that comes from the child component
    this.house = router.snapshot.paramMap.get('valor')!;

  }

  /**
   * Created methods are initialized
   */
  ngOnInit(): void {
    this.getAllStudent();
    
  }

   /**
   * You get the members of the house selected by the user
   */
  public getAllStudent(){    
    this._dataPeople.getAllstudent<Student>(this.house)
    .subscribe(data =>{
      this.listStudent=data;
    }) ;   
    
  }

  /**
   * Method that obtains what is entered when making a filter in the table
   * @param searchFilter // Variable that takes the words when writing a filter
  */
  public dataSearch(searchFilter: string):void{
    this.filter=searchFilter;
  }

  /**
   * The metods are called and the list ordered in an asc and des by NAME is obtained
   */
  public getListOrderedMemberName(){
    this.orderSortName = !this.orderSortName;
    if(this.orderSortName){
      this.sortAscendent();
    }else{
      this.sortDescendent();
    }
  }
  /**
   * Method that sorts the table of members by name a ASC
   * @returns The ordered list of members asc
   */
  public sortAscendent(){
    return this.listStudent.sort(function(name1,name2){
      if(name1.name !=undefined && name2.name !=undefined ){
        if(name1.name > name2.name ){
          return 1;
        }
        if(name1.name < name2.name ){
          return -1
        }
        return 0;
      }
      return 0;
     
    });
  }

  /**
   * Method that sorts the table of members by name a DES
   * @returns The ordered list of members des
   */
  public sortDescendent(){
    return this.listStudent.sort(function(name1,name2){
      if(name1.name !=undefined && name2.name !=undefined ){
        if(name1.name < name2.name ){
          return 1;
        }
        if(name1.name > name2.name ){
          return -1
        }
        return 0;
      }
      return 0;
     
    }); 
 }
  /**
   *  The metods are called and the list ordered in an asc and des by GENDER is obtained
   */
  public getListOrderMemberGender(){
    this.orderSortGender = !this.orderSortGender;
    if(this.orderSortGender){
      this.sortAscendentGender();
    }else{
      this.sortDescendentGender();
    }
  }
   /**
   * Method that sorts the table of members by gender a ASC
   * @returns The ordered list of members Asc
   */
  public sortAscendentGender(){
    return this.listStudent.sort(function(name1,name2){
      if( name1.gender!=undefined && name2.gender!=undefined){
        if( name1.gender>name2.gender){
          return 1;
        }
        if( name1.gender<name2.gender){
          return -1
        }
        return 0;
      }
      return 0;
     
    });
  }

   /**
   * Method that sorts the table of members by gender a DES
   * @returns The ordered list of members des
   */
  public sortDescendentGender(){
    return this.listStudent.sort(function(name1,name2){
      if(name1.gender!=undefined && name2.gender!=undefined){
        if( name1.gender < name2.gender){
          return 1;
        }
        if( name1.gender > name2.gender){
          return -1
        }
        return 0;
      }
      return 0;
     
    });
  }
}
