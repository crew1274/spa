<style lang="scss">
</style>

<template>
  <div class="echart-wrapper">
    <div id="mywave" ref="mywave" style="height:180px;width:100%"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import 'echarts-liquidfill';
export default {
    props:['myrate'],
  data() {
    return {
      wave: null
    };
  },
  mounted() {
    this.wave = echarts.init(this.$refs.mywave);
    this.wave.setOption(this.setOpt());
    window.addEventListener("resize", () => {
      this.wave.resize();
    });
  },
  watch:{
    myrate:{
      handler(v){
        if(this.wave)
        {
          this.wave.setOption(this.setOpt());
        }
        
      },
      immediate:true
    }
  },
  methods: {
    setOpt() {
        const  rate = this.myrate;
      return {
        series: [{
            type: 'liquidFill',
            data: [{
                    value: rate,
                    direction: 'right', // 控制移动方向 left | right
                    itemStyle: {
                        color: 'rgba(0, 191, 255, 1)'
                    }
                },
                {
                    value: rate - 0.04,
                    direction: 'right',
                    itemStyle: {
                        color: 'rgba(0, 191, 255, 0.6)'
                    }
                },
                {
                    value: rate - 0.08,
                    direction: 'right',
                    itemStyle: {
                        color: 'rgba(0, 191, 255, 0.8)'
                    }
                }
            ],
            itemStyle: {
                opacity: 0.95,
                // shadowBlur: 10,
                // shadowColor: 'rgba(0, 191, 255, 0.8)',
            },
            label: {
                fontSize: 30 // 控制中央字体大小
            },
            outline: {
                show: false // 外圈
            },
            radius: 100,
            waveAnimation: 10, // 动画时长
            amplitude: 10, // 振幅
        }, {
            name: '访问来源',
            type: 'pie',
            //radius: [152, 160],
            radius:[60,68],
            label: {
                normal: {
                    show: false,
                    position: 'center',
                },
            },
            animationDuration: 2500, // 动画时长
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: rate,
                name: '直接访问',
                itemStyle: {
                    color: 'rgba(0, 191, 255, 0.6)'
                }
            }, {
                value: 1 - rate,
                name: '直接访问',
                itemStyle: {
                    color: '#e0e0e0'
                }
            }]
        }]
      };
    }
  }
};
</script>