import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArchiveItem } from '../models/http-models/archive-item.model';
import { DatePipe } from '@angular/common';

@Injectable()
export class ArchiveService {

  constructor(private http: HttpClient, private datePipe: DatePipe) { }
  /**
   * Get list of archived dismissal information
   */
  getArchiveList(date: Date, studentName: string, startDay:Date): Observable<ArchiveItem[]> {
    // Setup date query parameter
    let params = new HttpParams()
      .set('ArchiveDate', this.datePipe.transform(date, 'yyyy-MM-dd'))
      .set('StudentName', studentName)
      .set('StartDay', this.datePipe.transform(startDay, 'yyyy-MM-dd'));

    return this.http.get<ArchiveItem[]>('api/Dismissal/Archive', { params: params });
  }

  /**
   * Export archive by date in excel
   */
  downloadArchiveList(date: Date, name: string, startDay: Date, callback?: () => void) {
    this.getArchiveListFile(date, name, startDay).subscribe((response) => {
      var downloadUrl = URL.createObjectURL(response);
      let downLoadLink = document.createElement("a");

      document.body.appendChild(downLoadLink);
      downLoadLink.style.display = "none";
      downLoadLink.href = downloadUrl;
      downLoadLink.download = `archive-${this.datePipe.transform(date, 'yyyy-MM-dd')}.xlsx`;

      downLoadLink.click();
      window.URL.revokeObjectURL(downloadUrl);

      callback && callback();
    });
  }

  getArchiveListFile(date: Date, name: string, startDay: Date): Observable<Blob> {
    if (name === "") {
      return this.http.get(`api/Dismissal/ExportArchive/${this.datePipe.transform(date, 'yyyy-MM-dd')}`, { responseType: "blob" })
    }
    else {
      //let startDay = startDay: Date === "" ? 0 : Number(lastDays);
      return this.http.get(`api/Dismissal/ExportFilteredArchive/${this.datePipe.transform(date, 'yyyy-MM-dd')}/${name}/${this.datePipe.transform(startDay, 'yyyy-MM-dd')}`, { responseType: "blob" })
    }
  }
}
