const calculateTemp = () => {
    const numbertemp = document.getElementById('temp').value;
    const tempselected = document.getElementById('tempopt');
    const valuetemp = tempopt.options[tempselected.selectedIndex].value;

    const celToFah = (cel) => {

        let fah = Math.round((cel * 9 / 5) + 32);
        return fah;
    }
    const fahToCel = (fahren) => {

        let celci = Math.round((fahren - 32) * 5 / 9);
        return celci;
    }


    let result;

    if (valuetemp === 'cel') {
        result = celToFah(numbertemp);
        document.getElementById('result-dis').innerHTML = `${result} Fahrenheit`;
    } else {
        result = fahToCel(numbertemp);
        document.getElementById('result-dis').innerHTML = `${result} Celsius`;
    }
}