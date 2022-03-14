export const fade = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};

export const fadeInAndDown = {
    hidden: {
        opacity: 0,
        y: -15
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

export const buttonAnimation = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 400
        }
    },
    click: {
        scale: 0.9,
        transition: {
            duration: 0.3
        }
    }
}