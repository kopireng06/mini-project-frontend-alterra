import {gql, useQuery} from '@apollo/client';
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

const queryGetCategoryBlog = gql`query MyQuery {
    my_blog_categories {
      name_categories
      id_categories
    }
  }
`  

const TableCategoryBlog = () => {

    const {data:dataCategoryBlog,loading:loadingCategoryBlog} = useQuery(queryGetCategoryBlog);

    if(loadingCategoryBlog){
        return null
    }

    return ( 
        <div className="my-24 lg:container mx-auto">
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
                        {dataCategoryBlog.my_blog_categories.map((data) => (
                        <TableRow
                            key={data.id_categories}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{data.id_categories}</TableCell>
                            <TableCell>{data.name_categories}</TableCell>
                            <TableCell>
                                <Link to={`/blog/category/${data.name_categories}`}>
                                    <img src={look} className="h-5 inline-block mx-2" alt="read" />
                                </Link>
                                <Link to={`/category/edit/${data.id_categories}`}>
                                    <img src={pen} className="h-5 inline-block mx-2" alt="edit" />
                                </Link>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            <Link to="/category/create" className="fixed bottom-10 right-10 bg-blue-600 
            text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                +
            </Link>
        </div>
     );
}
 
export default TableCategoryBlog;