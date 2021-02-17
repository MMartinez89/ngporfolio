import { Component, OnInit } from '@angular/core';
import { Testimonials } from '@shared/models/testimonials.model'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SwalService } from '@core/service/swal.service';
import { environment } from '@env';
import urljoin from 'url-join';
import { TestimonialsService } from '../testimonials.service';
import {TestimonialsDetailsComponent} from '../testimonials-details/testimonials-details.component'


@Component({
  selector: 'app-testimonials-list',
  templateUrl: './testimonials-list.component.html',
  styleUrls: ['./testimonials-list.component.scss']
})
export class TestimonialsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'workPlace', 'sr', 'actions'];
  dataSource = new MatTableDataSource();
  url: string;

  constructor(
    private dialog: MatDialog,
    private swalService: SwalService,
    private testimonialsService: TestimonialsService,
  ) { 
    this.url= urljoin(environment.apiUrl, 'testimonials')
  }

  ngOnInit(): void {
    this.onLoadPage();
  }

  onCreate() {
    const dialogRef = this.dialog.open(
      TestimonialsDetailsComponent,
      this.dialogConfig()
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLoadPage();
      }
    });
  }

  onEdit(testimonials) {
    this.testimonialsService.sendTestimonials(testimonials);
  }
  onDelete(id) {
    this.swalService.confirm('Atención', 'Estás por eliminar un testimonio', 'warning', true).then((result) => {
      if (result.value) {
        const url = urljoin(this.url, id.toString());
        this.testimonialsService.delete(url).subscribe((resp: any) => {
          this.onLoadPage();
          this.swalService.success('Atención', 'El testimonio ha sido eliminado');
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
    this.testimonialsService.get(this.url).subscribe(testimonials => {
      this.dataSource.data = testimonials.rows;
    });
  }

}
