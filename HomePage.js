window.addEventListener('DOMContentLoaded',(event) =>{
    createInnerHtml();
});

//Template literal ES6 feature
const createInnerHtml =()=>{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+"<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml =`${headerHtml}
        <tr>
            <td><img class ="profile" src="C:\Users\sachi\Downloads\FS HTML_CSS LP02 Employee Payroll App Assets\assets\profile-images\Ellipse -2.png" alt="image is missing"></td>
            <td>Narayan Mahadevan</td>
            <td>Male</td>
            <td><div class='dept-label'>HR</div><div class ='dept-label'>Finance</div></td>
            <td>300000</td>
            <td>1 Nov 2020</td>
            <td>
                <img name="1" onclick="remove(this)" src="C:\Users\sachi\Downloads\FS HTML_CSS LP02 Employee Payroll App Assets\assets\icons\delete-black-18dp.svg" alt="delete">
                <img name="1" onclick="update(this)" src="C:\Users\sachi\Downloads\FS HTML_CSS LP02 Employee Payroll App Assets\assets\icons\create-black-18dp.svg" alt="edit">
            </td>
        </tr>
    `;
    document.querySelector('#table-display').innerHTML =innerHtml;
}