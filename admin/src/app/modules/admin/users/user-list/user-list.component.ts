import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from '@core/service/http.service';
import { environment } from '@env';
import urljoin from 'url-join';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { SwalService } from '@core/service/swal.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname','lastname','email','actions'];
  dataSource = new MatTableDataSource();
  url: string;
  constructor(
    private httpService: HttpService,
    private dialog: MatDialog,
    private swalService: SwalService) {
    this.url = urljoin(environment.apiUrl, 'user');
  }

  ngOnInit(): void {
    this.onLoadPage();
  }

  onCreate(){
    const dialoRef = this.dialog.open(
      UserDetailComponent,
      this.dialogConfig()
    );
   dialoRef.afterClosed().subscribe((result)=>{
     if(result){
      this.onLoadPage();
     }
   })
  }

  onDelete(id) {
    this.swalService.confirm('Atención', 'Estás por eliminar un usuario?','warning', true).then((result) => {
      if (result.value) {
        const url = urljoin(this.url, id.toString());
        this.httpService.delete(url).subscribe((resp: any) => {
          this.onLoadPage();
          this.swalService.success('Atención', 'El usuario ha sido eliminado');
        }, err  => {
          this.swalService.error('Atención', err);
        });
      }
     this.onLoadPage();
    });
  }

  onEdit(row){
    const dialoRef = this.dialog.open(
      UserDetailComponent,
      this.dialogConfig(row)
    );
    dialoRef.afterClosed().subscribe((result)=>{
      if(result){
        this.onLoadPage()
      }
    })
  }

  dialogConfig(data?) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '700px';
    dialogConfig.data = data || null;
    return dialogConfig;
  }

  onLoadPage(){
    this.httpService.get(this.url).subscribe(users => {
      this.dataSource = users.rows;
    });
  }
}