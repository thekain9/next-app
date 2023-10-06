//Navigation bar for the project. 

import Link from 'next/link';

function Navbar() {
    return (
        <div className="navbar">
            <div className='links'>
                <Link href="/">HOME</Link>
                <Link href="/Projects">PROJECTS</Link>
                <Link href="/Skills">SKILLS</Link>
                <Link href="/Contact">CONTACT</Link>
            </div>
            <style jsx>{`
                .navbar {
                    width: 100%;
                    background: #2C4373;
                    padding: 20px 0;
                    display: flex;
                    justify-content: center;
                }

                .links {
                    display: flex;
                    gap: 30px;
                }

                .links :global(a) {
                    font-family: 'Montserrat', sans-serif;
                    color: white;
                    font-size: 25px;
                    font-weight: 800;
                    cursor: pointer;
                    text-decoration: none;
                    transition: color 0.3s;
                }

                .links :global(a:hover) {
                    color: black;
                }
            `}</style>
        </div>
    )
}

export default Navbar;




