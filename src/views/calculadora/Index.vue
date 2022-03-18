<template>
  <div>Hello World</div>
      <div id="app">
        <div>
            <h2>{{titulo}}</h2>
        </div>
        <div class="container">
            <div class="display">

            </div>
            <div class="row m-3">
                <div class="col">Calculadora
                    <div class="row m-5">
                        <div class="col">
                            <button class="btn btn-info" @click="botones(1)">1</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-info" @click="botones(2)">2</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-info" @click="botones(3)">3</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-info" @click = "suma('+')">+</button>
                        </div>
                    </div>
                    <div class="row m-5">
                        <div class="col">
                            <button class="btn btn-info" @click="botones(4)">4</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-info" @click="botones(5)">5</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-info" @click="botones(6)">6</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-info" @click = "resta('-')">-</button>
                        </div>
                    </div>
                    <div class="row m-5">
                        <div class="col">
                            <button class="btn btn-info" @click="botones(7)">7</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-info" @click="botones(8)">8</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-info" @click="botones(9)">9</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-info" @click = "multi('*')">*</button>
                        </div>
                    </div>
                    <div class="row m-5">
                        <div class="col">
                            <button class="btn btn-info" @click="botones(0)">0</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-info" @click="limpiar()">C</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-info" @click = "div('/')">/</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-info" @click = "result()">=</button>
                        </div>
                    </div>
                </div>
                <div class="col">Operaciones
                    <div>
                        <ul>
                            <li id= "app">
                                {{historial2}}
                                <span>
                                    {{historial3}}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="row">
                        <input v-model="display" type="text" class="form-control">
                    </div>

                    <!--<div id="app">
                        <h2></h2>
                        <div v-for="(cat, n) in cats">
                          <p>
                            <span class="cat"> {{n}} -
                                {{ cat }}</span>
                            <button @click="removeCat(n)">Eliminar</button>
                          </p>
                        </div>
                        <p>
                          <input v-model="newCat">
                          <button @click="addCat">Agregar</button>--
                </div>-->
                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 name: "Index",
 data() {
    return {
      titulo: 'Calculadora Vue.js',
        display: '',
        op1: null,
        operador1: null,
        name: 'Sandra',
        ver: false,
        historial: [

        ],

        historial2: 'aquí va mi historial',
        historial3: 'Loanding... LOL',

        message: 'Hola vue',
        contador: 0,
        cats: [],
      newCat: null,
      parsed: null,
    };
  },
  methods: {
        //previo(){
            //this.op2 = this.display;
            //this.ver = true;
        //},
        limpiar(){
            this.display = '';
        },
        suma(){
            this.operador1 = (a, b) => a + b;
            this.operacion();
        },
        resta(){
            this.operador1 = (b, a) => a - b;
            this.operacion();
        },
        multi(){
            this.operador1 = (a, b) => a * b;
            this.operacion();
        },
        div(){
            this.operador1 = (b, a) => a / b;
            this.operacion();
        },
        operacion(){ this.op1 = this.display;
            this.ver = true;
           
        },
        botones(numero){
            //  console.log(numero);
            //if(this.display == 0){
                //this.display = numero;
            //} else
            //this.display = this.display + '' + numero;
            if (this.ver) {
                this.display = '';
                this.ver = false;
            }
            this.display = `${this.display}${numero}`;
        },
        result(){
            //numero = this.display;
            this.display = this.operador1( parseInt(this.display), parseInt(this.op1));
            //this.display = parseInt(this.operador1), parseInt(this.operacion);
            this.history();
        },
        history(){
            numero = this.operador1(this.display);
            this.historial.push({tipo: '+, -, *, /', op1: parseInt(this.op1), op2: parseInt(numero), resultado: this.display});
        },

        reversef() {
            //  console.log("variable mensaje");
            this.message = this.message.split('').reverse().join('');
        },
        incremento() {
            this.contador = this.contador + 1;
        },

        addCat() {
            // asegurarse que el usuario efectivamente ha escrito algo
            if (!this.newCat) {
              return;
            }
      
            this.cats.push(this.newCat);
            this.newCat = '';
            this.saveCats();
          },
          removeCat(x) {
            this.cats.splice(x, 1);
            this.saveCats();
          },
          saveCats() {
            this.parsed = JSON.stringify(this.cats);
            localStorage.setItem('cats', this.parsed);
          }
    }
}
</script>

<style>

</style>