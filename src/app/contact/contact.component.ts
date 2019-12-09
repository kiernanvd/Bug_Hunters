import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  drpNotification = ['All', 'New Products', 'Blog Entry', 'Discounts'];

  constructor() { }

  ngOnInit() {
  }

  addContact() {
    window.alert('You have been added to our Newsletter!');
    window.location.reload();
  }
}
