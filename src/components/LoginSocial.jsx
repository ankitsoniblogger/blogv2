import React from "react";

const LoginSocial = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <p className="text-sm font-medium text-gray-600 tracking-tight">
        Or continue with
      </p>
      <div className="flex items-center gap-4 mt-3">
        <i className="fa-brands fa-google border border-gray-400 shadow-sm p-3 rounded-md cursor-pointer w-10 flex items-center justify-center "></i>
        <i className="fa-brands fa-apple border border-gray-400 shadow-sm p-3 rounded-md cursor-pointer w-10 flex items-center justify-center "></i>
        <i className="fa-brands fa-facebook-f border border-gray-400 shadow-sm p-3 rounded-md cursor-pointer w-10 flex items-center justify-center "></i>
      </div>
    </div>
  );
};

export default LoginSocial;
