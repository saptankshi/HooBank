import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission logic here
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl text-[#000] font-bold mb-4">Start your journey with TechFusion</h2>
      <p className="font-poppins text-[#000] text-base text-center mb-3 w-full mt-[7px] md:mt-0">
        Skills First, Job Next, Fees Last
    </p>

{/* <div className=" border-[3px] border-orange-1 w-[92%] h-max flex flex-col p-5 pt-7 rounded-2xl bg-white shadow-contact md:w-[410px] md:h-max md:justify-evenly md:p-[30px] md:pt-3 md:leading-tight">
    <p className="font-bold w-full text-center font-poppins text-19 md:text-25 md:font-poppins-bold">
        Start your Journey to Become
        <br /> NaukriSaksham
    </p>
    <p className="font-poppins text-base text-center mb-3 w-full mt-[7px] md:mt-0">
        Skills First, Job Next, Fees Last
    </p>
</div> */}

      <div>
        {/* <label>Name:</label> */}
        <input
          type="text"
          {...register('Name', { required: 'Name is required' })}
          placeholder="Enter your name"
        />
      </div>

      <div>
        {/* <label>Email:</label> */}
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
          placeholder="Enter your email"
        />
      </div>

      <div>
        {/* <label>Phone Number:</label> */}
        <input
          type="tel"
          {...register('phoneNumber', { required: 'Phone number is required' })}
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        {/* <label>College Name:</label> */}
        <input
          type="text"
          {...register('collegeName', { required: 'College name is required' })}
          placeholder="Enter your college name"
        />
      </div>

      <div>
        {/* <label>Program:</label> */}
        <select {...register('program', { required: 'Program is required' })} placeholder="Select Program">
          <option value="">Select Program</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>

      <div>
        {/* <label>Graduation Year:</label> */}
        <select {...register('graduationYear', { required: 'Graduation year is required' })} placeholder="Select Graduation Year">
          <option value="">Select Graduation Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>

      <div>
        {/* <label>Department:</label> */}
        <select {...register('department', { required: 'Department is required' })} placeholder="Select Department">
          <option value="">Select Department</option>
          <option value="department1">Department 1</option>
          <option value="department2">Department 2</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
