import { useHistory } from 'react-router-dom'
import { useAuth } from '../GlobalState/Auth';
import { useState } from 'react';
import { inputEmailLogin,inputPasswordLogin } from './InputConfig';
import useManageInput from "./useManageInput";
import { InputText } from "./InputCreator";

export default function FormLogin() {

    const [errorMessage,setErrorMessage] = useState(null);
    const emailInput = useManageInput(inputEmailLogin);
    const passwordInput = useManageInput(inputPasswordLogin);
    const { signIn } = useAuth();
    const history = useHistory();
  
    async function handleSubmit(e) {
      e.preventDefault();
      const email = emailInput.getValue();
      const password = passwordInput.getValue();
      const { error } = await signIn({ email, password });
      if (error) {
        setErrorMessage("Error, email or password not match");
      } else {
        history.push('/table-blog');
      }
    }
      
    return (
      <div className="w-full h-screen flex justify-center items-center pb-20">
        <form className="mt-32 w-10/12 md:w-8/12 lg:w-4/12 rounded-lg shadow-custom flex flex-col p-5" onSubmit={handleSubmit}>
          <InputText {...emailInput}/>
          <InputText {...passwordInput}/>
          <input type="submit" className="cursor-pointer shadow-sm rounded p-2 mb-2 mx-2 mt-5 text-white bg-blue-linear" />
          { errorMessage && <p className="text-red-600 text-xs font-semibold mx-2 mt-2 roboto">{errorMessage}</p>}
        </form>
      </div>
    )
}