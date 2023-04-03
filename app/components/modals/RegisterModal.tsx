'use client'
import axios from "axios"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from "react"
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form"
import useRegisterModal from "@/app/hooks/useRegisterModal"
import Modals from "./Modals"



const RegisterModal = () => {
    const {isOpen, onOpen, onClose} = useRegisterModal();
    const [isLoading, setisLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setisLoading(true);

        axios.post('api/register', data)
            .then(() => {
                onClose();
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                setisLoading(false);
            })
    }


  return (
    <div>   
          <Modals
              disabled={isLoading}
              isOpen={isOpen}
              title="Register"
              actionLabel="Continue"
              onClose={onClose}
              onSubmit={handleSubmit(onSubmit)}
          />
    </div>
  )
}

export default RegisterModal
