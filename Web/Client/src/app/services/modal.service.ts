import { Injectable, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';

@Injectable()
export class ModalService {
  modalRef: BsModalRef;
  config: any = {
    class: 'modal-dialog-centered'
  }

  constructor(private bsModalService: BsModalService) {
    
  }

  openModal(template: TemplateRef<any>, cssClass?: string, backDrop?: string) {
    if (cssClass) {
      this.config.class += " " + cssClass;
    }
    if (backDrop) {
      this.config.backdrop = backDrop;
      this.config.keyboard = false;
    }
    this.modalRef = this.bsModalService.show(template, this.config);
  }

}
