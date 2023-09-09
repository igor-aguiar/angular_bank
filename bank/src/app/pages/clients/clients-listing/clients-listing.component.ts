import { Component, OnInit } from '@angular/core';
import { ClientsServiceService } from 'src/app/services/clients-service.service';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-clients-listing',
  templateUrl: './clients-listing.component.html',
  styleUrls: ['./clients-listing.component.sass']
})
export class ClientsListingComponent implements OnInit{


  clients: Client[] = []

  constructor(private clientService: ClientsServiceService){}

  ngOnInit(): void {
    
  }

  listClients(){
    this.clientService.list().subscribe(clientsApi=> {
      this.clients = clientsApi;
    })
  }
}
