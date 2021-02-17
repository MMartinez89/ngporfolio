import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from '@core/service/http.service';
import { environment } from '@env';
import urljoin from 'url-join';
import { SwalService } from '@core/service/swal.service';
import { SkillDetailComponent } from '../skill-detail/skill-detail.component';
import { SkillsService } from '../skills.service';
import { Skill } from '../../../../shared/models/skill.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'parent', 'active', 'actions'];
  dataSource = new MatTableDataSource();
  url: string;
  constructor(
    private dialog: MatDialog,
    private httpService: HttpService,
    private swalService: SwalService,
    private skillsService: SkillsService,
  ) {
    this.url = urljoin(environment.apiUrl, 'skill');
  }

  ngOnInit(): void {
    this.onLoadPage();
  }
  onCreate() {
    const dialogRef = this.dialog.open(
      SkillDetailComponent,
      this.dialogConfig()
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadPage();
      }
    });
  }
  onEdit(skill) {
    this.skillsService.sendSkill(skill);
  }
  onDelete(id) {
    this.swalService.confirm('Atención', 'Estás por eliminar un rol?', 'warning', true).then((result) => {
      if (result.value) {
        const url = urljoin(this.url, id.toString());
        this.skillsService.delete(url).subscribe((resp: any) => {
          this.onLoadPage();
          this.swalService.success('Atención', 'El rol ha sido eliminado');
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
    this.skillsService.get(this.url).subscribe(skills => {
      // this.dataSource = new MatTableDataSource(skills.rows) ;
      // forma optima
      this.dataSource.data = skills.rows;
    });
  }

}