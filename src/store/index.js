import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    name: 'Sandra',
    fullName: '',
    monedas: [],
    totalDeVentas: 0,
    asientosDeTren: [],
    descuentoTren: [],
    historico: [] /*[
      {
        folio: "label",
        estado: "true",
        nombre: "",
        img: "disponible.png",
        costo: 2500,
      },
      {
        folio: "label",
        estado: "true",
        nombre: "",
        img: "disponible.png",
        costo: 2500,
      },
      {
        folio: "label",
        estado: "true",
        nombre: "",
        img: "disponible.png",
        costo: 2500,
      },
    ],*/,
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
    iniAsientosDeTren(state) {
      /*const trab = "3";
      const d1 = 1;
      const d2 = 2;
      const d3 = 3;
      let sueldo = 0;
      if (d1 == trab) {
        sueldo = 100
      } else {
        if (d2 == trab) {
          sueldo = 80
        } else {
          sueldo = 120
        }
      }

      switch (trab) {
        case 1:
          sueldo = 100;
          break;

        case 2:
          sueldo = 80;
          break;

        case 3:
          sueldo = 120;
          break;
        default:
          //  codigo
          break;
      }

      while(condicion){
        //  Codigo
      }

      do{

      }while(condicion);

      alert(sueldo)*/



      for (let j = 0; j < 5; j++) {

          switch (j) {
            case 0: state.descuentoTren = 2500;
            break;
            case 1: state.descuentoTren = 2500*0.95;
            break;
            case 2: state.descuentoTren = 2500*0.90;
            break;
            case 3: state.descuentoTren = 2500*0.85;
            break;
          }

          /*if (j <= 0) {
            descuento = costo1
          } else {
            if (j <= 1) {
              descuento = costo1 - (2500*0.05)
            } else {
              if (j <=2) {
                descuento = costo1 - (2500*0.10)
              } else {
                if (j <=3) {
                  descuento = costo1 - (2500*0.15)
                } else {
                  if (j <=4) {
                    descuento = costo1
                  }
                }
              }
            }
          }*/

        for (let k = 0; k < 6; k++) {

          state.asientosDeTren.push({
            folio: "label",
            estado: "true",
            nombre: j + "" + k,
            img: "disponible.png",
            costo: 2500,
            totalDescuento: state.descuentoTren,
          });
        }
      }
    },
    registrarVenta(state, registro) {
      state.asientosDeTren[registro.id].img = 'ocupado.png';
      const a = registro.cliente.split(" ");
      state.asientosDeTren[registro.id].nombre = a[0].substring(0, 1) + a[1].substring(0, 1);
      state.totalDeVentas = state.totalDeVentas + state.asientosDeTren[registro.id].costo;
    },
    completarNombre(state) {
      state.fullName = state.name;
  },
  setMonedas(state, par1) {
    state.monedas = par1;
  },
  setAsientos(state, par) {
    state.asientosDeTren = par;
  },
  /*agregarInfo(state, registros) {
    for (const registro in registros) {
      state.historico.push({ 'code': registros[registro].code, description: registros[registro].description, rate: registros[registro].rate });

      console.log(registros[registro].code, registros[registro].description, registros[registro].rate);
    }
  }
},*/
saveMonedas(state, elemento) {
  for (let key in elemento) {
    state.monedas.push({
      code: elemento[key].code,
      description: elemento[key].description,
      rate: elemento[key].rate,
    });
    console.log(elemento[key].code, elemento[key].description, elemento[key].rate);
  }
},
  },
  actions: {},
  modules: {},
})
