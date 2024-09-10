<template>
    <Toast />
    <header>
        <div class="card" style=" background: transparent">
            <Toolbar style="border:0; background: transparent; padding: 1rem 1rem 1rem 1.5rem">
                <template #start>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="135" height="33" viewBox="0 0 135 33"
                            fill="none">
                            <g clip-path="url(#clip0_1605_2219)">
                                <path
                                    d="M46.2793 26.7491C45.655 26.1258 45.3372 25.3659 45.3372 24.4636V8.0378C45.3372 7.07018 45.6897 6.2391 46.3891 5.54455C47.0885 4.85 47.9439 4.49976 48.9438 4.49976C49.9437 4.49976 50.8916 4.79657 51.6545 5.38427C52.4175 5.97196 53.0301 6.74962 53.4867 7.71724L57.8737 16.8948H58.1858L62.5727 7.71724C63.0293 6.74962 63.6419 5.97196 64.4049 5.38427C65.1678 4.79657 66.0695 4.49976 67.1156 4.49976C68.1618 4.49976 68.971 4.85 69.6703 5.54455C70.3697 6.24503 70.7223 7.07612 70.7223 8.0378V24.4577C70.7223 25.36 70.4102 26.1198 69.7802 26.7431C69.1501 27.3665 68.3699 27.6751 67.4278 27.6751C66.4856 27.6751 65.7054 27.3605 65.0753 26.7431C64.4511 26.1198 64.1332 25.36 64.1332 24.4577V17.5359H63.8211L61.6248 22.2078C61.1451 23.217 60.6306 23.9531 60.0873 24.4161C59.544 24.8791 58.8562 25.1107 58.0181 25.1107C57.1801 25.1107 56.4923 24.8791 55.949 24.4161C55.4057 23.9531 54.8913 23.217 54.4115 22.2078L52.2152 17.5359H51.9031V24.4577C51.9031 25.36 51.591 26.1198 50.961 26.7431C50.3309 27.3665 49.5507 27.6751 48.6086 27.6751C47.6664 27.6751 46.8862 27.3605 46.2562 26.7431L46.2793 26.7491Z"
                                    fill="#3C3C3B"></path>
                                <path
                                    d="M77.7563 26.8619C76.2939 26.102 75.1727 25.0275 74.4039 23.6444C73.6294 22.2612 73.2422 20.6525 73.2422 18.83V7.71724C73.2422 6.81492 73.5543 6.05507 74.1843 5.43176C74.8143 4.80844 75.5946 4.49976 76.5367 4.49976C77.4788 4.49976 78.2591 4.81438 78.8891 5.43176C79.5133 6.05507 79.8312 6.81492 79.8312 7.71724V18.8241C79.8312 19.9164 80.1318 20.8128 80.7387 21.4954C81.3455 22.1841 82.0854 22.5284 82.9639 22.5284C83.8424 22.5284 84.5823 22.1841 85.1891 21.4954C85.796 20.8068 86.0966 19.9164 86.0966 18.8241V7.71724C86.0966 6.81492 86.4087 6.05507 87.0387 5.43176C87.6687 4.80844 88.449 4.49976 89.3911 4.49976C90.3332 4.49976 91.1135 4.81438 91.7435 5.43176C92.3735 6.05507 92.6856 6.81492 92.6856 7.71724V18.8241C92.6856 20.6465 92.2984 22.2553 91.5239 23.6385C90.7494 25.0216 89.6338 26.0961 88.1715 26.8559C86.7092 27.6158 84.9753 27.9957 82.9697 27.9957C80.9641 27.9957 79.2301 27.6158 77.7678 26.8559L77.7563 26.8619Z"
                                    fill="#3C3C3B"></path>
                                <path
                                    d="M101.743 27.0695C100.968 26.4462 100.35 25.4726 99.8933 24.1369L94.6278 9.03494C94.4833 8.64908 94.4082 8.22166 94.4082 7.74676C94.4082 6.84443 94.703 6.07865 95.3041 5.44346C95.9052 4.80828 96.697 4.49365 97.7027 4.49365C98.6217 4.49365 99.3731 4.76079 99.9626 5.30099C100.546 5.83526 100.997 6.6426 101.309 7.71707L104.916 19.9518H105.228L108.835 7.71707C109.147 6.6426 109.598 5.8412 110.181 5.30099C110.765 4.76672 111.517 4.49365 112.436 4.49365C113.459 4.49365 114.262 4.81421 114.852 5.46127C115.435 6.10833 115.73 6.88005 115.73 7.78237C115.73 8.23353 115.655 8.64908 115.51 9.04087L110.245 24.1429C109.788 25.4726 109.17 26.4521 108.395 27.0754C107.621 27.6987 106.517 28.0074 105.072 28.0074C103.627 28.0074 102.523 27.6987 101.749 27.0754L101.743 27.0695Z"
                                    fill="#3C3C3B"></path>
                                <path
                                    d="M121.568 27.5207C120.446 27.2002 119.493 26.749 118.701 26.1672C117.238 25.0928 116.504 23.9352 116.504 22.6886C116.504 21.7684 116.805 21.0264 117.412 20.4684C118.019 19.9104 118.811 19.6313 119.793 19.6313C120.232 19.6313 120.637 19.7145 121.018 19.8866C121.394 20.0588 121.833 20.3675 122.336 20.8186C122.92 21.3351 123.458 21.6912 123.949 21.899C124.44 22.1068 124.989 22.2077 125.596 22.2077C126.475 22.2077 127.139 22.0534 127.59 21.7387C128.041 21.4301 128.266 21.0442 128.266 20.593C128.266 20.1003 127.972 19.7085 127.388 19.4176C126.804 19.1268 125.862 18.8003 124.567 18.4381C123.018 17.987 121.741 17.5358 120.724 17.0847C119.712 16.6335 118.834 15.9627 118.088 15.0723C117.342 14.1818 116.978 13.0183 116.978 11.5758C116.978 10.1332 117.325 8.89255 118.03 7.77652C118.73 6.66049 119.764 5.78191 121.134 5.13486C122.504 4.4878 124.151 4.16724 126.07 4.16724C127.301 4.16724 128.457 4.32752 129.532 4.64808C130.607 4.96864 131.544 5.44355 132.341 6.06686C132.965 6.58332 133.462 7.1354 133.832 7.72309C134.197 8.31672 134.381 8.89848 134.381 9.48024C134.381 10.4004 134.075 11.1424 133.474 11.7004C132.867 12.2584 132.075 12.5374 131.093 12.5374C130.613 12.5374 130.174 12.4425 129.775 12.2466C129.376 12.0507 128.948 11.7301 128.492 11.2789C127.989 10.7862 127.538 10.4419 127.128 10.246C126.717 10.0561 126.215 9.95515 125.608 9.95515C125.001 9.95515 124.561 10.0857 124.226 10.341C123.891 10.5963 123.723 10.899 123.723 11.2433C123.723 11.736 124.018 12.1278 124.602 12.4187C125.186 12.7096 126.128 13.0361 127.423 13.3982C128.972 13.8494 130.249 14.3005 131.266 14.7517C132.283 15.2029 133.156 15.8737 133.902 16.7641C134.647 17.6546 135.017 18.8181 135.017 20.2606C135.017 21.7031 134.647 23.0685 133.902 24.2379C133.156 25.4074 132.046 26.3275 130.561 26.9924C129.076 27.6573 127.266 27.9897 125.139 27.9897C123.885 27.9897 122.7 27.8294 121.579 27.5088L121.568 27.5207Z"
                                    fill="#3C3C3B"></path>
                                <path
                                    d="M7.80274 15.375H8.5888C9.29394 15.375 9.87193 15.9627 9.87193 16.6929V27.8175C9.87193 29.0523 8.89513 30.0615 7.68714 30.0615H7.63512C7.02246 30.0615 6.52539 29.5509 6.52539 28.9217V16.6929C6.52539 15.9686 7.0976 15.375 7.80852 15.375H7.80274Z"
                                    fill="#267D3C"></path>
                                <path
                                    d="M4.94177 33C7.67104 33 9.88355 30.7276 9.88355 27.9244C9.88355 25.1213 7.67104 22.8489 4.94177 22.8489C2.21251 22.8489 0 25.1213 0 27.9244C0 30.7276 2.21251 33 4.94177 33Z"
                                    fill="#39A935"></path>
                                <path
                                    d="M16.0737 4.5354H21.9691C22.4431 4.5354 22.8245 4.9272 22.8245 5.41398V28.061C22.8245 28.9812 22.0963 29.7291 21.2004 29.7291H16.0737C15.5997 29.7291 15.2183 29.3373 15.2183 28.8506V5.41398C15.2183 4.9272 15.5997 4.5354 16.0737 4.5354Z"
                                    fill="#267D3C"></path>
                                <path
                                    d="M9.00187 12.0618L8.96182 12.0856C6.62033 13.474 5.81807 16.5492 7.16994 18.954L13.6549 30.4905C15.0068 32.8953 18.0009 33.7193 20.3424 32.3309L20.3824 32.3071C22.7239 30.9186 23.5262 27.8435 22.1743 25.4386L15.6893 13.9022C14.3374 11.4973 11.3434 10.6734 9.00187 12.0618Z"
                                    fill="#39A935"></path>
                                <path
                                    d="M33.0145 21.7211C33.8989 21.7211 34.7369 21.9289 35.4999 22.2791L24.3968 2.52899C23.0385 0.112908 20.0272 -0.718176 17.6748 0.676858C15.3224 2.07189 14.519 5.15878 15.8773 7.57486L26.9977 27.3547C27.2983 24.1966 29.8645 21.7152 33.0145 21.7152V21.7211Z"
                                    fill="#39A935"></path>
                                <path
                                    d="M37.5458 26.0487C37.517 25.9774 37.4881 25.9121 37.4534 25.8409C36.6789 24.0956 34.9738 22.8787 32.9855 22.8787C30.2748 22.8787 28.0669 25.1463 28.0669 27.9305C28.0669 28.9575 28.3674 29.9073 28.8819 30.7087C28.9108 30.7502 28.9397 30.7918 28.9685 30.8333C29.8586 32.1334 31.3267 32.9882 32.9855 32.9882C35.6963 32.9882 37.9042 30.7205 37.9042 27.9364C37.9042 27.2715 37.7713 26.6364 37.5401 26.0546L37.5458 26.0487ZM32.9855 29.9488C31.8989 29.9488 31.0204 29.0465 31.0204 27.9305C31.0204 26.8144 31.8989 25.9121 32.9855 25.9121C34.0722 25.9121 34.9507 26.8144 34.9507 27.9305C34.9507 29.0465 34.0722 29.9488 32.9855 29.9488Z"
                                    fill="#39A935"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_1605_2219">
                                    <rect width="135" height="33" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </template>
                <template #end>
                    <div class="flex items-center gap-2">
                        <div>
                            <router-link to="/contacto"> <Button label="Contacto" text plain /></router-link>
                        </div> 
                        <Button label="Blog" text plain />
                        <div>
                            <router-link to="/registro"> <Button label="Registrarse" text plain /></router-link>
                        </div>                
                        <div>
                            <router-link to="/login"> <Button class="btnlogin green" label="Iniciar Sesión"  size="small" /></router-link>
                        </div>
                    </div>
                </template>
            </Toolbar>
        </div>
    </header>
    <RouterView />
    <footer>
        <div class="footer-sec">
            <div class="container">
                <div class="footer-wrapper">
                    <div class="footer-menu-upper">
                        <div class="row">
                            <div class="col-md-3 col-sm-12 d-none">

                            </div>
                            <div class="col-md-12 col-sm-12">
                                <div class="footer-menu-right">


                                    <div class="footer-menu-right-box">
                                        <h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="135" height="33"
                                                viewBox="0 0 135 33" fill="none">
                                                <g clip-path="url(#clip0_1605_2219)">
                                                    <path
                                                        d="M46.2793 26.7491C45.655 26.1258 45.3372 25.3659 45.3372 24.4636V8.0378C45.3372 7.07018 45.6897 6.2391 46.3891 5.54455C47.0885 4.85 47.9439 4.49976 48.9438 4.49976C49.9437 4.49976 50.8916 4.79657 51.6545 5.38427C52.4175 5.97196 53.0301 6.74962 53.4867 7.71724L57.8737 16.8948H58.1858L62.5727 7.71724C63.0293 6.74962 63.6419 5.97196 64.4049 5.38427C65.1678 4.79657 66.0695 4.49976 67.1156 4.49976C68.1618 4.49976 68.971 4.85 69.6703 5.54455C70.3697 6.24503 70.7223 7.07612 70.7223 8.0378V24.4577C70.7223 25.36 70.4102 26.1198 69.7802 26.7431C69.1501 27.3665 68.3699 27.6751 67.4278 27.6751C66.4856 27.6751 65.7054 27.3605 65.0753 26.7431C64.4511 26.1198 64.1332 25.36 64.1332 24.4577V17.5359H63.8211L61.6248 22.2078C61.1451 23.217 60.6306 23.9531 60.0873 24.4161C59.544 24.8791 58.8562 25.1107 58.0181 25.1107C57.1801 25.1107 56.4923 24.8791 55.949 24.4161C55.4057 23.9531 54.8913 23.217 54.4115 22.2078L52.2152 17.5359H51.9031V24.4577C51.9031 25.36 51.591 26.1198 50.961 26.7431C50.3309 27.3665 49.5507 27.6751 48.6086 27.6751C47.6664 27.6751 46.8862 27.3605 46.2562 26.7431L46.2793 26.7491Z"
                                                        fill="#3C3C3B"></path>
                                                    <path
                                                        d="M77.7563 26.8619C76.2939 26.102 75.1727 25.0275 74.4039 23.6444C73.6294 22.2612 73.2422 20.6525 73.2422 18.83V7.71724C73.2422 6.81492 73.5543 6.05507 74.1843 5.43176C74.8143 4.80844 75.5946 4.49976 76.5367 4.49976C77.4788 4.49976 78.2591 4.81438 78.8891 5.43176C79.5133 6.05507 79.8312 6.81492 79.8312 7.71724V18.8241C79.8312 19.9164 80.1318 20.8128 80.7387 21.4954C81.3455 22.1841 82.0854 22.5284 82.9639 22.5284C83.8424 22.5284 84.5823 22.1841 85.1891 21.4954C85.796 20.8068 86.0966 19.9164 86.0966 18.8241V7.71724C86.0966 6.81492 86.4087 6.05507 87.0387 5.43176C87.6687 4.80844 88.449 4.49976 89.3911 4.49976C90.3332 4.49976 91.1135 4.81438 91.7435 5.43176C92.3735 6.05507 92.6856 6.81492 92.6856 7.71724V18.8241C92.6856 20.6465 92.2984 22.2553 91.5239 23.6385C90.7494 25.0216 89.6338 26.0961 88.1715 26.8559C86.7092 27.6158 84.9753 27.9957 82.9697 27.9957C80.9641 27.9957 79.2301 27.6158 77.7678 26.8559L77.7563 26.8619Z"
                                                        fill="#3C3C3B"></path>
                                                    <path
                                                        d="M101.743 27.0695C100.968 26.4462 100.35 25.4726 99.8933 24.1369L94.6278 9.03494C94.4833 8.64908 94.4082 8.22166 94.4082 7.74676C94.4082 6.84443 94.703 6.07865 95.3041 5.44346C95.9052 4.80828 96.697 4.49365 97.7027 4.49365C98.6217 4.49365 99.3731 4.76079 99.9626 5.30099C100.546 5.83526 100.997 6.6426 101.309 7.71707L104.916 19.9518H105.228L108.835 7.71707C109.147 6.6426 109.598 5.8412 110.181 5.30099C110.765 4.76672 111.517 4.49365 112.436 4.49365C113.459 4.49365 114.262 4.81421 114.852 5.46127C115.435 6.10833 115.73 6.88005 115.73 7.78237C115.73 8.23353 115.655 8.64908 115.51 9.04087L110.245 24.1429C109.788 25.4726 109.17 26.4521 108.395 27.0754C107.621 27.6987 106.517 28.0074 105.072 28.0074C103.627 28.0074 102.523 27.6987 101.749 27.0754L101.743 27.0695Z"
                                                        fill="#3C3C3B"></path>
                                                    <path
                                                        d="M121.568 27.5207C120.446 27.2002 119.493 26.749 118.701 26.1672C117.238 25.0928 116.504 23.9352 116.504 22.6886C116.504 21.7684 116.805 21.0264 117.412 20.4684C118.019 19.9104 118.811 19.6313 119.793 19.6313C120.232 19.6313 120.637 19.7145 121.018 19.8866C121.394 20.0588 121.833 20.3675 122.336 20.8186C122.92 21.3351 123.458 21.6912 123.949 21.899C124.44 22.1068 124.989 22.2077 125.596 22.2077C126.475 22.2077 127.139 22.0534 127.59 21.7387C128.041 21.4301 128.266 21.0442 128.266 20.593C128.266 20.1003 127.972 19.7085 127.388 19.4176C126.804 19.1268 125.862 18.8003 124.567 18.4381C123.018 17.987 121.741 17.5358 120.724 17.0847C119.712 16.6335 118.834 15.9627 118.088 15.0723C117.342 14.1818 116.978 13.0183 116.978 11.5758C116.978 10.1332 117.325 8.89255 118.03 7.77652C118.73 6.66049 119.764 5.78191 121.134 5.13486C122.504 4.4878 124.151 4.16724 126.07 4.16724C127.301 4.16724 128.457 4.32752 129.532 4.64808C130.607 4.96864 131.544 5.44355 132.341 6.06686C132.965 6.58332 133.462 7.1354 133.832 7.72309C134.197 8.31672 134.381 8.89848 134.381 9.48024C134.381 10.4004 134.075 11.1424 133.474 11.7004C132.867 12.2584 132.075 12.5374 131.093 12.5374C130.613 12.5374 130.174 12.4425 129.775 12.2466C129.376 12.0507 128.948 11.7301 128.492 11.2789C127.989 10.7862 127.538 10.4419 127.128 10.246C126.717 10.0561 126.215 9.95515 125.608 9.95515C125.001 9.95515 124.561 10.0857 124.226 10.341C123.891 10.5963 123.723 10.899 123.723 11.2433C123.723 11.736 124.018 12.1278 124.602 12.4187C125.186 12.7096 126.128 13.0361 127.423 13.3982C128.972 13.8494 130.249 14.3005 131.266 14.7517C132.283 15.2029 133.156 15.8737 133.902 16.7641C134.647 17.6546 135.017 18.8181 135.017 20.2606C135.017 21.7031 134.647 23.0685 133.902 24.2379C133.156 25.4074 132.046 26.3275 130.561 26.9924C129.076 27.6573 127.266 27.9897 125.139 27.9897C123.885 27.9897 122.7 27.8294 121.579 27.5088L121.568 27.5207Z"
                                                        fill="#3C3C3B"></path>
                                                    <path
                                                        d="M7.80274 15.375H8.5888C9.29394 15.375 9.87193 15.9627 9.87193 16.6929V27.8175C9.87193 29.0523 8.89513 30.0615 7.68714 30.0615H7.63512C7.02246 30.0615 6.52539 29.5509 6.52539 28.9217V16.6929C6.52539 15.9686 7.0976 15.375 7.80852 15.375H7.80274Z"
                                                        fill="#267D3C"></path>
                                                    <path
                                                        d="M4.94177 33C7.67104 33 9.88355 30.7276 9.88355 27.9244C9.88355 25.1213 7.67104 22.8489 4.94177 22.8489C2.21251 22.8489 0 25.1213 0 27.9244C0 30.7276 2.21251 33 4.94177 33Z"
                                                        fill="#39A935"></path>
                                                    <path
                                                        d="M16.0737 4.5354H21.9691C22.4431 4.5354 22.8245 4.9272 22.8245 5.41398V28.061C22.8245 28.9812 22.0963 29.7291 21.2004 29.7291H16.0737C15.5997 29.7291 15.2183 29.3373 15.2183 28.8506V5.41398C15.2183 4.9272 15.5997 4.5354 16.0737 4.5354Z"
                                                        fill="#267D3C"></path>
                                                    <path
                                                        d="M9.00187 12.0618L8.96182 12.0856C6.62033 13.474 5.81807 16.5492 7.16994 18.954L13.6549 30.4905C15.0068 32.8953 18.0009 33.7193 20.3424 32.3309L20.3824 32.3071C22.7239 30.9186 23.5262 27.8435 22.1743 25.4386L15.6893 13.9022C14.3374 11.4973 11.3434 10.6734 9.00187 12.0618Z"
                                                        fill="#39A935"></path>
                                                    <path
                                                        d="M33.0145 21.7211C33.8989 21.7211 34.7369 21.9289 35.4999 22.2791L24.3968 2.52899C23.0385 0.112908 20.0272 -0.718176 17.6748 0.676858C15.3224 2.07189 14.519 5.15878 15.8773 7.57486L26.9977 27.3547C27.2983 24.1966 29.8645 21.7152 33.0145 21.7152V21.7211Z"
                                                        fill="#39A935"></path>
                                                    <path
                                                        d="M37.5458 26.0487C37.517 25.9774 37.4881 25.9121 37.4534 25.8409C36.6789 24.0956 34.9738 22.8787 32.9855 22.8787C30.2748 22.8787 28.0669 25.1463 28.0669 27.9305C28.0669 28.9575 28.3674 29.9073 28.8819 30.7087C28.9108 30.7502 28.9397 30.7918 28.9685 30.8333C29.8586 32.1334 31.3267 32.9882 32.9855 32.9882C35.6963 32.9882 37.9042 30.7205 37.9042 27.9364C37.9042 27.2715 37.7713 26.6364 37.5401 26.0546L37.5458 26.0487ZM32.9855 29.9488C31.8989 29.9488 31.0204 29.0465 31.0204 27.9305C31.0204 26.8144 31.8989 25.9121 32.9855 25.9121C34.0722 25.9121 34.9507 26.8144 34.9507 27.9305C34.9507 29.0465 34.0722 29.9488 32.9855 29.9488Z"
                                                        fill="#39A935"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1605_2219">
                                                        <rect width="135" height="33" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </h3>
                                        <ul class="fotter-list">

                                        </ul>
                                    </div>


                                    <div class="footer-menu-right-box">
                                        <h3>Dirección</h3>
                                        <ul class="fotter-list">
                                            <li><a href="#">6 calle este,</a></li>
                                            <li><a href="#"> 12 avenida, Puerto Cortés</a></li>
                                        </ul>
                                    </div>
                                    <div class="footer-menu-right-box">
                                        <h3> </h3>
                                        <div class="social-media-logo">
                                            <a href="https://wa.me/50488960857"><i
                                                    class="fa-brands fa-whatsapp"></i></a>
                                            <a href="https://linkedin.com/company/muvsolutions"><i
                                                    class="fa-brands fa-linkedin"></i></a>
                                            <a href="https://instagram.com/muvssolutions">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Toast from 'primevue/toast';

</script>

<style>
header {
    position: fixed;
    z-index: 9999;  
    width: 100%;
}
                        
.green {
    background-color: #43C25F;
}

.txt-green {
    color: #43C25F !important;
}

.btnlogin {
    border: 0;
}

.btn-secondary-header {
    background: transparent !important;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
    width: 100%;
    padding-right: var(--bs-gutter-x, .75rem);
    padding-left: var(--bs-gutter-x, .75rem);
    margin-right: auto;
    margin-left: auto;
}

header .navbar-brand {
    margin-left: 34px;
}

.hero-banner-wrapper a:hover {
    color: #fff;
}

.footer-menu-right.footer-menu-right {
    justify-content: space-around;
}

.input-field {
    position: relative;
    flex-basis: 450px;
}

.input-field label.error {
    position: absolute;
    color: red;
    font-size: 12px;
    top: calc(100% + 5px);
    line-height: 12px;
    margin: 0;
}

.input-field [name].error {
    border-color: red;
}


@media (min-width: 1600px) {
    .container {
        max-width: 1560px;
    }

    .freight-list-requested ul button {
        padding: 14px 10px;
    }

    .freight-list-requested ul button span {
        font-size: 16px;
    }
}

@media screen and (max-width:1440px) {
    /* img.hero-banner-truck {
        position: absolute;
        bottom: -19px;
        left: -114px;
    } */
}

@media screen and (max-width:1199px) {
    /* img.hero-banner-truck{
        display: none;
    } */

}

@media screen and (max-width:992px) {
    .laptop-img-box {
        width: 100%
    }

    header{
        margin-bottom: 200px;
    }

    .hero-banner-truck {
        left: -20%;
    }

    img.road-img-vector {
        left: -20%
    }

    .managment-platform-section .container:before {
        content: "";
        filter: blur(28px);
    }

    .navbar-menus {
        display: flex;
        /* justify-content: flex-end; */
        width: calc(100% - 20px);
        background-color: #fff;
        position: absolute;
        left: 10px;
        top: 89px;
        border-radius: 20px;
        padding: 20px;
    }

    #navbarNavAltMarkup li.nav-item {
        width: 100%;
        display: flex;
        justify-content: center;
        border-bottom: 1px dashed lightgrey;
    }

    #navbarNavAltMarkup li.nav-item:last-child {
        border-bottom: none
    }

    #navbarNavAltMarkup {
        padding: 0 10px;
        background-color: #eff6fa;
    }

    .navbar-nav .nav-link:last-child {
        margin: 10px 0;
    }

    .navbar-nav {
        margin: 0 auto;
        width: 100%;
    }

    .navbar-expand-lg .navbar-nav .nav-link {
        text-align: left;
        margin: 10px 0;
    }

    .navbar-menus a {
        color: #141718;
        margin-right: 0px;
        font-family: var(--font-medium);
    }

    section.login-page-wrapper {
        height: auto;
        overflow: initial;
        min-height: 800px;
    }

    .left-login-page {
        display: none
    }

    .right-login-page {
        min-height: 750px;
        padding: 30px;
        height: 100vh;
    }

    .laptop-img-box img {
        display: block;
    }
}

/* For tablets and mobile */
@media screen and (max-width:767px) {
    .hero-banner-wrapper img {
        margin-top: 0px;
    }

    .hero-banner-truck {
        display: none;
    }

    .hero-section {
        height: 650px
    }

    .laptop-img-box svg {
        display: none;
    }

    .hero-banner-wrapper p {
        padding: 0 17%;
    }

    .sign-up-right {
        margin-top: 45px
    }
}

@media screen and (max-width:575px) {
    .on-map-wrapper {
        margin-top: -272px;
    }

    .managment-platform-detail-section {
        background-color: #141718;
        padding: 80px 20px 300px 20px;
    }

    .footer-menu-down {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .hero-banner-heading h1 {
        font-size: 30px;
    }

    .move-fridge-left-heading h2 {
        font-size: 28px;
    }

    .managment-platform-inner-right-heading h2 {
        font-size: 28px;
    }

    .connect-companies-wrapper h2 {
        font-size: 28px;
    }

    .managment-platform-detail-right-wrapper h2 {
        font-size: 28px;
    }

    .on-map-wrapper h2 {
        font-size: 28px;
    }

    .move-fridge-right-inner-box p {
        font-size: 14px;
    }

    .managment-platform-inner-right p {
        font-size: 14px;
    }

    .connect-companies-wrapper p {
        font-size: 14px;
    }

    .managment-platform-detail-right-wrapper p {
        font-size: 14px;
    }

    .on-map-wrapper p {
        font-size: 14px;
    }

    .hero-section {
        min-height: 100vh;
    }

    .hero-section>.container {
        height: 100%
    }

    .hero-section .hero-banner-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 6%;
    }

    .radion-label-content p {
        display: none;
    }

    .login-radio-outer label {
        gap: 5px;
        padding: 20px 10px;
    }

    .input-radio {
        width: 20px;
        max-width: 20px;
        height: 20px;
    }

    .radion-label-content h3 {
        font-size: 0.8em
    }

    .sign-up-left {
        justify-content: center;
    }

    .company-signup .sign-up-section {
        padding: 30px;
    }
}

@media screen and (max-width:480px) {
    .term-condition-list {
        justify-content: center;
    }
}

/* webfonts */




/* webfonts end */

:root {
    --secondary-color: #141718;
    --primary-color: #43C25F;
    --light-color: #969696;
    --white-text: #fff;
    --text-color: #141718;
    --heading-color: #141718;
    --font: 'inter-Regular';
    --font-light: 'inter-Light';
    --font-medium: 'inter-Medium';
    --font-semibold: 'inter-SemiBold';
    --font-bold: 'inter-Bold';
    --font-bold: 'inter-ExtraBold';
}

html {
    margin: 0;
}

body {

    overflow-x: hidden;
    color: var(--text-color);
    height: 100vh;
    margin: 0 !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    white-space: normal;
    word-break: break-word;

    line-height: 1.1;
    color: var(--heading-color);
}

h1 {
    font-size: 65px;
}

h2 {
    font-size: 40px;
}

h3,
.h3 {
    font-size: 30px;
}

h4,
.h4 {
    font-size: 28px;
}

h5 {
    font-size: 22px;
}

h6 {
    font-size: 20px;
}

.btn {
    display: inline-flex;
    border: unset;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    min-height: 48px;
    border-radius: 6px;
}

.primary-btn {
    background-color: var(--primary-color);
    min-width: 120px;
    color: var(--white-text) !important;
    box-shadow: 0px 4px 21px 0px rgba(0, 0, 0, 0.13);
    border-radius: 6px;
    gap: 24px;
}

.outline-btn {
    border: 1px solid #39393B;
    border-radius: 6px;
}

.header-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0px 10px;
}

.navbar-menus {
    display: flex;
    justify-content: flex-end;
}

.navbar-menus a {
    color: #141718;
    margin-right: 70px;
    font-family: var(--font-medium);
}

.navbar-expand-lg .navbar-nav .nav-link {
    padding: 10px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.36px;
}

.navbar-menus a:hover,
.navbar-menus a:focus {
    color: #141718;
}

.navbar-nav {
    align-items: center;
}

.navbar-nav .nav-link:last-child {
    margin-right: 34px;
}

.next-btn-box a {
    font-size: 18px;
    margin-right: unset;
}

.navbar {
    padding: 20px 0px;
    position: absolute;
    width: 100%;
    z-index: 3;
}

.hero-section {
    background-color: var(--secondary-color);

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 750px;
    position: relative;
    background-color: #141818;
    overflow: hidden;
}

.hero-section::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #DEECF4;
    position: absolute;
    top: 0;
    z-index: 0;
    clip-path: polygon(0 0, 100% 0, 100% 71%, 0% 100%);
}

.hero-sec-blur-effect {
    border-radius: 318px;
    opacity: 0.5;
    background: var(--2, linear-gradient(90deg, #43C25F 3.91%, #4EB563 100%));
    filter: blur(215px);
    width: 318px;
    height: 317px;
    position: absolute;
    top: -84px;
    z-index: 1;
    left: 0;
    right: 0;
    margin: 0 auto;
}

img.road-img-vector {
    position: absolute;
    z-index: 1;
    bottom: 11%;
    width: 1800px;
}

img.hero-banner-right-effect {
    position: absolute;
    right: 0;
    z-index: 1;
    top: 0;
}

img.hero-banner-left-effect {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
}

.hero-banner-wrapper {
    position: relative;
    z-index: 2;
}

.btn-check:focus+.btn,
.btn:focus {
    outline: 0;
    box-shadow: unset;
}

.hero-banner-heading {
    padding-top: 88px;
}

.hero-banner-heading h1 {
    text-align: center;
    max-width: 841px;
    text-align: center;
    margin: 0 auto;
    letter-spacing: -1.3px;
    font-size: 40px;
}

.hero-banner-wrapper p {
    text-align: center;
    margin: 10px 0;
    font-size: 18px;
    letter-spacing: -0.36px;

}

.dark-btn {
    background-color: #141718;
    color: #fff;
    display: flex;
    gap: 5px;
}

.hero-banner-wrapper a {
    margin: 0 auto;
    width: 153px;
}

.hero-banner-wrapper a:hover {
    color: #fff;
}

.hero-banner-heading h1 span {
    color: var(--primary-color);
}

/* .hero-banner-wrapper img {
    margin: 0 auto;
    display: flex;
    margin-top: -25px;
    max-width: 1005px;
} */
.hero-banner-truck {
    position: absolute;
    bottom: -22px;
    z-index: 2;
}

.move-fridge-section {
    background-color: #141718;
    padding: 80px 20px 157px 20px;
    position: relative;
}

.move-fridge-left-heading h2 {
    color: #fff;
    max-width: 444px;
    font-size: 45px;
}

.move-fridge-left-heading h2 span {
    color: var(--primary-color);
}

.move-fridge-left p {
    color: var(--light-color);
    max-width: 422px;
    line-height: 17px;
    font-size: 14px;
    margin-bottom: 38px;
    letter-spacing: -0.28px;
}

.move-fridge-left {
    max-width: 715px;
    width: 100%;
}

.move-fridge-right {
    max-width: 715px;
    width: 100%;
}


.move-fridge-brand-imges {
    max-width: 400px;
    display: flex;
    gap: 45px;
    flex-wrap: wrap;
    align-items: center;
}

.move-fridge-left-heading {
    margin-bottom: 12px;
}

.move-fridge-right-inner-box img {
    margin-bottom: 33px;
}

.move-fridge-right-inner-box h3 {
    color: #fff;
    font-size: 25px;
    line-height: 27px;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
}

.move-fridge-right-inner-box p {
    color: var(--light-color);
    font-size: 16px;
    max-width: 319px;
    letter-spacing: -0.32px;
}

.managment-platform-section {
    position: relative;
    padding: 150px 20px;
}

.tablet-img {
    width: 100%;
}

.background-design-right {
    width: 286px;
    height: 285px;
    border-radius: 286px;
    opacity: 0.5;
    background: var(--2, linear-gradient(90deg, #43C25F 3.91%, #4EB563 100%));
    filter: blur(215px);
    transform: rotate(-90deg);
    flex-shrink: 0;
    position: absolute;
    right: 0;
    top: 59px;
}

.background-design-left {
    width: 286px;
    height: 285px;
    border-radius: 286px;
    opacity: 0.5;
    background: var(--2, linear-gradient(90deg, #43C25F 3.91%, #4EB563 100%));
    filter: blur(215px);
    position: absolute;
    /* top: 59px; */
    bottom: 0;
}

.managment-platform-section .container:before {
    content: "";
    width: 40%;
    height: 100%;
    background-color: #DEECF4;
    position: absolute;
    left: 0;
    z-index: -1;
    top: 0;
}

.managment-platform-inner-right-heading h2 {
    line-height: 49px;
    margin-bottom: 23px;
    color: var(--heading-color);
    letter-spacing: -0.8px;
}

.managment-platform-inner-right-heading h2 span {
    color: var(--primary-color);
}

.managment-platform-inner-right-heading p {
    color: #39393B;
    font-size: 18px;

    margin-bottom: 44px;

}

.managment-platform-list li {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 26px;
    margin-bottom: 24px;
    color: #39393B;

    letter-spacing: -0.32px;
}

.managment-platform-list {
    padding-left: 0px;
}

.divider {
    width: 100%;
    height: 1px;
    background-color: #B8B8B8;
    opacity: 0.2;
}

.managment-platform-details {
    display: flex;
    gap: 16px;
    align-items: center;
}

.managment-platform-details p {
    max-width: 204px;
    font-size: 14px !important;
    margin-bottom: 0px;
    letter-spacing: -0.28px !important;
}

.managment-platform-inner-right .divider {
    margin-bottom: 28px;
}

.connect-companies-section {
    padding: 80px 20px;
}

.connect-companies-wrapper h2 {
    max-width: 512px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 9px;
    letter-spacing: -0.8px;
}

.connect-companies-wrapper h2 span {
    color: var(--primary-color);
}

.connect-companies-wrapper p {
    font-size: 18px;
    text-align: center;
    margin-bottom: 41px;
    color: #39393B;
    letter-spacing: -0.36px;
}

.connect-companies-video-box {
    background-color: #F5F5F5;
    padding: 21px;
    border-radius: 25px;
    position: relative;
    max-width: 1421px;
    margin: 0 auto;
}

.connect-companies-video-box img {
    width: 100%;
}

.videos-play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 75px;
    height: 75px;
    cursor: pointer;
}

.connect-companies-btns {
    margin-top: 32px;
    /* margin: 0 auto; */
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
}

.connect-companies-btns .outline-btn {
    font-size: 18px;
    font-weight: 600;
    color: #39393B;
    padding: 13px 20px;
    height: 48px;
}

.connect-companies-btns .primary-btn {
    padding: 13px 14px;
    font-size: 18px;
    font-weight: 600;
    height: 48px;
}

.managment-platform-detail-section {
    background-color: #141718;
    padding: 80px 20px 500px 20px;
    position: relative;
}

.managment-platform-detail-img-box img {
    width: 100%;
    border-radius: 25px;
}

.managment-platform-detail-img-box {
    padding: 17px 18px;
    background-color: #0B0D0E;
    border-radius: 25px;
}

.managment-platform-detail-right-wrapper h2 {
    max-width: 552px;
    color: #fff;
    letter-spacing: -0.8px;
}

h2 span {
    color: var(--primary-color);
}

.truck-count-box h3 {
    color: #fff;
    font-size: 45px;
    min-width: 60px;
}

.truck-count-box {
    display: flex;
    gap: 14px;
    align-items: center;
    max-width: 385px;
    border-radius: 13px;
    border: 1px solid #2F3334;
    background: #0C0F10;
    padding: 16px 38px;
    margin-bottom: 46px;
}

.truck-count-box img {
    transform: rotateY(180deg);
}

.truck-count-box p {
    color: #CECECE;
    margin-bottom: 0px;
    opacity: 0.8;
    max-width: 176px;
    font-size: 14px;
}

.truck-count-box {
    display: flex;
    gap: 14px;
    align-items: center;
}

.managment-platform-detail-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.managment-platform-detail-list-wrapper ul li {
    color: #fff;
    gap: 9px;
    font-size: 18px;
    letter-spacing: -0.36px;
}

.managment-platform-detail-right-wrapper p {
    font-size: 18px;
    color: #969696;
    margin-top: 11px;
    letter-spacing: -0.36px;
}

.on-map-section {
    background-image: url(../images/map-background.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 50px 20px;
}

.on-map-wrapper h2 {
    color: #fff;
    max-width: 515px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 11px;
    letter-spacing: -0.8px;
}

.on-map-wrapper p {
    font-size: 18px;
    color: #CECECE;
    text-align: center;
    margin-bottom: 51px;
    letter-spacing: -0.36px;
}

.on-map-wrapper {
    margin-top: -465px;
    position: relative;
}

.on-map-wrapper img {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
}

.truck-count-box p {
    font-size: 14px;
    line-height: 17px;
    margin-top: 0px;
    letter-spacing: -0.28px;
}

.footer-sec {
    padding: 20px;
}

.footer-logo img {
    margin-bottom: 28px;
}

.footer-logo p {
    max-width: 211px;
    color: #51585C;
    font-size: 18px;
    letter-spacing: -0.36px;
}

.footer-menu-right.footer-menu-right {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
}

.fotter-list li {
    list-style-type: none;
}

.fotter-list li a {
    color: #51585C;
    text-decoration: none;
    letter-spacing: -0.32px;
}

.fotter-list {
    padding-left: 0px;
    margin: 0;
}

.footer-menu-right-box h3 {
    font-size: 22px;
    color: var(--heading-color);
    margin-bottom: 5px;
    letter-spacing: -0.44px;
}

.term-condition-list {
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0px;
}

.term-condition-list li {
    list-style-type: none;
    padding: 0px 20px;
    border-right: 1px solid #dcdede;
}

.term-condition-list li a {
    color: #51585C;
    text-decoration: none;
    font-size: 14px;
}

.term-condition-list li:last-child {
    border-right: unset;
}

.term-condition-list li:first-child {
    padding-left: 0px;
}

.footer-menu-down {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.social-media-logo {
    display: flex;
    gap: 25px;
    /* align-items: center; */
}

.managment-platform-details h3 {
    width: 100%;
    max-width: 55px;
}

.glow-effect {
    width: 282px;
    height: 282px;
    position: absolute;
    /* background-color: aqua; */
    bottom: 126px;
    left: -108px;
    border-radius: 282px;
    background: #5282C3;
    filter: blur(185.5px);
}

img.ring-effect {
    position: absolute;
    right: 0;
    top: -235px;
}

.managment-platform-inner-right p {
    font-size: 18px;
    letter-spacing: -0.36px;
}

.managment-platform-inner-right {
    padding-left: 50px;
}

.managment-platform-detail-right {
    padding-left: 50px;
}

.navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: unset;
}


.navbar-toggler span {
    width: 30px;
    height: 3px;
    background-color: #000;
    display: block;
    margin-bottom: 6px;
    transition: all .6s cubic-bezier(0.250, 0.100, 0.250, 1.000);
}

.navbar-toggler[aria-expanded="true"] span:first-of-type {
    transform: rotate(45deg) translate(6px, 6px);
}

.navbar-toggler[aria-expanded="true"] span:nth-of-type(2) {
    opacity: 0;
}

.navbar-toggler[aria-expanded="true"] span:last-of-type {
    transform: rotate(-45deg) translate(7px, -7px);
}

/* ==============================

    login CSS

===================================*/


.left-login-page {
    background-image: url(../images/login-bg.png);
    height: 100vh;
    background-position: top right;
    background-size: cover;
    background-repeat: no-repeat;
}

.login-form-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 686px;
    /* margin-left: 50px; */
}

.login-heading {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    /* margin-bottom: 90px; */
    padding: 10px 0px 0px 10px;
}

.right-login-page {
    height: 100%;
}

.login-form-box {
    width: 100%;
    max-width: 592px;
}

.login-radio-box {
    max-width: 288px;
    width: 100%;
    border: 1px solid #dfdfdf;
    border-radius: 10px;
    padding: 27px 20px;
}

.login-radio-wrapper {
    display: flex;
    gap: 16px;
    max-width: 592px;
    margin-bottom: 45px !important;
}

.login-radio-outer {
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    max-width: 288px;
    background-color: #fff;
}

.form label {
    cursor: pointer;
}

.input-radio {
    box-shadow: 0px 0px 0px 4px #43C25F;
    font-size: 3em;
    width: 25px;
    max-width: 25px;
    height: 25px;
    margin-right: 7px;

    border: 4px solid #fff;
    background-clip: border-box;
    border-radius: 50%;
    appearance: none;
    transition: background-color 0.3s, box-shadow 0.3s;

}

.login-radio-outer .input-radio {
    flex: 0 0 28px;
}

label {
    display: flex;
    margin: 10px 15px;
}

.input-radio.on:checked {
    box-shadow: 0px 0px 0px 4px #43C25F;
    background-color: #43C25F;
}

.input-radio.on:checked+label {
    background-color: #ff5151;
}

.login-radio-outer label {
    display: flex;
    margin: unset;
    gap: 16px;
    align-items: center;
    cursor: pointer;
    height: 100%;
}

.login-form-box .divider {
    max-width: 592px;
    margin-bottom: 24px;
}

.login-form-box .form-field label {
    font-size: 18px;
    letter-spacing: -0.28px;
    line-height: 48px;

    color: #141718;
    margin: 0px;
}

.login-form-box .form-field input {
    width: 100%;
    max-width: 592px;
    border-radius: 5px;
    border: 1.3px solid #DBDBDB;
    background: #fff;
    padding: 12px 30px 12px 12px;
    color: #51585C;
    font-size: 14px;
    letter-spacing: -0.28px;
    min-height: 48px;
}

.login-form-box .form-field {
    margin-bottom: 24px;
}

.login-form-box .primary-btn {
    width: 100%;
}

.light-btn {
    width: 100%;
    background-color: #dbf1e0;
    color: #39393B;
    font-size: 14px;

    /* box-shadow: 0px 4px 21px 0px rgba(0, 0, 0, 0.13); */

}

.radion-label-content p {
    color: #43c25f;
    margin-top: 0px !important;
    font-size: 14px;

    margin-bottom: 0px;
}

.radion-label-content h3 {
    font-size: 22px;
}

.login-left-heading {
    display: flex;
    align-content: flex-end;
    height: 100%;
    align-items: flex-end;
    /* max-width: 547px; */
    justify-content: flex-end;
    width: 100%;
    /* margin-bottom: 40px; */
}

.login-left-heading h2 {
    max-width: 400px;
    margin-bottom: 20px;
    margin-right: 0px;
    font-size: 28px;
    text-align: center;
}

.login-form-box p {
    margin-bottom: 0px;
    margin-top: 26px;
}

.input-radio.on:checked+label {
    background-color: #aaeda2b8 !important;
}

input#login-check1:checked+.login-radio-box {
    background: chartreuse;
}

.login-radio-outer:has(.input-radio.on:checked) {
    background-image: linear-gradient(90deg, #ecf4f7, #dff0eb);
}

/* ===========================

    Sign up CSS

===============================*/

.sign-up-section {
    background-image: url(../images/Contact-us-bg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 4vh 0px 5vh;
}

.shipper-contact-us .sign-up-section {
    padding-top: calc(88px + 4vh);
}

.sign-up-list {
    padding-left: 0px;
    position: relative;
    margin-bottom: 0px;
}

.sign-up-list li {
    list-style-type: none;
    display: flex;
    gap: 19px;
    align-items: flex-start;
    padding-bottom: 45px;
    font-size: 18px;

    color: #39393B;
    z-index: 7;
    position: relative;
}

/* .sign-up-left h1{
    margin-bottom: 49px;
    position: relative;
} */
.sign-up-left h1:before {
    content: "";
}

.sign-up-para {
    margin-top: 40px;
    font-size: 18px;

    color: #39393B;
    margin-bottom: 38px;
}

.sign-up-left {
    max-width: 598px;
    margin-left: auto;
}

/* ul.sign-up-list:before {
    content: "";
    height: 98%;
    width: 1px;
    position: absolute;
    border-left: 1px dashed #39393B;
    left: 10px;
    z-index: 0;
    top: 4px;
} */
.sign-up-list li:last-child {
    padding-bottom: 0px;
}

.sign-up-form-box {
    border-radius: 21px;
    background: #FFF;
    box-shadow: 0px 8px 99px 0px rgba(194, 211, 222, 0.71);
    max-width: 703px;
    padding: 40px 47px 55px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
}

.sign-up-form-box .form-field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 23px;
    width: 100%;
}

.sign-up-form-box .form-field input {
    min-height: 48px;
    border-radius: 5px;
    border: 1.3px solid #DBDBDB;
    background: #FFF;
    max-width: 450px;
    font-size: 14px;

    letter-spacing: -0.28px;
    width: 100%;
    padding: 10px 30px 10px 19px;
    caret-color: red;
}

.sign-up-form-box .form-field label:not(.error) {
    font-size: 16px;

    letter-spacing: -0.32px;
    color: #141718;
    margin: 0px;
    max-width: 137px;
    width: 100%;
}

.sign-up-form {
    width: 100%;
    margin: 0 auto;
}

.sign-up-form-box .primary-btn:last-child {
    margin-bottom: 0px;
}

.sign-up-form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /* width: 100%; */
}

.sign-up-left h2 {
    margin-bottom: 49px;
    position: relative;
}

.sign-up-left h2:before {
    content: "";
    width: 98px;
    height: 1px;
    background-color: #43c25f;
    position: absolute;
    bottom: -20px;
    border-radius: 90px;
    background-color: #4DB663;
}

.contact-us-wrapper {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-top: 35px;
}

.contact-us-box {
    border-radius: 10px;
    border: 1.3px solid #DBDBDB;
    background: #FFF;
    padding: 26px 23px 22px;
    max-width: 292px;
    width: 100%;
    cursor: pointer;
}

.contact-us-box h4 {
    letter-spacing: -0.36px;
    font-size: 18px;

    color: #141718;
}

.contact-us-box span {
    font-size: 18px;
    color: var(--primary-color);

    letter-spacing: -0.36px;
}

.form-field.form-field-textarea {
    display: flex;
    align-items: flex-start;
}

.form-field.form-field-textarea textarea {
    max-width: 450px;
    border-radius: 5px;
    border: 1.3px solid #DBDBDB;
    background: var(--wh, #FFF);
    padding: 16px 12px;
    width: 100%;
    caret-color: red;
}

.sign-up-heading {
    font-size: 30px;
    font-family: 600;
    color: #141718;
    letter-spacing: -0.6px;
    margin-bottom: 24px;
    width: 100%;
    text-align: center;
}

.sugnup-btn-box {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    justify-content: flex-start;
}

.sugnup-btn-box p {
    margin-bottom: 0px;
}

.sugnup-btn-box .primary-btn {
    max-width: 185px;
    width: 100%;
}

.sugnup-btn-box p {
    font-size: 16px;

}

.sugnup-btn-box span {
    color: var(--primary-color);

}

.sugnup-btn-box p a {
    text-decoration: none;
}

.sugnup-btn-box-inner {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 23px;
    flex-direction: column;
}

.sign-up-left svg {
    margin-bottom: 30px;
    position: relative;
}

.sign-up-logo:before {
    content: "";
    width: 98px;
    height: 1px;
    background-color: #43c25f;
    position: absolute;
    bottom: -20px;
    border-radius: 90px;
    background-color: #4DB663;
}

a.navbar-brand img {
    width: 135px;
}

.sign-up-list li p span {}

.sign-up-list li::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 1px;
    top: 15px;
    border: 1px solid #39393B;
    border-style: dashed;
    z-index: -1;
    left: 10px;
}

.sign-up-list li:last-child::after {
    display: none;
}

.sign-up-list svg {
    flex: 0 0 23px;
    margin-top: 5px;
}

.social-media-logo a i {
    font-size: 31px;
    color: #000;
}

section.login-page-wrapper {
    height: 100vh;
    overflow: hidden;
}

.laptop-img-box svg,
.laptop-img-box img {
    margin: 0 auto;
    width: 100%;
    display: flex;
    max-height: 451px;
}

.laptop-img-box {
    width: 70%;
    margin: auto;
    margin-top: -16px;
}

.laptop-img-box img {
    display: none;
}

footer {
    background-color: #eff6fa;

}

.sign-up-left.for-logo {
    margin-bottom: 30px;
    display: flex;
}

@media screen and (max-width: 1620px) {
    /* img.road-img-vector {
        position: absolute;
        z-index: 1;
        bottom: 104px;
    } */
    /* .hero-banner-wrapper img {
        margin: 0 auto;
        display: flex;
        margin-top: -10px;
        max-width: 1005px;
    } */
}

@media screen and (max-width: 1199px) {
    .sidebar {
        transition: all.3s ease-in;
        transform: translateX(-1000px);
    }
}

@media screen and (max-width: 992px) {
    .footer-menu-right.footer-menu-right {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        flex-direction: column;
    }
}

@media screen and (max-width: 490px) {

    .freights-job-info-form {
        box-sizing: border-box;
        border-radius: 0;
    }

    .form-field.form-field-textarea textarea {
        font-size: 12px;
    }

    .sign-up-form-box .form-field input {
        font-size: 12px;
    }

    .sign-up-form-box {
        padding: 40px 20px 55px;
    }
}

.move-fridge-section,
.managment-platform-section,
.connect-companies-section,
.managment-platform-detail-section,
.on-map-section {
    display: none;
}
</style>
