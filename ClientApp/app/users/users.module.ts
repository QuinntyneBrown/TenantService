import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";


import { UsersService } from "./users.service";

import { LoginComponent } from "./login.component";
import { ChangePasswordComponent } from "./change-password.component";

import { UserEditComponent } from "./user-edit.component";
import { UserListItemComponent } from "./user-list-item.component";
import { UserPaginatedListComponent } from "./user-paginated-list.component";
import { UsersLeftNavComponent } from "./users-left-nav.component";

const declarables = [
    ChangePasswordComponent,
    LoginComponent,
    UserEditComponent,
    UserListItemComponent,
    UserPaginatedListComponent,
    UsersLeftNavComponent
];

const providers = [UsersService];

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule, SharedModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class UsersModule { }
