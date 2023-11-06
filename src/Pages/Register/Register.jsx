import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProviderContext } from "../../Provider/Provider";
// import { ProviderContext } from "../../provider/provider";
import Swal from 'sweetalert2';


const Register = () => {
    const { createUser } = useContext(ProviderContext)
    const Navigate = useNavigate()
    const [regError, setRegError] = useState("")
    // console.log(createUser)

    const handleRegister = e => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const photoURL = e.target.ImageURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, displayName);
        // eslint-disable-next-line no-constant-condition
        if (!/^(?=.*[a-z])(?=.*[^A-Z0-9a-z]).{6,}$/.test(password)) {
            setRegError("Password must have at least six character, one capital letter and one special character")
        }
        else {
            createUser(email, password, displayName, photoURL)
                .then(result => {
                console.log(result.user)
                e.target.reset();
                Navigate("/")
                Swal.fire(
                    'Registration completed successfully by Email',
                    "Enjoy our services don't forget to feedback",
                    'success'
                )
                })
                .catch(error => {
                console.log("error: ", error);
                setRegError(error.message);
                })
        }

    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="hero pt-[80px] pb-[100px]">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name="ImageURL" placeholder="URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <p className="text-red-500">{regError}</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary border-black font-bold bg-black text-white hover:bg-base-300 hover:border-black hover:text-black">Register</button>
                            </div>
                            <p>Already have an account? Please <Link to="/login"><button className="btn-link text-[#2b87ff] font-bold uppercase">Login</button></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;