/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleContactSubmit = e => {
        e.preventDefault();
        console.log('Contact hoise');
        e.target.reset();
        Swal.fire(
            'Your message has been submitted',
            "We will reach out to you soon",
            'success'
        )
    }

    return (
        <div className="pt-[100px] pb-[100px] bg-base-200">
            <div className="common_Heading text-center">
                {/* <h3 className="font-bold text-[#23aade] mb-[20px] text-[20px]">Core Features</h3> */}
                <h1 className="text-5xl font-bold text-[#23aade]">Contact with us</h1>
                <div className="textPadingAbout text-[#737373] mx-[30px] sm:mx-[60px] lg:mx-[230px]">
                    <p className="py-6 text-[16px] capitalize">we appreciate you reaching out</p>
                </div>
            </div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#23aade]">
                <div className="flex flex-col justify-between items-start">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
                    </div>
                    <img src="https://mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                    <p>This design is inspired from: <Link className="btn-link" target='blank' to="https://mambaui.com/">mambaui.com</Link></p>
                </div>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="Your name here" className="w-full p-3 rounded bg-base-200 text-black" required />
                        <div data-lastpass-icon-root="true" ></div>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" placeholder="Email address..." className="w-full p-3 rounded bg-base-200 text-black" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" placeholder="Write here" rows="3" className="w-full p-3 rounded bg-base-200 text-black" required></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="w-[200px] hover:w-full transition-all p-3 text-sm font-bold uppercase rounded bg-white text-[#23aade]">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;