import React,{ useState } from "react";
import useCourseStore from "../Store/Store";

const Courseform = () => {
    const addCourse = useCourseStore((state)=>state.addCourse);
    const [courseTitle,setCourseTitle] = useState("");

    const handleSubmit = ()=>{
        if (!courseTitle) return alert("please add title");
        addCourse({
            id: Math.ceil(Math.random()*1000000),
            title:courseTitle,

        })
        setCourseTitle("");
    }
  return (
    <div className="form-container ">
    
      <input onChange={(e)=>setCourseTitle(e.target.value)} value={courseTitle} className="form-input"  />
    <button onClick={()=>handleSubmit()} className="form-submit-btn">Submit</button>
    </div>
  )
}

export default Courseform
