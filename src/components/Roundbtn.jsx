export default function Roundbtn({ text, link }) {
    return (
        <a href={link} target='_blank' rel='noopener noreferrer'>
            <button className='round-btn'>{text}</button>
        </a>
    )
}
