<template>
    <div class="adopt">
        <div class="myCarousel">
            <!-- <img src="../../assets/img-carousel/pets4.jpg" alt="persona con mascotas"> -->
            <p>1</p>
        </div>
        <div class="card-adopt">
            <h1 class="mb-4 title-header">Estoy buscando...</h1>
            <div class="card">
                <div class="card-body">
                    <form class="myForm">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Tipo</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Todos</option>
                                <option value="1">Perro</option>
                                <option value="2">Gato</option>
                                <option value="3">Hamster</option>
                                <option value="3">Ave</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Raza</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Todos</option>
                                <option value="1">Pator Aleman</option>
                                <option value="2">Pug</option>
                                <option value="3">Husky</option>
                                <option value="3">Beagle</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Sexo</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Todos</option>
                                <option value="1">Macho</option>
                                <option value="2">Hembra</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Buscar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data: {
        message: 'Hello World'
    }
}
</script>

<style scoped>

.title-header{
    text-align: center;
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
    font-family: var(--font-family);
}

.myCarousel{
    background-color: black;
    height: 20rem;
    width: 100%;
    opacity: 0.6;
}

.myForm{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
}

.card-adopt{
    position: absolute;
    top: 30%;
}


.adopt {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card {
    width: 50rem;
    margin: 0 auto;
}

</style>