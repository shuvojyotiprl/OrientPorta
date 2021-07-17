import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


import { TaskObject } from 'src/app/models/Tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  

  isLinear = false;
  firstFormGroup!: FormGroup ;
  secondFormGroup!: FormGroup;
  isEditable = true;
  panelOpenState = false;

  constructor(private _formBuilder: FormBuilder) {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  /*Taskdata : TaskObject[] = [
    {
      "taskid": 1,
      "userid": 1,
      "taskname": "Cooking",
      "description": "Spicy chicken",
      "priority": "HIGH",
      "issued": "2021-06-13T14:53:52.000Z",
      "targeted": "2021-05-25T04:05:00.000Z",
      "status": "DUE",
      "type": "PERSONAL"
  },
  {
      "taskid": 2,
      "userid": 1,
      "taskname": "Cleaning",
      "description": "House Cleaning",
      "priority": "HIGH",
      "issued": "2021-06-13T14:54:28.000Z",
      "targeted": "2021-05-25T04:05:00.000Z",
      "status": "DUE",
      "type": "PERSONAL"
  }
  ]*/


  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort ;

 
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange'];
const NAMES = ['Maia', 'Asher', 'Olivia'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

 

