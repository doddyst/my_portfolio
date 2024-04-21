import React from 'react'
import { projectsData } from './data'
import WorksItems from './worksitems';

const Works = () => {
  return (
  <div>
    <div className='work_container container grid'>
        {projectsData.map((item)=>{
            return <WorksItems item={item} key={item.id}/>
            })}
    </div>
  </div>
  );
};

export default Works;
