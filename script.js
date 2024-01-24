// const CalculateTemp = () => {

//     const numberSelected = document.getElementById('temp').value;

//     const tempSelected = document.getElementById('tempDiff');
//     // const tempValue = tempSelected.options[tempSelected.selectedIndex].value;
//     const tempValue = tempSelected.value;


//     const celToFah = (cel) => {
//         let fah = Math.round((cel * 9 / 5) + 32);
//         return fah;
//     }
  
//     const fahToCel = (fah) => {
//         let cel = Math.round((fah - 32) * 5 / 9);
//         return cel;
//     }
  

//     let resultFinal;

//     if (tempValue == 'cel') {
//         resultFinal = celToFah(numberSelected);
//         document.getElementById('result').innerHTML = `= ${resultFinal} Fah`;

//     } else {
//         resultFinal = fahToCel(numberSelected);
//         document.getElementById('result').innerHTML = ` = ${resultFinal} cel`;

//     }
// }

// -------------------------------------------------------------------------------

// optimized js Code 


const CalculateTemp = () => {

    const numberSelected = document.getElementById('temp').value;
    const { value: tempValue } = document.getElementById('tempDiff');
  
    const celToFah = (cel) => {
      return ((cel * 9 / 5) + 32).toFixed(1);
    }
  
    const fahToCel = (fah) => {
      return ((fah - 32) * 5 / 9).toFixed(1);
    }
  
    let resultFinal;
  
    if (tempValue == 'cel') {
      resultFinal = celToFah(numberSelected);
    } else {
      resultFinal = fahToCel(numberSelected);
    }
  
    document.getElementById('result').innerHTML = `= ${resultFinal} ${tempValue == 'cel' ? 'Fah' : 'cel'}`;
  }
  