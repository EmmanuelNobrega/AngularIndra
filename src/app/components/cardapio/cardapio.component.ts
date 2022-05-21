import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {
  @Input () imagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjI3lRjeOzOEettfuTSjy37Zb55iUpoHuQg&usqp=CAU"
  @Input () titulo = "Picanha Mal-Passada"
  @Input () endereco = "Rua Cicrano da Silva"
  @Input () cidade = "João Pessoa - PB"
  @Input () telefone = "(83) 98383-8383"

  constructor() { }

  ngOnInit(): void {
  }

}
