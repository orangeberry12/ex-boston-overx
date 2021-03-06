var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a filtered list of salaries.
    //     Return salaries larger than exercise.salary
    //
    //     Example: salaries larger than 300K is 8
    // ---------------------------------------------------
    var filteredSalaries = [];
    for (i=0;i<exercise.salaries.length; i++){
        currentSalary = Number(exercise.salaries[i][18]);

       if (exercise.largerSalary(currentSalary)){
           filteredSalaries.push(currentSalary);
       };
    };
    return filteredSalaries;
};

// filter function
exercise.largerSalary = function largerSalary(item){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------
    var isLarger = (item>exercise.salary);
    return isLarger;
};