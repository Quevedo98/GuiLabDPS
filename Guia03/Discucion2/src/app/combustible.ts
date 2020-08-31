export class Combustible {
   
   constructor(
    public tipo:string,
    public galones:number,
    public Total:number,
    ) {}
    calcular()
    {
        var totalf:number;
        switch(this.tipo)
        {
            
            case 'Regular':
                totalf= this.galones*4.05;
                break;
            case 'Especial':
                totalf=this.galones*4.25;
                break;
            case 'Diesel':
                totalf=this.galones*3.96;
                break;
        }
        this.Total=totalf;

    }
}
