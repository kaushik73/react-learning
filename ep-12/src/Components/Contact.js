import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-300 border-double border-4 border-x-orange-800 border-y-blue-900 m-2 min-h-[435px]">
      <div className="flex items-center justify-center">
        <h2 className="text-center font-bold p-2  mt-3 text-2xl  border-b-2 border-b-black w-3/12 ">
          Contact Us Page
        </h2>
      </div>
      <form className=" m-2 p-2 flex flex-col items-center">
        <input
          name="name"
          type="name"
          placeholder="Enter Name"
          className="w-6/12 m-2 p-2"
        />
        <input
          type="text"
          name="comment"
          placeholder="Enter Comment"
          className="w-6/12 m-2 p-2"
        />

        <button
          type="submit"
          className="p-2 m-2 border hover:border-black hover:text-black	 border-x-orange-600 w-2/12 border-y-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
