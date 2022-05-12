<template>
  <div class="mainPage">
    <div class="team row">
      <div class="teamCard col col-3" v-for="(item, index) in teams" :key="`${index}`">
        <div class="teamBox">
          <div class="boxImg"></div>
          <div class="boxBody">
            <power-circle class="circlePage"
            :power="item.power"/>
            {{item.teamName}}
            <div class="boxDetail">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import vuex from 'vuex'
import PowerCircle from '../components/powerCircle.vue'
// import * as d3 from 'd3'
// d3.select('test').style({
//   'color':'red'
// })

export default {
  name: 'mainPage',
  components: {
    PowerCircle
  },
  data () {
    return {
      teams: ''
    }
  },
  computed: {
  },
  // mounted () {
  // setTimeout(()=>{
  //   const team = this.$store.state.Team.team.detail;
  //   const arr = Object.keys(team).map(function (key) { return team[key] })
  //   console.log(arr)
  //   arr.forEach((name, index) => {
  //     name.key = index
  //     name.Order = index + 1
  //   })
  //   this.teams = arr
  // },5000)
  // },
  mounted () {
    this.fetchTeamData()
      .then((data) => {
        console.log(data)
        const team = data.detail
        const arr = Object.keys(team).map(function (key) { return team[key] })
        console.log(arr)
        arr.forEach((name, index) => {
          name.key = index
          name.Order = index + 1
          name.power = Math.floor(Math.random() * 100)
        })
        this.teams = arr
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    ...vuex.mapActions('Team', [
      'fetchTeamData'
    ]),
    ...vuex.mapState('Team', [
      'team'
    ])
    // teamData () {
    //   console.log(this.team);
    // },
  }
}
</script>
<style lang="scss" scoped>
.mainPage {
  color: white;

  .team {
    width: 90%;
    display: flex;
    margin: 0px 5%;
    justify-content: space-around;

    .teamCard {
      display: flex;
      width: 100%;
      justify-content: center;
      height: 300px;
      margin: 10px;
      border-radius:10px;

      .teamBox {
        width: 100%;
        .boxImg {
          width: 100%;
          height: 90%;
          background-image:url('https://picsum.photos/400/400');
          border-top-left-radius:10px;
          border-top-right-radius:10px;
          background-repeat: no-repeat; //不重複
          // background-size: contain;//原始圖片大小
        }
        .boxBody {
          width: 300px;
          display: flex;
          position: absolute;
          // height: 10%;
          .boxDetail {
            opacity: 0;
          }
          .circlePage {
            position: relative;
            top: 0px;
            left: 200px;
            opacity:0;
          }
        }
      }
    }
    .teamCard:hover {
      transition: 2s;
    }
    .teamCard:hover .boxImg {
      transition: 1s;
      height: 40%;
      opacity: 0.6;
    }
    .teamCard:hover .boxBody {
      transition: 1s;
      // height: 60%;
    }
    .teamCard:hover .boxBody .boxDetail {
      transition: 1.5s;
      opacity: 1;
      height: 60%;
    }
    .teamCard:hover .boxBody .circlePage {
      transition: 1.5s;
      opacity: 1;
    }
  }
  .row {
    flex-wrap: wrap;

    .col {
       flex-grow: 1;
        /* Try to resize window < 600px */
        min-width:300px;

        /* Below is not important */
        background-color:white;
        color:black;
        margin:15px;
        min-height:10vh;
        text-align:center;
      }
      @for $i from 1 through 12 {
        .col-#{$i} {
          flex-grow:0;
          flex-basis: calc(-30px + 100% *#{$i}* 1/12);
        }
      }
    }

}
</style>
