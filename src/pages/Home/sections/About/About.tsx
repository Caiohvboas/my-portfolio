import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { FaSass } from "react-icons/fa";

const About = () => {
    const StyledAbout = styled("div")(() => ({
        backgroundColor: 'gray',
        height: "auto",
        minHeight: "50vh",
        padding: "50px 0",
        marginTop: "-50px", // Espaço negativo para criar efeito de sombra
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }));

    return (
        <StyledAbout id="about">
            <Container maxWidth="lg">
                <Typography color="primary.main" variant="h1" textAlign="center" pb={2}>Sobre Mim</Typography>
                <Typography color="primary.main" variant="h4" textAlign="center" pb={4}>
                    Olá! Eu sou um desenvolvedor apaixonado com experiência em várias tecnologias.
                </Typography>
                <Typography color="primary.main" variant="h5" textAlign="center" pb={2}>Tecnologias que Conheço:</Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <RiJavascriptLine size={100} style={{ marginRight: '8px' }} />
                            <Typography color="primary.main" variant="h4" textAlign="center">JavaScript</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <TbBrandTypescript size={100} style={{ marginRight: '8px' }} />
                            <Typography color="primary.main" variant="h4" textAlign="center">TypeScript</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <FaReact size={100} style={{ marginRight: '8px' }} />
                            <Typography color="primary.main" variant="h4" textAlign="center">React</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <FaNode size={100} style={{ marginRight: '8px' }} />
                            <Typography color="primary.main" variant="h4" textAlign="center">Node.js</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <ImHtmlFive size={100} style={{ marginRight: '50px' }} />
                            <Typography color="primary.main" variant="h4" textAlign="center">HTML</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <FaSass size={100} style={{ marginRight: '8px' }} />
                            <Typography color="primary.main" variant="h5" textAlign="center">SASS</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledAbout>
    );
};

export default About;
