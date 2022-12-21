window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });
  
  const createInnerHtml = () => {
  
    const headerHTML ="<th></th> <th>Name</th> <th>Gender</th>"+
                     "<th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
  
    const innerHtml = `${headerHTML}
      <tr>
        <td><img class="profile" src="../assets/profile-images/Ellipse -1.png" alt=""></td>
        <td>Mandira</td>
        <td>Female</td>
        <td>
          <div class="dept-label">HR</div>
          <div class="dept-label">Finance</div>
        </td>
        <td>3000000</td>
        <td>21 Nov 2022</td>
        <td>
          <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
          <img src="../assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
      </tr>`
      ;
    document.querySelector('#table-display').innerHTML = innerHtml;
  }

