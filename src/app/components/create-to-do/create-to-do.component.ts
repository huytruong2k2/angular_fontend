import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { ToDoService } from 'src/app/services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrl: './create-to-do.component.css'
})
export class CreateToDoComponent implements OnInit {
  newTodoName: string ;
  Date1:string;
  Date2: string;
  constructor(private todoService: ToDoService,private route: ActivatedRoute, private ToDoService: ToDoService, private router: Router) {}
  ngOnInit(): void {
    this.fetchTodos();
  }
  fetchTodos(){
    const data = {
      "action": "string",
      "data": ""
  }
}

  todoForm = new FormGroup({
  input_cv: new FormControl(""),
  ngay_txtDate1: new FormControl(""),
  ngay_txtDate2:new FormControl("")
});

insert(): void {  
  console.log(this.todoForm);
  const newSkillData = {
    "action": "string",
    "data": {
      "tencongviec": this.newTodoName,
      "ngaybatdau": this.Date1,
      "ngayketthuc": this.Date2
    }
  };
  this.todoService.InsertTodo(newSkillData).subscribe({
    next: (response) => {
      console.log('Thêm thành công');
      alert('Thêm thành công');
      this.router.navigate(['/Home']);
    },
    error: (error) => {
      console.error('Error adding skill:', error);
    }
  });
}




}
