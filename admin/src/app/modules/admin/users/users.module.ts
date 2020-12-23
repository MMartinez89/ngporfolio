import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { MaterialModule } from '../../material.module';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class UsersModule { }