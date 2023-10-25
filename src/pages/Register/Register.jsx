import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthProvider";
import Swal from 'sweetalert2'


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(res => {
                console.log(res.user);

                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Registered',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(err => {
                console.error(err);
            })

    }

    return (
        <div className="container mx-auto">
            <div className="hero min-h-screen bg-base-200 py-20">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-red-400 text-white font-semibold">Register</button>
                            </div>
                            <p className="font-medium text-center text-xs mt-2">
                                Already have an Account? Please <Link to="/login"><span className="text-blue-500">Login</span></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;