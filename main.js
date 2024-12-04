var hInput = document.querySelector("#heightInput")
var wInput = document.querySelector("#weightInput")
var normalImg1 = document.getElementById("normal1")
var normalImg2 = document.getElementById("normal2")
var normalImg3 = document.getElementById("normal3")
var normalImg4 = document.getElementById("normal4")
var rst = document.getElementById("myForm").reset();
// var bmi, height, weight;
function calculateBMI() {

    let height = hInput.value;
    let weight = wInput.value;
    let bmi = weight/(height*height); 
  

     
    bmiresult.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
    

    if((bmi < 18.5) && (bmi != 0) ){
        document.getElementById("result").innerHTML = `Your BMI falls within the underweight ${normalImg1.style.display = 'block'}`;    
    }else if((bmi > 18.5) && (bmi < 24.9)){
        document.getElementById("result").innerHTML = `Your BMI falls within the normal or healthy weight ${normalImg2.style.display = 'block'}`;
    }else if((bmi > 24.9) && (bmi < 29.9 )){
        document.getElementById("result").innerHTML = `Your BMI falls within the overweight ${normalImg3.style.display = 'block'}`;
    }else if(bmi > 29.9){
        document.getElementById("result").innerHTML = `Your BMI falls within the obese ${normalImg4.style.display = 'block'}`;
    }
    else{
        document.getElementById("result").innerHTML = "Enter valid Data";
    }
}
const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
