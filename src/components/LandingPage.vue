<template>
    <div class="landing">
        <!-- Nav -->
        <div class="row">
            <nav class="myNavbar col-12">
                <div class="menu-options">
                    <div>
                        <a class="navbar-brand title" href="/">AdoptaMe</a>
                    </div>
                    <div>
                        <div class="nav-links">
                            <a class="nav-link" href="Inicio">Inicio</a>
                            <a class="nav-link" href="#">Acerca de nosotros</a>
                            <a class="nav-link" href="#">¿Por qué adoptar?</a>
                            <a class="nav-link" href="#">Galería</a>
                        </div>
                    </div>
                    <div class="session-control">
                        <a href="#" class="session-options">Iniciar Sesión</a>
                        <a href="#" class="session-options">Registrarse</a>
                    </div>

                </div>
            </nav>
        </div>

        <!-- landing info -->
        <div class="row">
            <div class="col-6 landing-info">
                <h1 class="text-center">AdoptaMe</h1>
                <p>"¡Descubre tu Compañero Perfecto en AdoptaMe! Navega a través de una variedad encantadora de perros,
                    gatos, roedores y más, todos buscando amor y un hogar. </p>
                <button class="btn btn-primary">
                    <router-link to="adoptar" class="txt-btn-start">Empezar</router-link>
                </button>
            </div>
            <div class="col-6 image-pets">
                <div class="circle"></div>
                <img src="../assets/img/pets.png" class="img-animals">
            </div>
        </div>

        <!-- About -->
        <div class="row myAbout">
            <div class="huellas-img">
                <img src="../assets/img/huella-removebg.png" alt="" height="200">
                <img src="../assets/img/huella-removebg.png" alt="" height="200">
            </div>
            <div class="about-body">
                <h1 class="about-title">Acerca de nosotros</h1>
                <p class="about-info">
                    "En AdoptaMe, estamos dedicados a crear historias felices de adopción al unir a seres queridos peludos con familias amorosas. Nuestra misión es proporcionar un espacio en línea donde la compasión y la conexión se entrelazan para dar un hogar a todas las criaturas necesitadas. Nos esforzamos por construir puentes de amor entre personas y mascotas, facilitando adopciones responsables y creando vínculos duraderos. Únete a nosotros en nuestra travesía para hacer del mundo un lugar mejor, un lamido y ronroneo a la vez. ¡AdoptaMe, donde cada historia tiene un comienzo lleno de amor y cola!"
                </p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.landing {
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 9rem;
}

@media (max-width: 1400px) {
    .landing {
        gap: 5.1rem;
    }
}

.myNavbar {
    background-color: var(--color-primary);
    height: 4.5rem;
    padding: 2rem;
}

.menu-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.nav-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
}

.nav-links a {
    color: var(--color-btn-text);
    text-decoration: none;
}


.title {
    color: var(--color-btn-text);
    font-size: 2rem;
    font-weight: 500;
    text-decoration: none;
    font-family: var(--font-family);
    font-weight: 700;
}

.nav-link {
    color: var(--color-btn-text);
    font-size: 1.2rem;
    font-weight: 500;
}

.nav-link:hover {
    color: var(--color-hover-yellow);
}

.session-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
}

.session-options {
    color: var(--color-btn-text);
    text-decoration: none;
    font-family: var(--font-family);
    padding-right: 1rem;
}

.session-options:hover {
    color: var(--color-hover-yellow);
}

.landing-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem;
    padding-right: 0%;
}

p {
    font-size: 24px;

}

.txt-btn-start {
    color: var(--color-btn-text);
    text-decoration: none;
}

.image-pets {
    position: relative;
}

.img-animals {
    width: 600px;
    height: 600px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

.circle {
    width: 450px;
    height: 450px;
    background-color: var(--color-secondary);
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: -1;
}

.btn-primary {
    height: 3.3rem;
    width: 10rem;
    border-radius: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
}

.myAbout{
    padding: 5rem;
}

.huellas-img{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
}

.about-body{
    position: absolute;
    margin-top: 3rem;
}


</style>