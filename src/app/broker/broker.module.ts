import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrokerComponent } from './broker.component';
import { CreateBrokerComponent } from './create-broker/create-broker.component';
import { BrokerListComponent } from './broker-list/broker-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrokerRoutingModule } from './broker-routing.module';



@NgModule({
  declarations: [
    BrokerComponent,
    CreateBrokerComponent,
    BrokerListComponent
  ],
  imports: [
    CommonModule,
    BrokerRoutingModule,
    ReactiveFormsModule,
  ]
})
export class BrokerModule { }
