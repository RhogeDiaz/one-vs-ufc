import { RiBoxingFill } from "react-icons/ri";
const Footer = () => {
    return (
        <div className='p-4 flex justify-between border-t bg-black text-white'>
            <div className=" self-start flex flex-col">
                <h1 className="font-bold text-2xl">
                    ONE vs UFC
                </h1>
                <div className="flex items-center gap-2">
                    Diaz 2024<RiBoxingFill />
                </div>
            </div>
            <div className='flex flex-wrap gap-20 justify-end'>
                <div className="flex flex-col gap-4 mb-8">
                    <strong>Contact Me</strong>
                    <a href="https://www.facebook.com/profile.php?id=61557696951179">Facebook</a>
                    <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=rvadiaz09@gmail.com&amp;su=REACH+OUT&amp;body=Hi,+I+want+to+work+with+you." target="_blank">rvadiaz09@gmail.com</a>
                </div>
                {/* <div className="flex flex-col gap-4 mb-8">
                    <strong>Company</strong>
                    <a href="">Contact Us</a>
                    <a href="">Privacy Policy</a>
                </div> */}
            </div>
        </div>
    )
}

export default Footer