<template>

    
    <footer id="footer">
        <div class="container">
            <div class="text">
                <p>L.K&copy;</p>                
                <div class="icons">
                    <a href="https://www.linkedin.com/in/lyle-kepkey-17b830251/" target="blank"><img src="https://i.postimg.cc/yN8qf0T5/linkedin.png" alt="LinkedIn"></a>
                    <a href="https://github.com/Lylekepkey" target="blank"><img src="https://i.postimg.cc/3NK2pJhg/github.png" alt="GitHub"></a>
                    <a href=""><img src="https://i.postimg.cc/SsrhQqGX/whatsapp.png" alt="WhatsApp"></a>
                    <a href=""><img src="https://i.postimg.cc/8PsmbH99/email.png" alt="Email"></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style scoped>
img {
 height: 80px;
 aspect-ratio: 5/4;
 object-fit: contain;
}
footer {
    background-color: #cee8f4;
    margin-top: 50px;
    padding-top: 10px;
    padding-bottom: 20px;
}
.container{
    display:flex;
    justify-content: center;
}
.text {
    font-size: smaller;
}

@media (min-width: 315px) and (max-width: 400px) {
    footer {
        width: 745px;
    }
}
@media (min-width: 400px) and (max-width: 500px) {
    footer {
        width: 745px;
    }
}
@media (min-width: 500px) and (max-width: 606px) {
    footer {
        width: 745px;
    }
}
@media (min-width: 700px) and (max-width:900px) {
    footer {
        width:950px;
    }
}
@media (min-width: 900px) and (max-width:920px) {
    footer {
        width:950px;
    }
}

</style>