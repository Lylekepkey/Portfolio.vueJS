<template>
    <div class="container">
        <div class="lil-description">
            <div class="bar">
                <div class="outer">
                    <div class="inner">
                        <div  id="num">
                            65%
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
        </div>
    </div>
</template>

<script>


</script>

<style scoped>
.container {
  display: flex;
  justify-content: end;
}
/* right */
.lil-description {
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  height: 600px;
  margin-right: 50px;
}

.bar {
    width: 160px;
    height: 160px;
    /* background: blue; */
}
.outer {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    padding: 15px;
    box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.30),
                -5px -5px 10px -1px rgba(0, 0, 0, 0.7)
    ;
}
.inner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 130px;
    width: 130px;
    border-radius: 50%;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0.2),
                inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                0.5px 0.5px 0px rgba(0, 0,0,0.15),
                0px 12px 0px -10px rgba(0,0,0,0.06)
                ;
}
#num {
    font-weight: 600;
    color: red;
}
circle{
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 15px;
    stroke-dasharray: 471;
    stroke-dashoffset: 0;
}
svg {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}

</style>