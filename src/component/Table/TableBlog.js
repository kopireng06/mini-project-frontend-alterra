import { queryGetBlog,mutationDeleteBlog } from "./queryTable";
import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import look from './look.png';
import pen from './pen.png';
import trash from './trash.png';
import { useEffect,useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

const TableBlog = () => {
    
    const {data:dataBlog,loading:loadingGetBlog,refetch} = useQuery(queryGetBlog);
    const [deleteBlog] = useMutation(mutationDeleteBlog,{
        onCompleted:()=>window.location.href="/blog"
    });
    const [confirmDelete,setConfirmDelete] = useState({
        condition:false,
        id:0
    });

    const handleClickTrash = (id)=>{
        setConfirmDelete({
            condition:true,
            id:id
        })
    }

    if(loadingGetBlog){
        return null
    }

    return ( 
        <div className="my-24 mb-10 lg:container mx-auto">
            <div className="w-10/12 mx-auto">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataBlog.my_blog_blog.map((data) => (
                        <TableRow
                            key={data.id_blog}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{data.id_blog}</TableCell>
                            <TableCell>{data.title_blog}</TableCell>
                            <TableCell>
                                <Link to={`/blog/${data.link_blog}`}>
                                    <img src={look} className="h-5 inline-block mx-2" alt="read" />
                                </Link>
                                <Link to={`/blog/edit/${data.id_blog}`}>
                                    <img src={pen} className="h-5 inline-block mx-2" alt="edit" />
                                </Link>
                                <Link to="#" onClick={()=>handleClickTrash(data.id_blog)}>
                                    <img src={trash} className="h-5 inline-block mx-2" alt="delete" />
                                </Link>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ConfirmDelete 
                confirmDelete={confirmDelete} 
                deleteMutator={deleteBlog} 
                setConfirmDelete={setConfirmDelete}
            />
            <Link to="/blog/create" className="fixed bottom-10 right-10 bg-blue-600 
            text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                +
            </Link>
            </div>
        </div>
    );
}
 
export default TableBlog;