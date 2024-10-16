import axios from "axios"
import { useNavigate } from "react-router-dom"

export const columns = [ 
    {
        name:"S No.",
        selector:(row) => row.sno
    },
    {
        name:"Department Name",
        selector:(row) => row.dep_name,
        sortable:true
    },
    {
        name:"Action",
        selector:(row) => row.action
    },
]

export const DepartmentButtons = ({_id}) =>{
    const navigate = useNavigate() 

    return (
        <div className="flex space-x-3" >
            <button className="px-3 py-1 bg-teal-600 text-white "
            onClick={()=>navigate(`/admin-dashboard/department/${_id}`)}
            >Edit</button>
        </div>
    )
} 