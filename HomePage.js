let empPayrollList;
window.addEventListener('DOMContentLoaded',(event) =>{
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('EmployeePayrollList')?JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

//Template literal ES6 feature
const createInnerHtml =()=>{
    
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+"<th>Salary</th><th>Start Date</th><th>Actions</th>";

    if(empPayrollList.length == 0) return;

    let innerHtml =`${headerHtml}`;

    // let empPayrollList =createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
        innerHtml=`${innerHtml}    
            <tr>
                <td><img class="profile" src="${empPayrollData._profilePic}" alt="Image is missing"></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${stringifyDate(empPayrollData._startDate)}</td>
                <td>
                    <img id="${empPayrollData._id}" onclick="remove(this)" src="C:\Users\sachi\Downloads\FS HTML_CSS LP02 Employee Payroll App Assets\assets\icons\delete-black-18dp.svg" alt="delete">
                    <img id="${empPayrollData._id}" onclick="update(this)" src="C:\Users\sachi\Downloads\FS HTML_CSS LP02 Employee Payroll App Assets\assets\icons\create-black-18dp.svg" alt="edit">
                </td>
            </tr>
        `;
    }
    
    document.querySelector('#table-display').innerHTML=innerHtml;
}

const getDeptHtml =(deptList) =>{
    let deptHtml ='';
    for(const dept of deptList){
        deptHtml=`${deptHtml}<div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () =>{
    let employeePayrollListLocal = [
        {
            _name: 'Narayan Mahadevan',
            _gender: 'male',
            _department:['Engineering','Finance'],
            _salary:'500000',
            _startDate:'29 Oct 2019',
            _note:'',
            _id:new Date().getTime(),
            _profilePic:'C:\Users\sachi\Downloads\FS HTML_CSS LP02 Employee Payroll App Assets\assets\profile-images\Ellipse -2.png'
        },
        {
            _name: 'Amarpa Shashanka keerthi kumar',
            _gender: 'female',
            _department:['Sales'],
            _salary:'400000',
            _startDate:'29 Oct 2019',
            _note:'',
            _id:new Date().getTime() +1,
            _profilePic:'C:\Users\sachi\Downloads\FS HTML_CSS LP02 Employee Payroll App Assets\assets\profile-images\Ellipse -1.png'
        }
    ];
    return employeePayrollListLocal;
}