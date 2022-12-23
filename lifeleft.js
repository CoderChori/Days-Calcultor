// Age calculator is made to calculate the age with assumed 90 years of life 
function remaininglife(age)
{
    var days = age*365;
    var weeks = age*52;
    var months = age*12; 
    alert("your have "+ days +" days "+ weeks + " weeks "+ months +" months remaining.");
}
remaininglife(23);