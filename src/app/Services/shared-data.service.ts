import { Injectable } from '@angular/core';
import { list } from '../../assets/interface';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  List_data_arr: list[] = [];

  AddData(data: any) {
    this.List_data_arr.push({
      address: data.address,
      email: data.email,
      f_name: data.firstName,
      gender: data.gender,
      l_name: data.lastName,
      phone: data.phone,
    });
  }

  Deletedata(ind: number) {
    this.List_data_arr.splice(ind, 1);
  }
}
