import '../styles/SocialMedia.css'
import React, { useState, useEffect } from 'react';

export default function SocialMedia() {
    const ORIGINAL_EMAIL = "malay77patra@gmail.com"
    const [mail, setMail] = useState(ORIGINAL_EMAIL)

    useEffect((m) => {
        const timer = setTimeout(() => {
            setMail(ORIGINAL_EMAIL)
        }, 1000);

        return () => { clearTimeout(timer) }
    }, [mail])


    const copyMail = async () => {
        await navigator.clipboard.writeText(ORIGINAL_EMAIL);
        setMail('Copied!')
    };


    return (
        <>
            <div className='icon-group'>
                <a href='https://github.com/malay77patra'>
                    <svg className='icon' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688 3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" /></svg>
                </a>
                <a href='https://www.linkedin.com/in/malay9418/'>
                    <svg className='icon' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill='currentColor' d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" /></svg>
                </a>
                <a href='https://youtube.com/@itsmalay'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="currentColor" viewBox="0 0 448 512"><path d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" /></svg>
                </a>
            </div>
            <div className='mail-box' onClick={copyMail}>
                <svg style={{ height: '16px', width: '16px' }} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z" fill="currentColor" /><path fill="currentColor" d="m33.81 7.39-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21 1.41 1.41Zm26.61 0h-1.4l-7.29-7.23 1.41-1.41 7.27 7.21Z" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                <span className='mail'>{mail}</span>
            </div>
        </>
    )
}