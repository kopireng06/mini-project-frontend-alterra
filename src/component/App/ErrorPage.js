import { useEffect } from "react";

const ErrorPage = () => {

    useEffect(()=>{
        setTimeout(()=>{
            window.location.href="/"
        },2000);
    })

    return ( 
        <div className="h-screen lg:container mx-auto flex flex-col justify-center items-center">
            <h1 className="text-global-dark-blue text-9xl font-bold my-2 nunito">404</h1>
            <p className="text-global-dark-blue roboto text-xl">OOPS, Page not found</p>
        </div>
    );
}
 
export default ErrorPage;