import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { ItemService } from './item.service';
import { Item, Items } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';

  public itemsList: Items = { status: "", items: [] };
  public items: Item[] = [];
  public imgUrls: string[] = [];
  public myScrollContainer!: HTMLElement;

  constructor(private elmRef: ElementRef, public itemService: ItemService) { }

  ngOnInit() {
    this.myScrollContainer = this.elmRef.nativeElement.querySelector('#my-scroll-container');
    this.getAllItems();
  }

  private getAllItems() {
    this.itemService.getAllItems().subscribe((res: Items) => {
      this.itemsList = res;
      this.items = res.items;
      this.items.forEach(item => {
        this.imgUrls.push(item.url);
      });
      this.getImages();
      console.log("items list ............ ", this.items);
      console.log("imgUrls list ............ ", this.imgUrls);
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  private getImages() {

  }
}
