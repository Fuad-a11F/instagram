import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import Search from './Search'
import "./Header.css"


function Header() {
    let [action, setAction] = React.useState(false)
    let [profile, setProfile] = React.useState(false)

    React.useEffect(() => {
        function closeModal(e) {
             if (!e.target.closest('.modal')) {
                setAction(false)
                setProfile(false)
             }
        }
        if (action || profile) {
            window.addEventListener('click', closeModal)
        }

        return ()  =>{
            window.removeEventListener('click', closeModal)
        }
        
    }, [action, profile])

    return (
        <header>
            <div className='container'>
                <div className="header__row">
                    <Logo />
                    <Search setAction={setAction} setProfile={setProfile}/>
                    <Navigation  setAction={setAction} setProfile={setProfile} profile={profile} action={action}/>
                </div>
            </div>
        </header>

    )
}

export default Header
