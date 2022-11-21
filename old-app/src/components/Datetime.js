import React from "react";

var dateTime = () =>
{
    var showdate = new Date();
    var displaytodaysdate = showdate.getMonth()+1 + '/'+showdate.getDate()+'/'+showdate.getFullYear();

    return(
    <div>
        <small style={{position: 'absolute' , left: 0, top: 0}}>{displaytodaysdate}</small>
    </div>
    );
}

export default dateTime;