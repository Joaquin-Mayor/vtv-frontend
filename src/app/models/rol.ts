export class Rol{

    private id:number;
    private name:string;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    get getName(){
        return this.name;
    }
}