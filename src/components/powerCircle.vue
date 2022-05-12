<template>
  <div class="powerCircle">
    <svg class="progress-circle">
      <circle class="progress-circle-item progress-back"></circle>
      <circle class="progress-circle-item progress-front"></circle>
    </svg>
    <div class="number-wrapper"></div>
  </div>
</template>
<script>
export default {
  name: 'powerCircle',
  props: {
    power: { default: 0 }
  },
  data () {
    return {
      progress: this.power
    }
  },
  mounted () {
    const component = document.querySelector('.powerCircle')
    // component.addEventListener("click", () => {
    const rand = this.progress
    component.style.setProperty('--progress', rand)
  }
}
</script>

<style lang="scss" scoped>
.powerCircle {
  position: relative;
  display: flex;
  --progress:0 ; /*Initial valuee*/
  --PI: 3.14159265358979;
  --length: 100px;
  --red: calc(256 - (var(--progress) * (256/100)));
  --green: calc(var(--progress) * (256/100));
  --blue: var(--progress);

  .progress-circle {
    height: var(--length);
    width: var(--length);
    transform: rotate(-90deg);

    .progress-circle-item {
      cx: calc(var(--length)/2);
      cy: calc(var(--length)/2);
      r: calc(var(--length)/4);
      fill: none;
      stroke-width: calc(var(--length)/10);
    }
    .progress-back {
      stroke: #d2d2d2;
    }
    .progress-front {
      stroke: rgb(var(--red), var(--green), var(--blue));
      stroke-dasharray: calc(var(--progress)*var(--PI) * (var(--length) /200)) 1000;
      stroke-dashoffset: 0px;
      transition: all 1s ease;
    }
  }

  .number-wrapper {
    --progress-text: calc(var(--length) / 10);
    --top: calc( (var(--length) - var(--progress-text)) / 2);
    user-select: none;
    display: flex;
    width: calc(var(--length) / 2);
    justify-content: center;
    font-size: var(--progress-text);
    position: absolute;
    left: calc(var(--length) / 4);
    top: var(--top);
    font-size: 1.2rem;
  }
  .number-wrapper::before{
    counter-reset: progress var(--progress);
    content: counter(progress);
  }
}

</style>
