"use strict";
// interface in tsc
/**
interface lala{
   name: string;
   age: number;
   greet(): void;
}

const user : lala ={
   name : "hell0",
   age : 23,
   greet() {
      console.log("hello");
      
   },
}

user.greet();
 */
//extending interface in tsc
/**
interface person {
   name: string
}

interface employe extends person{
   empid : number;
}

const lala : employe ={
   name: "sourahh",
   empid: 99,
}

 */
// type aliases
/**
type snakhya =  number;

let a: snakhya;


   type  arg =  string | null

    function  abcd(obj : arg)
    {
    
    }
    abcd()

 */
/**
type user ={
name: string,
email: string,
}
type admin ={
gata(): void,
age: number,
}

type lala  = user & admin;

function and(data:lala)
{
 data.name = "kanu"
}

*/
//  class in tsc
/**
class device{
   name= "lg";
   price  = 1200;
   cateri = "digital"
}

let a = new device ()
console.log(a.cateri);

*/
/**
class  bottle{
   constructor(public name : string ,public age : number)
   {

   }
   
}

let a = new bottle("lala",12)
console.log(a.name);
*/
// this in tsc
/**
class abcd{
   name ="lala";
   changename()
   {
      this.name = "lala1"
   }
}
   */
/**
class bottleMake{
   constructor(public  name:string)
   {}
      changename(){
        this.name  ="hello";
      }
      

   
}
let a = new bottleMake("lala")

console.log();
*/
// staatic  and abstraion in tsc
/**
class control{
  static version  = 34;
  static data()
  {
   console.log("ata");
   
  }

}
console.log(control.version);

abstract class animal
{
   abstract makesoud() : void;
   move(): void{
      console.log("hello");
      
   }
}
class Dog extends animal {
   makesoud(): void {
       console.log("Bark! Bark!");
   }
}
const dog = new Dog();
console.log(dog.makesoud());

// */ 
