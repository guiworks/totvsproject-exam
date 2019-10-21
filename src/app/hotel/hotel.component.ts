import { Component, OnInit, Inject } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './hotel.component.html'
})
export class HotelComponent implements OnInit {
  hoteis: Hotel[];
  selectedRow: undefined;
  closeResult: string;
  searchTerm: string;
  message: string;

  constructor(private hotelService: HotelService, private modalService: NgbModal, public dialog: MatDialog) { }

  ngOnInit() {
    this.getHotel();
  
  }

  getHotel(): void{
    this.hotelService.getHotel().subscribe(hoteis => this.hoteis = hoteis);
  }

  open(content, tableRow) {

    this.selectedRow = tableRow;
    console.log(content)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    console.log(tableRow);
    //this.selectedRow = {id:tableRow.id, nome: tableRow.nome, descricao:tableRow.descricao, valor:tableRow.valor};
  }

}

