import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) =>{ console.log(data)
        window.location.href = '/';}
      return (
        <>
        <Navbar/>
        <div className='flex h-screen items-center justify-center'>
    <div className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} >
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-semibold text-4xl">Contact Us</h3>
    <div className='mt-4 ml-3 space-y-2 text-lg'>
        <span>Name </span>
        <br />
        <input type="text" placeholder='Enter your Name' className='w-96  px-3 py-1 rounded-md outline-none'{...register("name", { required: true })}/>
        <br />
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-4 ml-2 space-y-2 text-lg'>
        <span>Email </span>
        <br />
        <input type="email" placeholder='Email Address' className='w-96 px-3 py-1 rounded-md outline-none' {...register("email", { required: true })}/>
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-4 ml-2 space-y-2 text-lg'>
        <span>Message </span>
        <br />
        <textarea className="textarea textarea-lg w-96 textarea-bordered" placeholder="Type your Message" {...register("email", { required: true })}></textarea>
        <br />
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='flex  mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
    </div>
    </form>
  </div>
</div>
    </div>
        <Footer/>
        </>
      )
}

export default Contact