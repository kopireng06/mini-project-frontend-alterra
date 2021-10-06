import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './MyReactQuill.css'

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote','code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
  
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote','code-block',
    'list', 'bullet', 'indent',
    'link', 'image'
]
  
const MyReactQuill = ({content,setContent,error})=> {;
    return (
        <>
            <label className="block col-span-12 nunito mx-2 font-semibold text-global-dark-blue">Content</label>
            <div className="col-span-12 mt-2 mx-2 shadow">
                <ReactQuill theme="snow"  modules={modules}
                formats={formats} value={content} onChange={setContent}/>
            </div>
            {error ? <p className="text-red-600 col-span-12 mt-2 mx-2 text-sm font-semibold">{error}</p>:<p></p>}
        </>
    );
}

export default MyReactQuill;