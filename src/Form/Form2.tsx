import axios from 'axios';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

// Define the type for form data
interface FormValues {
    firstName: string;
    lastName: string;
    company?: string;
    phone: string;
    email: string;
    message: string;
    consent: boolean;
}

interface FormModalProps {
    onCloseModal?: () => void;
}

const Form2 = ({ onCloseModal }: FormModalProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const [isLoading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log(data);

        if (!data.consent) {
            return toast('Please Accept Terms And Conditions');
        }

        console.log(data);

        setLoading(true);

        try {
            const response = await axios.post(
                'https://api.rapidpayments.io:3337/api/contact',
                {
                    emailAddress: data.email,
                    firstName: data.firstName,
                    phoneNumber: data.phone,
                    lastName: data.lastName,
                    companyName: data.company,
                    message: data.message,
                },
            );

            console.log(response);

            if (response?.data?.success) {
                reset();
                toast.success('Form Submitted Successfully');
                onCloseModal?.(); // Calls onCloseModal if it's defined
            } else {
                toast.error('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error(
                'An error occurred while submitting the form. Please try again.',
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col md={6} className="">
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            First Name:
                        </label>
                        <input
                            type="text"
                            className="form-control "
                            id="firstName"
                            {...register('firstName', { required: 'First name is required' })}
                        />
                        {errors.firstName && (
                            <span className="text-danger">{errors.firstName.message}</span>
                        )}
                    </div>
                </Col>

                <Col md={6} className="">
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            className="form-control "
                            id="lastName"
                            {...register('lastName', { required: 'Last name is required' })}
                        />
                        {errors.lastName && (
                            <span className="text-danger">{errors.lastName.message}</span>
                        )}
                    </div>
                </Col>

                <Col md={6} className="">
                    <div className="mb-3">
                        <label htmlFor="company" className="form-label">
                            Company Name:
                        </label>
                        <input
                            type="text"
                            className="form-control "
                            id="company"
                            {...register('company', { required: 'Company Name is Required' })}
                        />
                    </div>
                    {errors.company && (
                        <span className="text-danger">{errors.company.message}</span>
                    )}
                </Col>

                <Col md={6} className="">
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                            Phone Number:
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            {...register('phone', { required: 'Phone Number is Required' })}
                        />
                        {errors.phone && (
                            <span className="text-danger">{errors.phone.message}</span>
                        )}
                    </div>
                </Col>

                <Col md={12}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email Address:
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            {...register('email', { required: 'Email is Required' })}
                        />
                        {errors.email && (
                            <span className="text-danger">{errors.email.message}</span>
                        )}
                    </div>
                </Col>

                <Col md={12}>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                            Your message:
                        </label>
                        <textarea
                            className="form-control "
                            id="message"
                            rows={5}
                            {...register('message', { required: 'Message is required' })}
                        />
                        {errors.message && (
                            <span className="text-danger">{errors.message.message}</span>
                        )}
                    </div>
                </Col>

                <Col md={12}>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="form2"
                            {...register('consent', {
                                required: 'Terms And Condition is Required',
                            })}
                        />
                        <label className="form-check-label text-gray-2" htmlFor="form2">
                            By providing a telephone number and submitting this form you are
                            consenting to be contacted by SMS text message. Message & data
                            rates may apply. You can reply STOP to opt-out of further
                            messaging.
                        </label>
                        {errors.consent && (
                            <span className="text-danger">{errors?.consent?.message}</span>
                        )}
                    </div>
                </Col>

                <Col md={12}>
                    <Button
                        disabled={isLoading}
                        className="btn-feature btn-lg mt-3 px-5"
                        type="submit"
                    >
                        {isLoading ? '...loading' : ' Submit'}
                    </Button>
                </Col>
            </Row>
        </form>
    );
};

export default Form2;
