// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};

    function updateEmployeeWithKeyAndValue(employee,  streetAddress, value){
       return Object.assign({}, employee,{[streetAddress]:'11 Broadway'});
    }

    function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,value){
       employee[streetAddress]= '12 Broadway';
       return employee;
    }

    function deleteFromEmployeeByKey(employee,key){
        const newemployee =  Object.assign({},employee);
        delete newemployee[key];
        return newemployee;
    }

    function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee[key];
        return employee;
    }


