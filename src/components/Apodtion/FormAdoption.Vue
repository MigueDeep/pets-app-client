<template>
    <div>
        <h2>Formulario de Adopción de Mascotas</h2>
        <p>Por favor, complete el siguiente formulario para solicitar la adopción de una mascota.</p>

        <form action="/procesar_adopcion" method="post" class="adopcion-form">

            <div class="form-group">
                <label for="nombre">Nombre completo:</label>
                <input type="text" id="nombre" name="nombre" required>
            </div>

            <div class="form-group">
                <label for="correo">Correo electrónico:</label>
                <input type="email" id="correo" name="correo" required>
            </div>

            <div class="form-group">
                <label for="telefono">Número de teléfono:</label>
                <input type="tel" id="telefono" name="telefono" required>
            </div>

            <div class="form-group">
                <label for="direccion">Dirección:</label>
                <textarea id="direccion" name="direccion" rows="4" required></textarea>
            </div>

            <div class="form-group">
                <label for="tipo_mascota">Tipo de mascota que desea adoptar:</label>
                <select id="tipo_mascota" name="tipo_mascota" required>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="otro">Otro</option>
                </select>
            </div>

            <div class="form-group">
                <label for="mascota">Seleccionar Mascota: </label>
                <select id="mascota" name="mascota" required>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="otro">Otro</option>
                </select>
            </div>

            <div class="form-group">
                <label for="razon_adopcion">Motivo de la adopción:</label>
                <textarea id="razon_adopcion" name="razon_adopcion" rows="4" required></textarea>
            </div>

            <div class="form-group">
                <button type="submit">Enviar Solicitud de Adopción</button>
            </div>

        </form>
    </div>
</template>

<style>
.adopcion-form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input,
select,
textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
}

button {
    background-color: #6D5FF5;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>