function findOnu(filepath) {
    const addedBlock = document.getElementById('onu-list');
    let counter = 1;

    fetch(filepath)
        .then(response => response.json())
        .then(onuData => {

            // circe elements from json file

            for (const item of onuData) {
                let addedCode = `<div>${counter}</div>`;
                addedCode += `<div>${item.uid}</div>`;
                addedCode += `<div>${item.login}</div>`;
                addedCode += `<div>${item.olt}</div>`;
                addedCode += `<div>${item.brand}</div>`;
                addedCode += `<div>${item.serial}</div>`;
                addedCode += `<div>${item.onuMac}</div>`;
                addedCode += `<div>${item.slot}</div>`;
                addedCode += `<div>${item.branch}</div>`;
                addedCode += `<div>${item.port}</div>`;
                addedBlock.innerHTML += addedCode;
                counter++;
            }
        })
        .catch(errorMessage => console.error(errorMessage));
}



findOnu('../json/smukyvtci/onu-list.json');