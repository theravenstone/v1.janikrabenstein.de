<template>
  <section class="container mx-auto p-6 lg:h-screen flex">
    <div class="text-center m-auto">
      <h1 class="font-bold text-5xl lg:text-8xl md:text-7xl mb-6">Heyy, ich bin<br />
        <span class="text-primary">Janik Rabenstein</span>
      </h1>

      <p class="font-mono text-xl mb-6">Entwickler aus dem Landkreis Bayreuth <span
          class="animate-wiggle mb-6 inline-block">👋</span></p>
    </div>
    <div class="hidden lg:block">
      <i id="triangle" class="fa-brands fa-js-square text-primary absolute w-24 h-24"></i>
      <i id="square" class="fa-brands fa-python text-primary absolute animate-rotate360 -right-24 w-64 h-64"></i>
      <i id="circle" class="fa-brands fa-php text-primary absolute w-24 h-24 bottom-3/4 left-1/3 animate-movecircle"></i>
      <a rel="noopener" target="_blank" href="https://github.com/theravenstone" title="GitHub">
        <i id="github" class="fa-brands fa-github text-primary hover:text-primary-hover transition duration-300 absolute w-16 h-16 top-1/3"></i>
      </a>
      <i id="vuejs" class="fa-brands fa-vuejs text-primary absolute w-16 h-16 left-2/3 top-3/4"></i>
      <a rel="noopener noreferrer" target="_blank" href="https://discord.com/users/594922360553865216" title="Discord">
        <i id="discord" class="fa-brands fa-discord text-primary hover:text-primary-hover transition duration-300 absolute w-16 h-16 left-3/4 top-1/4"></i>
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
  left: 12%;
}

#square {
  bottom: 8%; 
}

@keyframes circle-anim {
  40% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(20px) translateX(-30px);
  }
}


@keyframes github-anim {
  50% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(15px) translateX(20px) rotate(-20deg);
  }
}
#github {
  animation: github-anim 15s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  left: 10%;
}
@keyframes vuejs-anim {
  50% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(25px) translateX(-30px) rotate(10deg);
  }
}

#vuejs {
  animation: vuejs-anim 15s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes discord-anim {
  50% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(10px) translateX(-5px);
  }
}

#discord {
  animation: discord-anim 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
</style>