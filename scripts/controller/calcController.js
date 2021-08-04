class CalcController{
    
    constructor(){
        this._operation = [];
        this._locate = "pt-BR"
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate; 
        this.initialize();
        this.initButtonsEvents();
        
    }

    initialize(){
        this.setDisplayDateTime();
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
        
    }

    addEventListenerAll(element, events, fn){
        events.split(" ").forEach(event =>{
            element.addEventListener(event, fn, false);
        });
    }

    clearAll(){
        this._operation = null;
    }
    clearEntry(){
        this._operation.pop();
    }
    addOperation(value){
        this._operation.push(value);
    }
    setError(){
        this.displayCalc = "error"
    }

    execBtn(valuee) {
        switch (valuee) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearAll();
                break;
            case 'soma':
                this.clearAll();
                break;
            case 'subtracao':
                this.clearAll();
                break;
            case 'multiplicacao':
                this.clearAll();
                break;
            case 'divisao':
                this.clearAll();
                break;
        
            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click drag', e=>{
                let textBtn = btn.className.baseVal.replace("btn-", " ");
                console.log(textBtn);
                this.execBtn(textBtn);
            });
            
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=>{
                btn.style.cursor = "pointer";
            });
        });
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locate);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locate);
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayTime() {
        return this._TimeEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate(){
        return new Date;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }
}