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
                        <a class="nav-link" href="#">Inicio</a>
                        <a class="nav-link" href="#">Acerca de nosotros</a>
                        <a class="nav-link" href="#">¿Por qué adoptar?</a>
                        <a class="nav-link" href="#">Galería</a>
                    </div>
                </div>
                <div class="session-control">
                    <a href="Login" class="session-options">Iniciar Sesión</a>
                    <a href="Register" class="session-options">Registrarse</a>
                </div>

            </div>
        </nav>
        </div>

        <!-- landing info -->
        <div class="row">
                <div class="col-6 landing-info">
                    <h1 class="text-center">Adopta un amigo</h1>
                    <p>"¡Descubre tu Compañero Perfecto en AdoptaMe! Navega a través de una variedad encantadora de perros, gatos, roedores y más, todos buscando amor y un hogar. </p>
                    <button class="btn btn-primary">Empezar</button>
                </div>
                <div class="col-6 image-pets">
                        <div class="circle"></div>
                        <img src="../assets/img/pets.png" class="img-animals">
                </div>
        </div>

    </div>
</template>

<script>

</script>

<style scoped>

.landing{
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 6rem;
}

.myNavbar{
    background-color:  var(--color-primary);
    height: 4.5rem;
    padding: 2rem;
}

.menu-options{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.nav-links{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
}

.nav-links a{
    color: var(--color-btn-text);
    text-decoration: none;
}

.title{
    color: var(--color-btn-text);
    font-size: 2rem;
    font-weight: 500;
    text-decoration: none;
}

.nav-link{
    color: var(--color-btn-text);
    font-size: 1.2rem;
    font-weight: 500;
}

.nav-link:hover{
    color: var(--color-hover-yellow);
}

.session-control{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

.session-options{
    color: var(--color-btn-text);
    text-decoration: none;
}

.landing-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem;
    padding-right: 0%;
}

.landing-info p{
    font-size: 24px;

}

.image-pets {
    position: relative;
}

.img-animals{
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

.btn-primary{
    height: 3.3rem;
    width: 10rem;
    border-radius: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
}

</style>