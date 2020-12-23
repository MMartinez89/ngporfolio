import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpService } from '@core/service/http.service';
import {SwalService} from '@core/service/swal.service'
import { environment } from '@env';
import urljoin from 'url-join';
import {RoleDetailComponent} from '../role-detail/role-detail.component'

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  displayedColumns: string[] = ['id','rolename','description', 'actions'];
  dataSource = new MatTableDataSource();
  url: string;
  constructor(
    private httpService: HttpService,
    private dialog: MatDialog,
    private swalService: SwalService
    ) {
    this.url = urljoin(environment.apiUrl, 'role');
  }

  ngOnInit(): void {
   // this.httpService.get(this.url).subscribe(roles => {
    //  this.dataSource = roles.rows;
    //});
    this.onLoadPage();
  }
  onCreate() {
    const dialogRef = this.dialog.open(
      RoleDetailComponent,
      this.dialogConfig()
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadPage();
      }
    });
  }
  onEdit(row) {
    const dialogRef = this.dialog.open(
      RoleDetailComponent,
      this.dialogConfig(row)
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadPage();
      }
    });
  }

  onDelete(id) {
    this.swalService.confirm('Atención', 'Estás por eliminar un rol?','warning', true).then((result) => {
      if (result.value) {
        const url = urljoin(this.url, id.toString());
        this.httpService.delete(url).subscribe((resp: any) => {
          this.onLoadPage();
          this.swalService.success('Atención', 'El rol ha sido eliminado');
        }, err  => {
          this.swalService.error('Atención', err);
        });
      }
     this.onLoadPage();
    });
  }

  dialogConfig(data?) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '700px';
    dialogConfig.data = data || null;
    return dialogConfig;
  }
  onLoadPage() {
    this.httpService.get(this.url).subscribe(roles => {
      // this.dataSource = new MatTableDataSource(roles.rows) ;
      // forma optima
      this.dataSource.data = roles.rows ;
    });
  }
}