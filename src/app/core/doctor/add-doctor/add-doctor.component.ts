import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string ;
}
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent {
  public routes = routes;
  public selectedValue !: string ;

  selectedList1: data[] = [
    {value: 'Select Department'},
    {value: 'ortopedia'},
    {value: 'Radiología'},
    {value: 'Dentista'},
  ];
  selectedList2: data[] = [
    {value: 'Seleccione'},
    {value: 'Alaska'},
    {value: 'Los Angeles'},
  ];
  selectedList3: data[] = [
    {value: 'Seleccionar país'},
    {value: 'Usa'},
    {value: 'Uk'},
    {value: 'Italy'},
  ];
  selectedList4: data[] = [
    {value: 'Seleccione Estado'},
    {value: 'Alaska'},
    {value: 'California'},
  ];
}
