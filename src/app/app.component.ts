import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormCrudComponent } from './form-crud/form-crud.component';
import { ListDataComponent } from './list-data/list-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListDataComponent, FormCrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'valorx';
}
