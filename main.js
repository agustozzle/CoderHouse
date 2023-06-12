let dias;
let dineroInicial = prompt("Ingresar dinero disponible");
let saldoFinalDia = dineroInicial;

function restar(a, b) {
  return a - b;
}

let opcionDias = prompt("Ingrese los días de su mes manualmente (ingrese '0' para seleccionar por mes)");

switch (opcionDias) {
  case "0":
    let mes = prompt("Seleccione un mes:\n1. Enero\n2. Febrero\n3. Marzo\n4. Abril\n5. Mayo\n6. Junio\n7. Julio\n8. Agosto\n9. Septiembre\n10. Octubre\n11. Noviembre\n12. Diciembre");

    switch (mes) {
      case "1":
        dias = 31;
        break;
      case "2":
        dias = 28; 
        break;
      case "3":
        dias = 31;
        break;
      case "4":
        dias = 30;
        break;
      case "5":
        dias = 31;
        break;
      case "6":
        dias = 30;
        break;
      case "7":
        dias = 31;
        break;
      case "8":
        dias = 31;
        break;
      case "9":
        dias = 30;
        break;
      case "10":
        dias = 31;
        break;
      case "11":
        dias = 30;
        break;
      case "12":
        dias = 31;
        break;
      default:
        alert("Esa opcion no es valida, se utilizará 30 dias.");
        dias = 30;
        break;
    }
    break;

  default:
    dias = parseInt(opcionDias);
    break;
}

for (let i = 0; i < dias; i++) {
  let dineroGastado = prompt(`Ingrese cuánto gastó en el día ${i + 1}`);
  saldoFinalDia = restar(saldoFinalDia, dineroGastado);

  if (saldoFinalDia < 0) {
    alert(`Su capital es insuficiente, por favor recargue. Tiene que abonar: ${saldoFinalDia}`);
    break; 
  } else {
    alert(`Su capital final en el día ${i + 1} es de ${saldoFinalDia}`);
  }
}

let totalGastado = restar(dineroInicial, saldoFinalDia);
let ahorro = restar(dineroInicial, totalGastado);
alert(`Usted pudo ahorrar este mes: ${ahorro}`);
