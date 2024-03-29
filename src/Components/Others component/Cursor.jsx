import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState('default')


    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);

        // const elements = document.querySelectorAll('li, img');

        // elements.forEach((element) => {
        //     element.addEventListener('mouseenter', handleMouseEnter);
        //     element.addEventListener('mouseleave', handleMouseLeave);
        // });


        return () => {
            window.removeEventListener("mousemove", mouseMove);

            // elements.forEach((element) => {
            //     element.removeEventListener('mouseenter', handleMouseEnter);
            //     element.removeEventListener('mouseleave', handleMouseLeave);
            // });
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
        }
    }


    return (<motion.div variants={variants} animate={cursorVariant} className='cursor' />);
};

export default Cursor;
