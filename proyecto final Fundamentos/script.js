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
      const OndeckRes = OnDeck.includes(estadoSeleccionado);
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
        resultado += "El estado está restringido por OnDeck.<br>";
      }
      if (FundingCircleRes) {
        resultado += "El estado está restringido por el FundingCircle 2.<br>";
      }
      if (FWRes) {
        resultado += "El estado está restringido por el FundingCircle 2.<br>";
      }
      if (KapitusRes) {
        resultado += "El estado está restringido por el FundingCircle 2.<br>";
      }
      if (ByzfunderRes) {
        resultado += "El estado está restringido por el FundingCircle 2.<br>";
      }
      if (IOURes) {
        resultado += "El estado está restringido por el FundingCircle 2.<br>";
      }
      if (ApexRes) {
        resultado += "El estado está restringido por el FundingCircle 2.<br>";
      }
      if (EverestRes) {
        resultado += "El estado está restringido por el FundingCircle 2.<br>";
      }
      if (TorroRes) {
        resultado += "El estado está restringido por el FundingCircle 2.<br>";
      }
      // Agrega más condiciones según tus arrays de prestamistas

      if (resultado == ""); {
        resultado = "El estado no está restringido por ningún prestamista.";
      }

      document.getElementById("resultado").innerHTML = resultado;
    }
    function borrarResultado() {
      document.getElementById("resultado").innerHTML = "";
    }