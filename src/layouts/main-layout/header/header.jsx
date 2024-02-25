import React from 'react'
import { useForm } from "react-hook-form";
import { Logo } from "/public/icons/logo.jsx"
import { Search } from "/public/icons/search.jsx"
import { Like } from "/public/icons/like.jsx"
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useToggle } from "../../../hook/useToggle";
import { Profile } from "/public/icons/profile.jsx"
import image from "/public/imgs/bg.png"
import { Modal } from "../../../components/ui/modal";
import { Input } from "../../../components/ui/input";
import { Button } from '../../../components/ui/button'
import { headerData, headerSelectorData, heroData } from '../../../data/data'

const schema = z.object({
  username: z.string().min(3, "Minimum content:3").max(10, "Max content:10"),
  email: z.string().min(10, "Min:10"),
  number: z.string().min(8, "Min:8").max(12, "max:12"),
  password: z.string().min(5, "Min:5").max(10, "Max:10"),
  confirmPassword: z.string().min(5, "Min:5").max(10, "Max:10")
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords are not appear"
});



export const Header = () => {
  const { close, isOpen, open } = useToggle();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: zodResolver(schema) });

  const submit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <div className='relative '>
      <img className='absolute z-[-1] w-[100%]' src={image} alt="img" />
      <div className='container flex items-center justify-between'>
        <a href="#">
          <Logo />
        </a>
        <ul className='flex items-center gap-[32px]'>
          {headerData.map((item) =>
            <li key={item.id}>
              <a className='text-base font-medium hover:text-gray-400' href={item.path}>{item.name}</a>
            </li>
          )}
        </ul>
        <div className='flex items-center gap-[24px] '>
          <select className='text-base font-medium outline-none bg-transparent' >
            {headerSelectorData.map((item) =>
              <option className='text-base font-medium' key={item.id} value={item.option}>{item.name}</option>
            )}
          </select>
          <a href="#">
            <Search />
          </a>
          <a href="#">
            <Like />
          </a>

          <Profile onClick={open} />

          <p className='text-base font-medium'>Bag 0</p>
        </div>
      </div>
      <br />
      <section>
        <div>
          {heroData.map((item) =>
            <div key={item.id} className='text-center pt-[240px] pb-[272px]'>
              <h2 className='text-3xl font-medium mb-[12px]'>{item.name}</h2>
              <p className='text-base mb-[24px]'>{item.text}</p>
              <div className='flex justify-center gap-4'>
                <Button variant={"primary"}>{item.btn1}</Button>
                <Button variant={"secondary"}>{item.btn2}</Button>
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="container">
        <Modal isOpen={isOpen} close={close}>
          <h2 className="text-3xl font-medium mt-[48px] mb-[32px]">Create an account</h2>
          <form onSubmit={handleSubmit(submit)}>
            <Input variant="primary"
              {...register("username", { required: true })}
              placeholder="Username*"
              type="text"
              helperText={errors?.username?.message}
            />
            <Input variant="primary"
              {...register("email", { required: true })}
              placeholder="Email*"
              type="email"
              helperText={errors?.email?.message}
            />
            <Input variant="primary"
              {...register("number", { required: true })}
              placeholder="Phone number*"
              type="text"
              helperText={errors?.number?.message}
            />
            <Input variant="primary"
              {...register("password", { required: true })}
              placeholder="Password*"
              type="password"
              helperText={errors?.password?.message}
            />
            <Input variant="primary"
              {...register("confirmPassword", { required: true })}
              placeholder="Repeat Password*"
              type="password"
              helperText={errors?.confirmPassword?.message}
            />
            <Button variant="fifth">Sign up</Button>
          </form>
        </Modal>
      </div>
    </div>
  )
}
