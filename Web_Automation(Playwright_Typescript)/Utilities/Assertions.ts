import { expect, Page } from "@playwright/test";


export default class Assertions {

private readonly page : Page;    

 constructor (pagefrom_TC : Page){
  
    this.page = pagefrom_TC;

 }

 async AssertValueIsIncreased (FirstValue : number , SecondValue : number){

     expect(SecondValue).toBe(FirstValue +1);

 }

 async AssertValueIsDecreased ( ValueBeforeDelete : number , ValueAfterDelete : number){
   
    expect(ValueAfterDelete).toBe(ValueBeforeDelete -1);

 }
   
    
}