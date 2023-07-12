<template>
    <div class="container-1">
        <div class="lil-description">
            <div class=container>
                <div class="card">
                    <div class="percent" style="--clr:#04fc43;--num:85">
                        <div class=dot></div>
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>
                                85<span>%</span>
                            </h2>
                            <p>HTML</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="percent" style="--clr:#04fc43;--num:60">
                        <div class=dot></div>
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>
                                60<span>%</span>
                            </h2>
                            <p>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="percent" style="--clr:#04fc43;--num:11">
                        <div class=dot></div>
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>
                                11<span>%</span>
                            </h2>
                            <p>MySQL</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="percent" style="--clr:#04fc43;--num:61">
                        <div class=dot></div>
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>
                                61<span>%</span>
                            </h2>
                            <p>Python</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


</script>

<style scoped>
.container-1 {
  display: flex;
  justify-content: end;
}
.lil-description {
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  height: 600px;
  margin-right: 50px;
}


.container{
    position: relative;
    display: flex;
    flex-wrap:wrap;
    gap:20px;
    justify-content: center;
    align-items: center;
}

.container .card {
    display: flex;
    justify-content: center;
    margin-top: 45px;
    border-radius: 10px;
    position:relative;
    width: 220px;
    height: 220px;
    background-color: #c3c3c3;
}

.container .card .percent {
    position: relative;
    margin-top: 30px;
    width: 150px;
    height: 150px;
}
.container .card .percent svg {
    position: relative;
    width: 150px;
    height: 150px;
    transform: rotate(270deg);
}
.container .card .percent svg circle {
    width: 100%;
    height: 100%;
    fill: transparent;
    stroke-width: 2;
    stroke: #191919;
    transform: translate(5px, 5px);
}
.container .card .percent svg circle:nth-child(2) {
    stroke: var(--clr);
    stroke-dasharray: 440;
    stroke-dashoffset: calc(440 - (440 * var(--num)) / 100);
    opacity: 0;
    animation: fadeIn 1s linear forwards;
    animation-delay: 2.5s;
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* dot */
.dot {
    position: absolute;
    inset: 5px;
    z-index: 10;
    animation: animateDot 2s linear forwards; 
}

@keyframes animateDot {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(calc(3.6deg * var(--num)));
    }
}

.dot::before {
    content: '';
    position: absolute;
    top: -5px;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--clr);

    box-shadow: 0 0 10px var(--clr),
    0 0 30px var(--clr);
}
/* dot end */

.number{
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    animation: fadeIn 1s linear forwards;
    animation-delay: 2.5s;
}
.number h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 2.5em;
}
.number h2 span {
    font-weight: 300;
    font-size: 0.5em;
}
.number p {
    font-weight: 300;
    font-size: 0.75em;
    margin-top: 5px;
    color: rgba(255,255,255,0.75);
    letter-spacing: 2px;
}


</style>