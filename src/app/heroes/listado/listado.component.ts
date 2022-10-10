import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  public heroeBorrado: string = '';
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America']

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

}
