import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styles: []
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  invoices:any[] = [
    {
      created_at: new Date('01/05/2018'),
      client: {
        name: 'Omar Lee Paba ching'
      },
      articles: 35,
      total: 25000
    },
    {
      created_at: new Date('01/08/2018'),
      client: {
        name: 'Omar Lee Paba ching'
      },
      articles: 35,
      total: 25000
    },
    {
      created_at: new Date('01/10/2018'),
      client: {
        name: 'Omar Lee Paba ching'
      },
      articles: 35,
      total: 25000
    },
    {
      created_at: new Date('01/12/2018'),
      client: {
        name: 'Omar Lee Paba ching'
      },
      articles: 35,
      total: 25000
    },
    {
      created_at: new Date('01/15/2018'),
      client: {
        name: 'Omar Lee Paba ching'
      },
      articles: 35,
      total: 25000
    },
    {
      created_at: new Date('01/15/2018'),
      client: {
        name: 'Omar Lee Paba ching'
      },
      articles: 35,
      total: 25000
    },
    {
      created_at: new Date('01/23/2018'),
      client: {
        name: 'Omar Lee Paba ching'
      },
      articles: 35,
      total: 25000
    },
    {
      created_at: new Date('01/25/2018'),
      client: {
        name: 'Omar Lee Paba ching'
      },
      articles: 35,
      total: 25000
    },
    {
      created_at: new Date('01/28/2018'),
      client: {
        name: 'Omar Lee Paba ching'
      },
      articles: 35,
      total: 25000
    }
  ];

}
