import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SharedDataService } from '../Services/shared-data.service';
import { list } from '../../assets/interface';

@Component({
  selector: 'app-list-data',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './list-data.component.html',
  styleUrl: './list-data.component.scss',
})
export class ListDataComponent {
  ListData: list[] = [];

  constructor(public sharedserve: SharedDataService) {
    this.ListData = sharedserve.List_data_arr;
  }
}
