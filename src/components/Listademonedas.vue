<template>
  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> -->
  <div>
    <h2>Lista de Monedas</h2>
    <div>
      <button @click="consultarPrecio()">Consultar...</button>
      <ul>
        <li v-for="elemento in info" :key="elemento.id">
          {{ elemento.code }} - {{ elemento.description }} -
          {{ elemento.rate_float }}
        </li>
      </ul>
    </div>
    <hr />

    <hr />
    <div>
      <!-- {{ fullName }} -->
      <!-- <button @click="completarNombre">Guardar historial</button> -->
      <button @click="saveH()">Guardar en store</button>
    </div>
    <hr />
    <div>
      <table class="default">
        <thead>
          <th>Code</th>
          <th>Description</th>
          <th>Rate</th>
        </thead>
        <tbody>
          <tr v-for="elemento in monedas" :key="elemento.id">
            <td>{{ elemento.code }}</td>
            <td>{{ elemento.description }}</td>
            <td>{{ elemento.rate }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr />
    <!-- <div v-for="elemento in info" :key="elemento.id">
      {{ elemento.code }} - {{ elemento.description }} - {{ elemento.rate }} 
    </div> -->
  </div>
</template>

<script>
//import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Listademonedas",
  data() {
    return {
      info: null,
      nombrecompleto: "",
      mostrar: [],
    };
  },
  mounted() {
    let moneda = JSON.parse(localStorage.getItem("historial"));
    if (moneda != null) {
      try {
        //this.monedas = JSON.parse(localStorage.getItem("historial"));
        this.setMonedas(moneda);
      } catch (e) {
        localStorage.removeItem("historial");
      }
    }
  },
  computed: {
    ...mapState(["name", "fullName", "monedas", "historico"]),
  },
  methods: {
    consultarPrecio() {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
          this.info = response.data.bpi;
          for (const key in this.info) {
            this.mostrar.push(this.info[key]);
          }
        });
    },
    ...mapMutations(["completarNombre", "saveMonedas", "setMonedas"]),
    crearnombre() {
      this.nombrecompleto = this.name + "Tzuc";
    },
    saveH() {
      this.saveMonedas(this.mostrar);
      localStorage.setItem("historial", JSON.stringify(this.monedas));
    },
  },
};
</script>