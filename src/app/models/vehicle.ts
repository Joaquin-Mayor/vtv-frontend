import { Shift } from "./shift";

export class Vehicle{

    private id:string;
    private type:string;
    private patent:string;
    private kilometres:number;
    private model:string;
    private enabled:boolean;
    private shifts:Shift[];

    constructor(id:string,type:string,patent:string,kilometres:number,model:string,enabled:boolean){
        this.id = id;
        this.type = type;
        this.patent = patent;
        this.kilometres = kilometres;
        this.model = model;
        this.enabled = enabled;
        this.shifts = [];
    }
    
    setId(id:string){
        this.id = id;
    }

    setType(type:string){
        this.type = type;
    }

    setPatent(patent:string){
        this.patent = patent;
    }

    setKilometres(kilometres:number){
        this.kilometres = kilometres;
    }

    setModel(model:string){
        this.model = model;
    }

    setEnabled(enabled:boolean){
        this.enabled = enabled;
    }

    setShift(shift:Shift){
        this.shifts.push(shift);
    }

    get getType(){
        return this.type;
    }

    get getPatent(){
        return this.patent;
    }

    get getKilometres(){
        return this.kilometres;
    }

    get getModel(){
        return this.model;
    }

    get getEnabled(){
        return this.enabled;
    }

    public getOneShift(patent:string){
        
        return this.shifts.find(shift=>{
            return shift.getPatent === patent;
        });
    }

    get getShifts(){
        return this.shifts;
    }

}