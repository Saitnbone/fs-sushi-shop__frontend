import React from "react";

const RestorantsMap = () =>{
    return(
        <div className='contact_main_blocks'>
                <div className='contact_map_block'></div>
                <div className='contact_vertical_line'></div>
                <div className='contact_information_block'>
                  <h2 className='title'>Store addresses</h2>
                  <ul className="store_addresses">
                    <li>Belgrade, Kraljice Marije 1, 11120 </li>
                    <li>Belgrade, Bulevar Mihaila Pupina 4, 11070</li>
                    <li>Belgrade, Vudroa Vilsona 14, 11000</li>
                  </ul>
                </div>   
        </div>
    )
};

export default RestorantsMap;
