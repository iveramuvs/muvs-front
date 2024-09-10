<template>
    <section>
    <div class="hero-section">
        <div class="container">
            <div class="left">
                <img src="/src/assets/images/login-bg.png">
            </div>
            <div class="right">
                <form class="form">
                    <!-- Tu contenido del formulario aquí -->
                    <div class="p-field">
                        <label for="username">Username</label>
                        <InputText id="username" type="text" />
                    </div>
                    <div class="p-field">
                        <label for="password">Password</label>
                        <InputText id="password" type="password" />
                    </div>
                    <!-- <button type="submit">Submit</button> -->
                    <Button label="Success" severity="success" />
                </form>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  components: {
    InputText,
    Button
  }
};

</script>

<style>

    .form {
        position: absolute;
        max-width: 300px;
        width: 100%;
        background-color: #eeeeee;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .login-left-heading h2 {
        max-width: 400px;
        margin-bottom: 20px;
        margin-right: 0px;
        font-size: 28px;
        text-align: center;
    }
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
        }
        .container {
            display: flex;
            height: 100vh;
        }
        .left, .right {
            flex: 1;
            min-width: 0;
        }

        @media screen and (max-width:767px) {
            .left{
                display: none;
            }
        }

</style>