



function calculateAge(){
    const birthdate = new Date (document. getElementById("birthdate").value);
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();


    if (months < 0){
        years--;
        months += 12;
    }


    if (days < 0){
        months--;

        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    document.getElementById("result").textContent = `your age is ${years} years, ${months} months, and ${days} days.`;
}