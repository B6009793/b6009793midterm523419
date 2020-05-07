import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  age: number;
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  constructor() {
    this.profile = {
      studentid: 'B6009793',
      name: 'Waritsara Matnok',
      gender: 'Female',
      birthyear: 1998,
      age: 21,
      email: 'idb6009793@g.sut.ac.th',
      phone: '0984287138',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: '',
      comment: ''
    }
  }

  ngOnInit(): void {
  }

  onUserClick($e){
    alert('SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand');
  }

}
