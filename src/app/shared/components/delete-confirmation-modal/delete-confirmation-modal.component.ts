import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';


/**
 * @ignore
 */
@Component({
  selector: 'app-delete-confirmation-modale',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.scss']
})
export class DeleteConfirmationModalComponent implements OnInit {

  title;
  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }


}
