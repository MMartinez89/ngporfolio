import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SwalService } from '@core/service/swal.service';
import { TeamsService } from '../teams.service';
import { environment } from '@env';
import urljoin from 'url-join';
import {TeamsDetailsComponent} from './../teams-details/teams-details.component'

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'title', 'description', 'photo','actions'];
  dataSource = new MatTableDataSource();
  url: string;

  constructor(
    private dialog: MatDialog,
    private swalService: SwalService,
    private teamsService: TeamsService,
  ) {
    this.url= urljoin(environment.apiUrl, 'team')
   }

  ngOnInit(): void {
    this.onLoadPage();
  }

  onCreate() {
    const dialogRef = this.dialog.open(
      TeamsDetailsComponent,
      this.dialogConfig(),
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadPage();
      }
    });
  }

  onEdit(teams) {
    this.teamsService.sendTeams(teams);
  }

  onDelete(id) {
    this.swalService.confirm('Atención', 'Estás por eliminar un equipo', 'warning', true).then((result) => {
      if (result.value) {
        const url = urljoin(this.url, id.toString());
        this.teamsService.delete(url).subscribe((resp: any) => {
          this.onLoadPage();
          this.swalService.success('Atención', 'El equipo ha sido eliminado');
        }, err => {
          this.swalService.error('Atención', err);
        });
      }
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
    this.teamsService.get(this.url).subscribe(teams => {
      this.dataSource.data = teams.rows;
    });
  }
}
