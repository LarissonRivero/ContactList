import {useForm} from "react-hook-form";
import { NavLink } from 'react-router-dom';


const Form = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();

    const data = (data) => {
        console.log(data)
    }

    return (
    <>
        <div className="formulario">
            <form onSubmit={handleSubmit(data)}>
                <div>
                    <label>Full Name</label>
                    <input type="text" {...register('name', {
                        required: true,
                        maxLength: 20,
                        autoComplete: 'off'
                    })}/>
                    {errors.name?.type === 'required' && <p>Name is required</p>}
                    {errors.name?.type === 'maxLength' && <p>El campo name excede el numero de caracteres permitidos</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" {...register('email', {
                        required: true,
                        autoComplete: 'off',
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
                    })}/>
                    {errors.email?.type === 'required' && <p>Email is required</p>}
                    {errors.email?.type === 'pattern' && <p>Introduzca una Direccion de Correo validad</p>}
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" {...register('phone', {
                        required: true,
                        pattern: /^[0-9]/,
                        maxLength: 12,
                        autoComplete: 'off'
                    })}/>
                    {errors.phone?.type === 'required' && <p>El numero de Telefono es Requerido</p>}
                    {errors.phone?.type === 'pattern' && <p>Introduzca Solo numeros</p>}
                </div>
                <div>
                    <label>Addres</label>
                    <input type="text" {...register('addres', {
                        required: true,
                        maxLength: 20,
                        autoComplete: 'off'
                    })}/>
                    {errors.addres?.type === 'required' && <p>La Direccion es Requerida</p>}
                </div>
                <input type="submit" value="Save"/>
            </form>
        </div>
        <NavLink to="/">Ir al Home</NavLink>
    </>
        
    )
}

export default Form;

