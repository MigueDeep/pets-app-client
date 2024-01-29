<template>
    <div>
        <!-- Nav -->
        <div class="row">
            <nav class="myNavbar col-12">
                <div class="menu-options">
                    <div>
                        <a class="navbar-brand title" href="/">AdoptaMe</a>
                    </div>
                    <div>
                        <div class="nav-links">
                            <a class="nav-link" href="/adoptar">Adoptar</a>
                            <a class="nav-link" href="#">Registar una adopción</a>
                            <a class="nav-link" href="#">link</a>
                            <a class="nav-link" href="#">link</a>
                        </div>
                    </div>
                    <div class="session-control">
                        <a href="#" class="session-options">Iniciar Sesión</a>
                        <a href="#" class="session-options">Registrarse</a>
                    </div>
                </div>
            </nav>
        </div>
        <router-view/>
    </div>
</template>

<script>

</script>

<style scoped>
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
    padding-right: 1rem;
}

.session-options:hover {
    color: var(--color-hover-yellow);
}
</style>