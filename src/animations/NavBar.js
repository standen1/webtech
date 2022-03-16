//Note that all of the animations for the navbarToggle button
//are located on the component inline.

export const navBGAnimation = {
    open: {
        borderRadius: "0",
        width: "300px",
        height: "100vh",
        margin: "0",
    },
    closed: {
        borderRadius: "50%",
        width: "33px",
        height: "33px",
        margin: "3px 7px",
        transition: {
            when: "afterChildren",
            delay: 0.6
        }
    }
}

export const navMenuAnimation = {
    open: {
        
        transition: {
            delay: 0.3,
            staggerChildren: 0.2
        }
    },
    closed: {
        
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    }
}

export const navLinkAnimation = {
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.1,
            type: "tween"
        }
    },
    closed: {
        opacity: 0,
        x: 50,
        transition: {
            duration: 0.1,
            type: "tween"
        }
    }
}