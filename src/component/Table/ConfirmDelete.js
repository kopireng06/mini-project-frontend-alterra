import { motion } from "framer-motion";
import trash from './trash.png'

const initial = {
    scale:0
}

const animate={
    scale:1.1
}

const styleContainer = {
    backgroundColor:"rgba(0,0,0,0.5)"
}

const ConfirmDelete = ({confirmDelete,deleteMutator,setConfirmDelete}) => {
    console.log(confirmDelete);

    if (confirmDelete.condition==false) return null

    const {id} = confirmDelete
    const handleClickCancel = ()=>{
        setConfirmDelete({
            condition:false,
            id:0
        })
    }

    return ( 
        <motion.div className="fixed z-10 flex justify-center items-center 
        h-screen w-full top-0 left-0" style={styleContainer}>
            <motion.div initial={initial} animate={animate} className="bg-white rounded shadow p-10">
                <img src={trash} className="h-10 mx-auto mb-3" alt="delete" />
                <div className="text-center font-semibold text-xl text-red-600 nunito bg-white">Are You Sure ?</div>
                <div className="text-center text-gray-800 bg-white">this action cannot be revert !</div>
                <div className="w-full bg-white flex justify-between mt-3">
                    <button onClick={()=>deleteMutator({variables:{id:id}})} className="p-3 
                    bg-blue-600 rounded text-white text-sm">
                        YES OF COURSE
                    </button>
                    <button onClick={handleClickCancel} className="p-3 bg-red-600 text-white rounded text-sm">CANCEL</button>
                </div>
            </motion.div>
        </motion.div>
    );
}
 
export default ConfirmDelete;