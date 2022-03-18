<template>
  <div>
    <div class="row">
      <h5>Componentes ventas de tren</h5>
    </div>
    <div class="row">
      <div v-if="showForm">
        <input type="text" placeholder="nombre" v-model="cliente" />
        <button @click="guardarDatos()">Guardar</button>
      </div>
    </div>
    <div class="row" v-if="showAsientos">
      <div
        class="col-2"
        @click="metodoShowAsientos(index)"
        v-for="(asientoDeTren, index) in asientosDeTren"
        :key="index"
      >
        {{ asientoDeTren.nombre }}
        <input
          class="img-fluid"
          alt="Responsive image"
          type="image"
          :src="require('@/assets/asientos/' + asientoDeTren.img)"
        />

        {{ asientoDeTren.totalDescuento }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "ventaDeBoletosDeTren",
  created() {
    this.iniAsientosDeTren();
  },
  data() {
    return {
      showAsientos: true,
      showForm: false,
      seleccionado: null,
      cliente: "",
      mostrar: [],
      info: null,
    };
  },
  mounted() {
    let datos = JSON.parse(localStorage.getItem("asiento"));
    if (datos != null) {
      try {
        //this.datos = JSON.parse(localStorage.getItem("historial"));
        this.setAsientos(datos);
      } catch (e) {
        localStorage.removeItem("asiento");
      }
    }
  },
  computed: {
    ...mapState(["asientosDeTren", "totalDeVentas", "historico"]),
  },
  methods: {
      consultarInfo() {
          if (!this.cliente) {
        return;
      }

      this.asientosDeTren.push(this.cliente);
      this.cliente = '';
      this.guardarDatos();
      },
    guardarDatos() {
      this.metodoShowAsientos(this.seleccionado);
      this.registrarVenta({ id: this.seleccionado, cliente: this.cliente });

      const parsed = JSON.stringify(this.asientosDeTren);
      localStorage.setItem('asiento', parsed);
    },
    metodoShowAsientos(id) {
      this.seleccionado = id;
      this.showAsientos
        ? (this.showAsientos = false)
        : (this.showAsientos = true);
      this.showForm ? (this.showForm = false) : (this.showForm = true);
    },
    /*saveAsientos() {
      const parsed = JSON.stringify(this.asientosDeTren);
      localStorage.setItem('historial', parsed);
    },*/
    ...mapMutations(["iniAsientosDeTren", "registrarVenta", "setAsientos"]),
  },
};
</script>

<style>
</style>