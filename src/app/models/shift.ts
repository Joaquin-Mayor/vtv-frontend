export class Shift{
    
    private id:string;
    private sku:string;
    private amount:number;
    private date:Date;
    private enabled:boolean;
    private patent:string;

    constructor(id:string,sku:string,amount:number, date:Date, enabled:boolean,patent:string){
        this.id = id;
        this.sku = sku;
        this.amount = amount;
        this.date = date;
        this.enabled = enabled;
        this.patent = patent;
    }

    public setId(id:string){
        this.id = id;
    }

    public setSku(sku:string){
        this.sku = sku;
    }

    public setAmount(amount:number){
        this.amount = amount;
    }

    public setDate(date:Date){
        this.date = date;
    }

    public setEnabled(enabled:boolean){
        this.enabled = enabled;
    }

    public setPatent(patent:string){
        this.patent = patent;
    }

    get getId(){
        return this.id;
    }

    get getSku(){
        return this.sku;
    }
    
    
    get getAmount(){
        return this.amount;
    }

    get getDate(){
        return this.date;
    }

    get getEnabled(){
        return this.enabled;
    }

    get getPatent(){
        return this.patent;
    }


}