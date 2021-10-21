import React from 'react'
import UserImage from "../images/no_image.png"

function UserInfComp() {
    return (
        <div class="user-dashboard">
        <div class="employee-info">
         <div  class="image">
             <img src={UserImage} />
         </div>
         <div class="info">
          <h1 class="employee-name">Employee Name</h1>
          <h1 class="employee-surname">Employee Surame</h1>
          <h3 class="email">Email: employee@org.com</h3>
          <h3 class="work-hours">Work Hours: xx</h3>
         </div>
        </div> 
        <div class="calendar">
  
        </div>
      </div>
    )
}

export default UserInfComp
