import { Component } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { ToDoService } from 'src/app/services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  thongbao = '';
  newSkillName: string = '';
  updatedSkillName: string = '';
  selectedSkillId: number | null = null; 
  todolists: ToDo[];// New property for selected skill ID
  fetchTodos() {
    const data = {
      "action": "string",
      "data": ""
    };
  }
  constructor(private todoService: ToDoService,private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    // this.getCompanyData();
    this.getJobData();
    this.fetchTodos();
  }
  confirmDelete(Id: number): void {
    const isConfirmed = window.confirm('Bạn đã hoàn thành công việc này rồi phải không');
    if (isConfirmed) {
      this.deleteTodo(Id);
    }
  }

  deleteTodo(Id: number): void {
    const data = {
      "action": "string",
      "data": { "id": Id }
    };

    this.todoService.deleteTodo(data).subscribe({
      next: (response) => {
        console.log('Xóa thành công');
        this.router.navigate(['Home']);
      },
      error: (error) => {
        console.error('Error deleting skill:', error);
      }
    });
  }
  
 
  getJobData(): void {
    const data = {
      action: 'string',
      data: '',
    };
    this.todoService.getAlljob(data).subscribe({
      next: (response) => {
        this.todolists = response['actionData'];
      },
      error: (response) => {
        console.log(response);
      },
    });

  }
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
