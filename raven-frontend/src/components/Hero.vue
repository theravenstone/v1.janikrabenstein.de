<template>
  <section class="container mx-auto p-6 md:h-screen flex">
    <div class="text-center m-auto">
      <h1 class="font-bold text-5xl lg:text-8xl md:text-7xl mb-6">Heyy, ich bin<br />
        <span class="text-primary">Janik Rabenstein</span>
      </h1>

      <p class="font-mono text-xl mb-6">Webentwickler aus dem Landkreis Bayreuth <span
          class="animate-wiggle mb-6 inline-block">👋</span></p>
    </div>
    <div class="hidden md:block">
      <i id="triangle" class="fa-solid fa-play text-primary absolute"></i>
      <i id="square" class="fa-solid fa-square text-primary absolute"></i>
      <i id="circle" class="fa-solid fa-circle text-primary absolute"></i>
      <a rel="noopener" target="_blank" href="https://github.com/theravenstone" title="Janik's GitHub Profil">
        <i id="github" class="fa-brands fa-github text-primary hover:text-primary-hover transition duration-300 absolute"></i>
      </a>
      <i id="vuejs" class="fa-brands fa-vuejs text-primary absolute"></i>
      <a rel="noopener noreferrer" target="_blank" href="https://discord.com/users/594922360553865216" title="Janik's Discord Account">
        <i id="discord" class="fa-brands fa-discord text-primary hover:text-primary-hover transition duration-300 absolute"></i>
      </a>
    </div>
    
    </section>
</template>
<script>
export default {

}
</script>

<style>
@keyframes triangle-anim {
  50% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(25px) rotate(-53deg);
  }
}
#triangle {
  animation: triangle-anim 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  bottom: 15%;
  height: 100px;
  left: 12%;
  width: 100px;
}

@keyframes square-anim {
  100% {
    transform: rotate(360deg);
  }
}

#square {
  animation:square-anim 40s infinite linear;
  bottom: 8%;
  height: 250px;
  width: 250px;
  right: -100px;
  
}

@keyframes circle-anim {
  40% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(20px) translateX(-30px);
  }
}

#circle {
  animation:circle-anim 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  bottom: 70%;
  width: 100px;
  height: 100px;
  left: 40%;
  
}
@keyframes github-anim {
  50% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(15px) translateX(30px) rotate(-20deg);
  }
}
#github {
  animation: github-anim 15s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  height: 57px;
  width: 76px;
  left: 13%;
  top: 18%;
  
}
@keyframes vuejs-anim {
  50% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(25px) translateX(-30px) rotate(10deg);
  }
}

#vuejs {
  animation: vuejs-anim 15s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  height: 57px;
  width: 76px;
  left: 70%;
  top: 65%;
  
}

@keyframes discord-anim {
  50% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(10px) translateX(-5px);
  }
}

#discord {
  animation: discord-anim 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  height: 60px;
  width: 60px;
  left: 75%;
  top: 25%;

}
</style>