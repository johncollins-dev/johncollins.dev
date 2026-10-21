import logo from '../../public/jcdev-logo.svg'

export default function Card() {
    return (
        <>
            <ProfilePic />
            <p>John Collins</p>
            <p>Software Engineer</p>
            <p>San Francisco, CA</p>
            <a href="https://github.com/johncollins-dev">Github</a>
            <a href="www.linkedin.com/in/johncollins-dev">LinkedIn</a>
        </>
    );
}

export default function ProfilePic() {
    return (
        <>
            <img src="jcdev-logo.svg" alt="JC logo"></img>
        </>
    );
}
