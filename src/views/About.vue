<template>
  <div class="about">
    <!-- <svg width="400" height="200">
      <polygon
        points="0,200 100,100 200,200 200,300 100,400 0,300"
        style="fill: lime; stroke: purple; stroke-width: 1"
      />
    </svg> -->
    <!-- <div class="box1">
      <p>select 1</p>
      <p>select 2</p>
      <p>select 3</p>
      <p>select 4</p>
    </div> -->
    <!-- <svg class="svg1" width="500" height="300" style="border: 1px solid;">
      <circle></circle>
    </svg>
    <svg class="arc" style="border: 1px solid;"></svg> -->

    <div class="component">
      <svg class="progress-circle">
      <circle class="progress-circle-item progress-back"></circle>
      <circle class="progress-circle-item progress-front"></circle>
    </svg>
      <div class="number-wrapper">
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'about',
  data () {
    return {
      progress: 10
    }
  },
  mounted () {
    const component = document.querySelector('.component')
    // component.addEventListener("click", () => {
    const rand = this.progress
    component.style.setProperty('--progress', rand)
    // });
    d3.selectAll('.box1 p').style('color', 'red')

    d3.select('.svg1 circle')
      .attr('r', 10)
      .attr('fill', 'red')
      .attr('cx', 50)
      .attr('cy', 50)
      // .attr("transform", "translate(40,40)");
    const arc = d3.arc()
      .innerRadius(40) // 內圈範圍40
      .outerRadius(50) // 內圈範圍50
      .startAngle(0)
      .endAngle(Math.PI * 1.5) // 畫一個 1/4 的圓形

    d3.select('.arc')
      .append('g')
      .attr('transform', 'translate(100,50)') // 把整個圓弧移動到 100,100 的位置
      .append('path')
      .attr('d', arc())
      .attr('stroke', 'yellow')
      .attr('fill', 'red')
  }

}
</script>

<style lang="scss" scoped>
.component {
  cursor: pointer;
  position: relative;
  display: inline-block;
  --progress:0 ; /*Initial valuee*/
  --PI: 3.14159265358979;
  --length: 200px;
  // --red: calc(256 - (var(--progress) * (256/100)));
  // --green: calc(var(--progress) * (256/100));
  --blue: var(--progress);
  --red: calc(var(--progress) * (256/100));
  --green: calc(256 - var(--progress) * (256/100));
  // --blue: calc(256 - var(--progress) * (256/100));
  color: rgb(0, 25, 25);
}
div.number-wrapper {
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
}
div.number-wrapper::before{
  counter-reset: progress var(--progress);
  content: counter(progress);
}
.progress-circle {
  height: var(--length);
  width: var(--length);
  transform: rotate(-90deg);
}
.progress-circle-item {
  cx: calc(var(--length)/2);
  cy: calc(var(--length)/2);
  r: calc(var(--length)/4);
  fill: none;
  stroke-width: calc(var(--length)/20);
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

</style>
