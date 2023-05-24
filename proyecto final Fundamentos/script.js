    // Arrays de prestamistas con estados restringidos
    const OnDeck = ["NV", "ND", "SD"];
    const FundingCircle = ["NV"];
    const FW = ["AR"];
    const Kapitus = ["AR", "NY"];
    const Byzfunder = ["CA"];
    const IOU = ["CA", "MT", "NV", "SD", "VT", "HI"];
    const Apex = ["CA", "VA", "NY"];
    const Everest = ["VA"]
    const Torro = ["MA"]
    // Agrega más arrays de prestamistas según tus necesidades

    function verificarRestriccion() {
      const estadoSeleccionado = document.getElementById("estados").value;
    //Verificando el Estado Seleccionado
      console.log(estadoSeleccionado)
      const OndeckRes = OnDeck.includes(estadoSeleccionado);
    //Verificando que nos reporte un valor booleando de true or false si encuentra
    //El valor del array
      console.log(OndeckRes)
      const FundingCircleRes = FundingCircle.includes(estadoSeleccionado);
      const FWRes = FW.includes(estadoSeleccionado);
      const KapitusRes = Kapitus.includes(estadoSeleccionado);
      const ByzfunderRes = Byzfunder.includes(estadoSeleccionado);
      const IOURes = IOU.includes(estadoSeleccionado);
      const ApexRes = Apex.includes(estadoSeleccionado);
      const EverestRes = Everest.includes(estadoSeleccionado);
      const TorroRes = Torro.includes(estadoSeleccionado);

      // Agrega más variables de restricción según tus arrays de prestamistas

      let resultado = "";

      if (OndeckRes) {
        console.log(OndeckRes)
        resultado = "El estado está restringido por OnDeck.<br>";
      }
      if (FundingCircleRes) {
        resultado += "El estado está restringido por FundingCircle .<br>";
      }
      if (FWRes) {
        resultado += "El estado está restringido por FundWorks .<br>";
      }
      if (KapitusRes) {
        resultado += "El estado está restringido por Kapitus .<br>";
      }
      if (ByzfunderRes) {
        resultado += "El estado está restringido por Byzfunder .<br>";
      }
      if (IOURes) {
        resultado += "El estado está restringido por IOU .<br>";
      }
      if (ApexRes) {
        resultado += "El estado está restringido por Apex/Influx .<br>";
      }
      if (EverestRes) {
        resultado += "El estado está restringido por Everest .<br>";
      }
      if (TorroRes) {
        resultado += "El estado está restringido por Torro .<br>";
      }
      //Else con resultado negado lógicamente
      else (!resultado); {
      console.log(resultado)
      resultado += "El estado no está restringido por ningún prestamista.";
      }
      document.getElementById("resultado").innerHTML = resultado;
    }

    function borrarResultado() {
      document.getElementById("resultado").innerHTML = "";
    }


    function verificarRestriccion2() {
      const estadoSeleccionado = document.getElementById("estados").value;
    
      let resultado2 = "";
    
      switch (estadoSeleccionado) {
        case "":
          resultado2 = "Selecciona un estado.";
          break;
        case "AL":
        case "AK":
          resultado2 = "El estado no está restringido por ningún prestamista.";
          break;
        case "NV":
        case "ND":
        case "SD":
          resultado2 = "El estado está restringido por OnDeck.";
          break;
        case "AR":
          resultado2 = "El estado está restringido por FW y Kapitus.";
          break;
        case "NY":
          resultado2 = "El estado está restringido por Kapitus.";
          break;
        case "CA":
          resultado2 = "El estado está restringido por Byzfunder y Apex.";
          break;
        case "MT":
        case "VT":
        case "HI":
          resultado2 = "El estado está restringido por IOU.";
          break;
        case "VA":
          resultado2 = "El estado está restringido por Apex y Everest.";
          break;
        case "MA":
          resultado2 = "El estado está restringido por Torro.";
          break;
        default:
          resultado2 = "El estado no está restringido por ningún prestamista.";
          break;
      }
    
      document.getElementById("resultado2").innerHTML = resultado2;
    }