const panels = document.getElementById("panels");
const sun = document.getElementById("sun");

const panelValue = document.getElementById("panelValue");
const sunValue = document.getElementById("sunValue");

const solarResult = document.getElementById("solarResult");
const energyResult = document.getElementById("energyResult");

const statusBox = document.getElementById("statusBox");

const communityConsumption = 500;

// Cada panel representa una potencia teórica de 100 Wh
const energyPerPanel = 100;

function calculateEnergy() {

    const numberOfPanels = Number(panels.value);
    const sunlight = Number(sun.value);

    const energy =
        numberOfPanels *
        energyPerPanel *
        (sunlight / 100);

    panelValue.textContent = numberOfPanels;
    sunValue.textContent = sunlight + "%";

    solarResult.textContent = sunlight + "%";

    energyResult.textContent =
        Math.round(energy) + " Wh";

    if (energy >= communityConsumption) {

        statusBox.textContent =
            "✅ La energía producida puede cubrir el consumo representado.";

    } else {

        statusBox.textContent =
            "⚠️ La energía producida no cubre completamente el consumo representado.";

    }
}

panels.addEventListener("input", calculateEnergy);
sun.addEventListener("input", calculateEnergy);

calculateEnergy();