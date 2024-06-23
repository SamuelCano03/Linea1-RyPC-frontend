import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: `
 li {
    list-style-type: none;
    margin: 3rem;
    width: 100%;
}
a{
    color: black;
}
.litem {
    background-color: greenyellow;
    border-radius: 20px;
    padding: 1rem;
    text-decoration: none;
    color: black;
    font-weight: bold;
}
.litem:hover {
    background-color: rgb(109, 163, 0);
}
`
})
export class HomeComponent {

}
