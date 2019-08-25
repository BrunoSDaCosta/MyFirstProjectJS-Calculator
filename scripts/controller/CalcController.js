class CalcController {
    
    constructor(){

        //Atributos / Variáveis - 
        // O Underline torna o atributo privado
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");     
        this._currentDate;        
        this.inicialize();
        this.initButtonEvents();
    }

    inicialize(){

        this.setDisplayDateTime();
            
            setInterval(()=>{

                this.setDisplayDateTime();

            }, 1000);

        }
    
    addEventListener(element, events, fn){

    }
    

    initButtonEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {

            btn.addEventListener('click', e => {

                console.log(btn.className.baseVal.replace('btn-', '').replace('soma', '+')
                .replace('porcento', '%').replace('divisao', '/').replace('multiplicacao', '*')
                .replace('subtracao', '-').replace('igual', '=').replace('ponto', '.'));
            });
        })
    }
        
 
    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    
    }

    // GET -- Recupera valores
    get displayTime(){
        return this._timeEl.innerHTML;
    }

    // SET - Atribui valores
    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }


    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        return this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        return this._currentDate.innerHTML = value;
    }
}