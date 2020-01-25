<style lang="scss">
</style>

<template>
  <div class="echart-wrapper">
    <div  ref="equipmentline" style="height:240px;width:100%"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  props:['datas','lineColor','title'],
  data() {
    return {
      line: null
    };
  },
  mounted() {
    this.line = echarts.init(this.$refs.equipmentline);
    this.line.setOption(this.setOpt());
    window.addEventListener("resize", () => {
      this.line.resize();
    });
  },
  watch:{
    datas:{
      handler(v){
        if(this.line)
        {
          this.line.setOption(this.setOpt());
        }
        
      },
      immediate:true
    }
  },
  methods: {
    setOpt() {
        //获取当前日期
        let date = new Date().getDate();
        let xdatas = [];
        for(let i = 1; i<=date;i++)
        {
          xdatas.push(i);
        }
        return {
            tooltip:{
                trigger:'axis'
        },
        title:{
          text:'',
          x:0,
          y:0,
          textStyle:{
            color:'#fff',
            fontSize:12
          }
        },
        grid:{
            left:'10%',
            right:'10%',
            bottom:'10%',
            containLabel:false
        },
        xAxis:[
            {
                type:'category',
                name:'日期',
                data:xdatas,
                axisLine:{
                  lineStyle:{
                    color:'#aeaeae'
                  }
                },
                axisTick:{
                  show:false
                }
            }
        ],
        itemStyle:{
          color:this.lineColor
        },
        yAxis:[
            {
                type:'value',
                name:this.title,
                axisLine:{
                  lineStyle:{
                    color:'#aeaeae'
                  }
                },
                axisTick:{
                  show:false
                },
                splitLine:{
                  show:false
                }
            }
        ],
        series:[
            {
                name:'',
                type:'line',
                stack:'总量',
                lineStyle:{
                  color:this.lineColor
                },
                data:this.datas
            }
        ]
        }
    }
  }
};
</script>