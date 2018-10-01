import { Component, OnInit } from '@angular/core';
import { FileServerService } from "../../../services/file-server.service";

@Component({
  selector: 'students-upload',
  templateUrl: 'students-upload.component.html'
})
export class StudentsUploadComponent implements OnInit{
  constructor(public fileTransferService: FileServerService) {}

  ngOnInit() {
    this.fileTransferService.createUploader('api/FileUpload/StudentUpload');
    this.fileTransferService.handleFileUploadEvents();
  }

  downloadStudentsTemplate() {
    this.fileTransferService.downloadFile('students-template.xlsx')
  }
}
