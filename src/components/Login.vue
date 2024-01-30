<template>
  <body>
  <div class="form">
    <div class="form__box">
      <div class="form__left">
        <div class="form__padding">
          <img src="../assets/img/pets.png" alt="Animales en adopción" class="form__image">
        </div>
      </div>
      <div class="form__right">
        <div class="form__padding-right">
          <form>
            <h1 class="form__title">Bienvenid@</h1>
            <input type="text" class="icon1" placeholder="Email">
            <input type="password" class="icon2" placeholder="Contraseña">
            <span class="forgot-password-link"> 
              <a href="#" class="form__link">¿Olvidaste tu contraseña?</a>
            </span>
            <br>
            <input type="submit" value="Iniciar Sesión" class="form__submit-btn">
          </form>
          <p style="font-size: 14px;">
            ¿No tienes cuenta una cuenta? <a href="Register" class="form__link">Crear Cuenta</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu:700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  text-decoration: none;
}

body{
  background-color: 100% #cccfe2;
}

.form {
  width: 720px;
  height: 500px;
  margin: 50px auto;
  padding: 45px 65px;
  text-align: center;
}

.form__box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  border-radius: 40px;
  height: 100%;
  box-shadow: 0px 2px 18px 0px #928a8a;
}

.form__left {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form__padding {
  width: 210px;
  height: 210px;
  background: #f2f2f2;
  border-radius: 50%;
  line-height: 210px;
  position: relative;
}

.form__image {
  max-width: 100%;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form__right {
  width: 50%;
  line-height: 26px;
}

.form__padding-right {
  padding: 0 25px;
}

.form__title {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}

.form__submit-btn {
  background: #6246EA;
  cursor: pointer;


  &:hover {
    background: #A3A8FE;
  }
}

.form__email,
.form__password,
input {
  width: 100%;
  margin-bottom: 25px;
  height: 35px;
  border-radius: 20px;
  border: none;
  background: #f2f2f2;
  padding: 10px;
  font-size: 14px;
  position: relative;

  &:after {
    position: absolute;
    content: 'a***';
  }
}

.form__link {
  color: #EBD63D;
  font-size: 14px;

  &:hover {
    color: #A3A8FE;
  }
}

.icon1 {
  padding-left: 25px;
  background: url("https://cdn-icons-png.flaticon.com/512/5757/5757765.png") no-repeat left;
  background-size: 20px;
  background-color: #f2f2f2;
}

.icon2 {
  padding-left: 25px;
  background: url("   https://cdn-icons-png.flaticon.com/512/481/481195.png ") no-repeat left;
  background-size: 17px;
  background-color: #f2f2f2;
}

.forgot-password-link {
  display: block;
  margin-top: -15px;
  margin-bottom: -10px;
}

</style>