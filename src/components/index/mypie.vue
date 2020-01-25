<style lang="scss">
</style>

<template>
  <div class="echart-wrapper">
    <div id="mypie" ref="mypie" style="height:180px;width:100%"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  props:['mydata'],
  data() {
    return {
      pie: null
    };
  },
  mounted() {
    this.pie = echarts.init(this.$refs.mypie);
    this.pie.setOption(this.setOpt());
    window.addEventListener("resize", () => {
      this.pie.resize();
    });
  },
  watch:{
    mydata:{
      handler(v){
        if(this.pie)
        {
          this.pie.setOption(this.setOpt());
        }
        
      },
      immediate:true
    }
  },
  methods: {
    setOpt() {
      return{
    series: {
        type: 'pie',
        clockWise: false,
        radius: [60, 70],
        hoverAnimation: false,
        silent: true,
        center: ['50%', '50%'],
        data: [{
          value: 1000,
          name: '',
          labelLine:{
                  show:false
              },
          itemStyle: {
              normal: {
                  color:"#fff"
              }
              
          }
        },{
            value: this.mydata,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#c3c6ce',
                            align: 'center',
                            fontSize: 16,
                            fontWeight: "bold",
                            fontFamily:'方正粗倩_GBK'
                        },
                        b: {
                            color: '#08a0df',
                            align: 'center',
                            fontSize: 25
                        },
                        c: {
                          fontSize: 15,
                          fontFamily:'方正粗倩_GBK',
                          fontWeight: "bold"
                        }
                    },
                    formatter: function(params){
                        return "{a|平均产量}"+"\n\n{b|"+params.value+"/天}";    //"{a|"+params.value+"}"+" {c|%}"+"\n\n{b|利用率}";
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#139FBE',
                     shadowColor: '#82ffff',
                     borderWidth:2,
                     borderColor:'#82ffff',
                     shadowBlur: 10
                }
            }
        }]
    }
      }
    }
  }
};
</script>