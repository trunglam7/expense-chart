const maxHeight = 155;

fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {

        const maxValue = Math.max(...data.map(x => x.amount));

        for(let i = 0; i < 7; i++){
            const amount = document.getElementById(`${i}`).lastElementChild;
            const day = document.getElementById(`${i}`).firstElementChild.nextElementSibling;
            
            if(data[i].amount === maxValue){
                day.style.height = maxHeight + "px";
                day.style.backgroundColor = "hsl(186, 34%, 60%)";
                
            }
            else{
                const newHeight = data[i].amount * maxHeight / maxValue;
                day.style.height = newHeight + "px";
            }

            amount.innerHTML = "$" + data[i].amount;
        }
    });