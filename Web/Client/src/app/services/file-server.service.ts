import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import { FileUploader, FileUploaderOptions, FileItem } from 'ng2-file-upload';
import { LoaderService } from './loader.service';
import { Roles } from '../models/roles.enum';

@Injectable()
export class FileServerService {
  public uploader: FileUploader;
  isValidFileExtension: boolean = true;
  isUploadSuccessfull: boolean;
  isUploadFailed: boolean;
  isFileOverDropZone: boolean;
  message: string;

  constructor(public http: HttpClient, private loaderService: LoaderService) { }
   
  createUploader(url: string) {
    this.uploader = new FileUploader(
      <FileUploaderOptions>{
        url: url,
        headers: [
          { name: "Authorization", value: 'Bearer ' + localStorage.getItem('token') },
          { name: 'Accept', value: '*/*' }
        ],
        isHTML5: true,
        allowedFileType: [
          "application",
          "image",
          "video",
          "audio",
          "pdf",
          "compress",
          "doc",
          "xls",
          "ppt",
          "csv"
        ],
        removeAfterUpload: true,
        autoUpload: false,
        maxFileSize: 200 * 1024 * 1024,
      }
    );
   
    if (window.localStorage.getItem('role') === Roles.superAdmin && window.localStorage.getItem('selectedSchool')) {     
      this.uploader.options.headers.push({ name: "schoolId", value: window.localStorage.getItem('selectedSchool') });          
    }
    
  }

  handleFileUploadEvents() {
    this.uploader.clearQueue();
    this.resetMessages();
    this.uploader.onAfterAddingFile = (fileItem) => {
      this.uploadFile(fileItem);
    }
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.resetMessages();
      console.log(response);
      switch (status) {
        case 200: {
          this.isUploadSuccessfull = true;
          this.message = response;
          break;
        }
        default: {
          this.isUploadFailed = true;
          break;
        }
      }

      this.uploader.clearQueue();
      this.loaderService.displayMini(false);
    };
  }

  uploadFile(fileItem: FileItem) {
    this.loaderService.displayMini(true);
    this.uploader.clearQueue();
    this.resetMessages();
    this.uploader.queue[0] = fileItem;
    this.isValidFileExtension = this.uploader.queue[0].file.name.includes("xlsx") /*|| this.uploader.queue[0].file.name.includes("csv")*/;
    if (this.isValidFileExtension) {
      this.uploader.uploadAll();
    } else {
      this.uploader.clearQueue();
      this.loaderService.displayMini(false);
    }
  }

  resetMessages() {
    this.isValidFileExtension = true;
    this.isUploadFailed = false;
    this.isUploadSuccessfull = false;
    this.message = "";
  }

  downloadFile(fileName: string) {
    this.getFile(fileName).subscribe(response => {
      //used to fix ie and edge download blob issues
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(response, fileName);
      }
      else {
        var downloadUrl = URL.createObjectURL(response);

        let downLoadLink = document.createElement("a");
        document.body.appendChild(downLoadLink);
        downLoadLink.style.display = "none";

        downLoadLink.href = downloadUrl;
        downLoadLink.download = fileName;

        downLoadLink.click();
        window.URL.revokeObjectURL(downloadUrl);
      }      
    });
  }

  fileOverBase(event: boolean): void {
    this.isFileOverDropZone = event;
  }

  private getFile(fileName: string): Observable<Blob> {
    let params = new HttpParams().set('fileName', fileName);
    return this.http.get('/api/FileServer/GetFile', { params: params, responseType: "blob" });
  }
}
