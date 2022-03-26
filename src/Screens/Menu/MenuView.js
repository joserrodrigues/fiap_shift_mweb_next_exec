import { Typography, Stack, Container } from '@mui/material';
import React from 'react';
import styles from './Menu.module.css';
import Link from 'next/link'

const MenuView = ({ menus }) => {

    let arrayInfo = [];
    console.log(menus);
    if (menus) {
        menus.forEach(element => {
            arrayInfo.push(
                <Link href={element.link}>
                    <a className={styles.LinkText}>{element.title}</a>
                </Link>
            );
        });
    }
    return (
        <Container maxWidth="xl">
            <Stack direction={{ xs: 'column' }}
                spacing={6}
                justifyContent="center"
                alignItems="center"
                >
                <Typography gutterBottom variant="h3" component="div" className={styles.MenuText}>
                    Menu do site
                </Typography>
                {arrayInfo}
            </Stack>
        </Container>
    );
};

export default MenuView;