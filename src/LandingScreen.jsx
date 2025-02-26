import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function LandingScreen() {
    // #930415
    return (
        <div className="w-screen h-screen">
            <div className="h-full w-full bg-slate-800">
                <div className="w-full h-full flex flex-col justify-center items-center text-center gap-6">
                    <div>
                        <h2 className="text-white text-4xl">Turnir 4</h2>
                        <h1 className="text-[#930415] text-8xl font-[1000]">IGRAONA</h1>
                        <h1 className="text-gray-300 text-2xl">Najbolja
                            <span className="text-white text-8xl italic font-[1000]">IGRAONA</span>
                            u svijetu <br /> i sire</h1>
                    </div>
                    <div className="w-96 h-[1px] bg-white"></div>
                    <button className="bg-[#930415] px-4 py-2 mt-24">Prijavi se</button>
                </div>
            </div>
            <div className="w-full h-full bg-slate-800 relative flex justify-center items-center">
                <div className="h-full w-full">
                    <video
                        src=""
                        type="video/mp4"
                        loop
                        muted
                        autoPlay
                        playsInline
                        className="bg-yellow-400 w-screen h-[75%] z-0"
                    />
                    <p className="w-[32rem] text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Eius, vel laboriosam quas omnis hic repudiandae cupiditate necessitatibus!
                        Molestias iure autem animi numquam sapiente,
                        laudantium ratione sequi est maiores! A, est.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Eius, vel laboriosam quas omnis hic repudiandae cupiditate necessitatibus!
                        Molestias iure autem animi numquam sapiente,
                        laudantium ratione sequi est maiores! A, est.
                    </p>
                </div>
                <div className="bg-black w-[105%] h-[50%] rotate-[-4deg] absolute bottom-[-10rem] flex justify-center items-center">
                    <p className="text-white rotate-[4deg] w-96 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste provident officia velit vitae blanditiis amet,
                        molestiae asperiores similique delectus eveniet expedita consequuntur soluta eos totam adipisci animi,
                        atque aliquid veniam?
                        Similique necessitatibus provident porro optio impedit atque deserunt sit vero exercitationem dignissimos nostrum veritatis ea,
                        mollitia dolore ipsam consequatur quasi!
                        Voluptas enim repellat itaque atque recusandae aspernatur esse accusamus.
                        Quidem!
                    </p>
                </div>
            </div>
            <div className="w-full h-[80%] bg-slate-800">

                <div className="w-full h-[70%] bg-slate-800 flex items-center justify-evenly">
                    <p className="text-white w-96 mt-14">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quasi eius quas, dicta sint quia sequi odit omnis optio,
                        expedita non maxime aspernatur provident doloribus voluptatem,
                        est similique autem officiis fugiat!
                        Quidem tempore tempora dolore qui ratione eveniet doloremque dolores molestias reiciendis voluptate cum ipsam numquam assumenda saepe,
                        vero adipisci nesciunt accusantium,
                        corporis ea rerum impedit cumque exercitationem! Numquam,
                        delectus blanditiis!
                    </p>
                    <img src="https://media.licdn.com/dms/image/v2/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=EPGRytuEOVPFLctZkKdIxLl_1W7QhVFrLeS-GwWjJj0" />
                </div>
                <div className="w-full h-[30%] flex justify-evenly items-center bg-slate-800 border-slate-900 border-t-4">
                    <div className='flex flex-col text-white text-xl'>
                        <a href="">
                            <FacebookIcon fontSize='large' /> Facebook
                        </a>
                        <a href="">
                            <InstagramIcon fontSize='large' /> Instagram
                        </a>
                        <a href="">
                            <TwitterIcon fontSize='large' /> Twitter
                        </a>
                    </div>
                    <div className='w-96 h-44 bg-teal-800'>
                        Zamisli da je ovo mapa
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingScreen