import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  displayedColumns: String[] =['id', 'name', 'age', 'status']
// datos de la tabla
dataSource =[{
  id:1,
  name: "M",
  lastName:"D",
  age: 13,
  status:true
}]
constructor(){

}
ngOnInit(): void {
    
}
}
