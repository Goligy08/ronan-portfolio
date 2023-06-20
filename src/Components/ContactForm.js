import React from "react";
import "../Styles/ContactForm.scss";
import { faCheckCircle, faExclamationCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";


const ContactForm = ({toggleDarkMode}) => {

    const schema = yup.object().shape({
        Name: yup.string().required("Name cannot be blank"),
        Email: yup.string().email().required("Email cannot be blank"),
        Message: yup.string().min(10).required("Message cannot be blank")
    });

    const {register, handleSubmit, formState: {errors} } = useForm({
         resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="contact-form-container">

              <form className={`contact-form${toggleDarkMode}`} onSubmit={handleSubmit(onSubmit)}>
                <div className="contact-form-element">
                    <input type="text"  placeholder="Enter your name!" {...register("Name")}  />
                    <p>{errors.Name?.message}</p>
                   
                </div>

                <div className="contact-form-element">
                    <input type="text" className="contact-email"  placeholder="Enter your email!"  {...register("Email")}  />
                    <p>{errors.Email?.message}</p>
                    
                </div>

                <div className="contact-form-element">
                <textarea className="contact-msg" placeholder="Your Message.."  {...register("Message")}  />
                <p>{errors.Message?.message}</p>
                
                </div>

                <button className="contact-submit">Submit <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                 
              </form>

        </div>
      
    )
    
}

export default ContactForm;