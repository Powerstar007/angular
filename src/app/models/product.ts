export class Product {
    id: number;
    name: string;
    description: string;
    price:number;
    imageUrl:string;


  constructor(id=0,name='ABC',description='',price=0,imageUrl='https://www.youcandothecube.com/resources/images/assets/rubiks-cube-coloured.png'){
          this.id=id
          this.name=name
          this.description=description
          this.price=price
          this.imageUrl=imageUrl
  }
}
