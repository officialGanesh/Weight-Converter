console.log("Weight-Converter Using Javascript 🚀")

let kilogram = document.querySelector("#Kilogram");
let converter = document.querySelector("#Convert");
let card = document.querySelector("#card");
// console.log(kilogram,converter)

converter.addEventListener("click",function(){

    kg_value = kilogram.value;
    
    if(kg_value===null || kg_value===""){
        alert("Kilogram value is missing. ")
    }else{
        
        showConvertedWeights(kg_value)
    }
    kilogram.value=""
})

function showConvertedWeights(kg_units){

    let createdDiv = document.querySelector("#box");
    let html = ""
    
    html += `<ul class="list-group list-group-flush">
            <li class="list-group-item"><h4>Kilograms(Entered):${kg_units}(kg) </h4></li>
            <li class="list-group-item"><h4>In Grams: ${kg_units * 1000}(g)</h4></li>
            <li class="list-group-item"><h4>In Pounds: ${kg_units * 2.2046}(lb)</h4></li>
            <li class="list-group-item"><h4>In Ounces: ${kg_units * 35.2739}(oz)</h4></li>
        </ul>`;
    createdDiv.innerHTML = html;
}
