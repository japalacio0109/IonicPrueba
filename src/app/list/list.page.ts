import { Component, OnInit, Input } from '@angular/core';
import { Documento } from '../models/documento'
import { DocumentoService } from '../documento.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  @Input() documentos: Documento[];
  private selectedItem: any;

  constructor(private documentoService: DocumentoService) {

  }

  ngOnInit() {
    this.getDocumentos();
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  getDocumentos(): void {
    this.documentoService.getDocumentos()
    .subscribe(documentos => {
      this.documentos = documentos;
    });
  }
}
