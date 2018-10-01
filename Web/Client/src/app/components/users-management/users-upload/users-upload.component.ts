import { Component, OnInit } from '@angular/core';
import { FileServerService } from '../../../services/file-server.service';

@Component({
  selector: 'app-users-upload',
  templateUrl: './users-upload.component.html'
})
export class UsersUploadComponent implements OnInit {
  constructor(public fileTransferService: FileServerService) {}

  ngOnInit() {
    this.fileTransferService.createUploader('api/fileupload/TeacherUpload');
    this.fileTransferService.handleFileUploadEvents();
  }

  downloadUsersTemplate() {
    this.fileTransferService.downloadFile('teachers-template.xlsx')
  }

}
