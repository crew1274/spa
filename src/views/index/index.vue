<style lang="scss">
@import "@/assets/scss/common.scss";
#index {
  .wapper {
    .title {
      height: 40px;
      background-color: #212948;
      margin-bottom: 2px;
      padding: 10px 15px;
      span {
        display: block;
        border-left: 2px solid #7ecef4;
        padding-left: 20px;
        text-align: left;
        color: #fff;
      }
    }
    .font34 {
      font-size: 34px;
    }
    .content {
      width: 100%;
      background-color: #212948;
      padding: 20px 50px;
      color: #fff;
      .name {
        color: #c3c5ce;
      }
    }
  }
  .block {
    display: block;
  }
  .inlineblock {
    display: inline-block;
  }
  .marbottom10 {
    margin-bottom: 10px;
  }
  .marbottom20 {
    margin-bottom: 20px;
  }
  .martop20 {
    margin-top: 20px;
  }
  .tag {
    display: inline-block;
    margin-right: 40px;
    margin-top: 20px;
    .tagicon {
      display: inline-block;
      width: 60px;
      height: 60px;
      margin-right: 6px;
      text-align: center;
      line-height: 60px;
      border-radius: 50%;
    }
    .tagicon00b7ee {
      border: 1px solid #00b7ee;
      box-shadow: 1px 1px 4px 1px #00b7ee inset;
      color: #00b7ee;
    }
    .tagicone16531 {
      border: 1px solid #e16531;
      box-shadow: 1px 1px 4px 1px #e16531 inset;
      color: #e16531;
    }
    .tagicon18a689 {
      border: 1px solid #18a689;
      box-shadow: 1px 1px 4px 1px #18a689 inset;
      color: #18a689;
    }
    .tagiconf4ea2a {
      border: 1px solid #f4ea2a;
      box-shadow: 1px 1px 4px 1px #f4ea2a inset;
      color: #f4ea2a;
    }
    .tagicona4579d {
      border: 1px solid #a4579d;
      box-shadow: 1px 1px 4px 1px #a4579d inset;
      color: #a4579d;
    }
    .tagicon1afa29 {
      border: 1px solid #1afa29;
      box-shadow: 1px 1px 4px 1px #1afa29 inset;
      color: #1afa29;
    }
    .tagiconeb6877 {
      border: 1px solid #eb6877;
      box-shadow: 1px 1px 4px 1px #eb6877 inset;
      color: #eb6877;
    }
    .tagicon1296db {
      border: 1px solid #1296db;
      box-shadow: 1px 1px 4px 1px #1296db inset;
      color: #1296db;
    }

    .tagicon87a7d6 {
      border: 1px solid #87a7d6;
      box-shadow: 1px 1px 4px 1px #87a7d6 inset;
      color: #87a7d6;
    }
  }
  .product_detail_wapper {
    background-color: #1c2547;
    border: 1px solid #161d38;
    padding: 10px;
    .product_title {
      text-align: left;
    }
    .circle {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #32b16c;
      margin-right: 10px;
    }
  }
  .devicedetail,
  .deviceimg {
    display: inline-block;
  }
  .devicedetail {
    position: absolute;
    top: 0;
    span {
      display: block;
      height: 60px;
      // line-height: 60px;
    }
  }
  .el-input__inner {
    background-color: transparent;
    color: #fff;
  }
  .el-form-item__label,
  .el-table {
    color: #fff;
  }
  .el-table th,
  .el-table tr {
    background-color: #1a2241;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
      background-color: #1a2241;
    }
}
</style>
<template>
  <div id="index">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="wapper">
          <div class="title">
            <span>工厂基本信息</span>
          </div>
          <div class="content" style="min-height:200px;">
            <el-row class="name marbottom10">
              <el-col :span="12">工厂名称</el-col>
              <el-col :span="12">工厂位置</el-col>
            </el-row>
            <el-row class="marbottom20">
              <el-col :span="12">xxxxxxx责任有限公司</el-col>
              <el-col :span="12">河北省唐山市高新区156号</el-col>
            </el-row>
            <el-row class="name marbottom10">
              <el-col :span="12">工厂面积</el-col>
              <el-col :span="12">员工总数</el-col>
            </el-row>
            <el-row>
              <el-col :span="12">200000平方米</el-col>
              <el-col :span="12">200</el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="wapper">
          <div class="title">
            <span>工厂实时信息</span>
          </div>
          <div class="content">
            <div class="tag">
              <span class="tagicon tagicon00b7ee">
                <i class="iconfont icon-wendu1 font34"></i>
              </span>
              <span class="inlineblock">
                <span class="block name">工厂温度</span>
                <span class="block">{{intemperature}}℃</span>
              </span>
            </div>

            <div class="tag">
              <span class="tagicon tagicone16531">
                <i class="iconfont icon-wendu font34"></i>
              </span>
              <span class="inlineblock">
                <span class="block name">厂外温度</span>
                <span class="block">{{outtemperature}}℃</span>
              </span>
            </div>

            <div class="tag">
              <span class="tagicon tagicon18a689">
                <i class="iconfont icon-kongqizhiliang font34"></i>
              </span>
              <span class="inlineblock">
                <span class="block name">空气质量</span>
                <span class="block">{{airquality}}</span>
              </span>
            </div>

            <div class="tag">
              <span class="tagicon tagiconf4ea2a">
                <i class="iconfont icon-eryanghuatan font34"></i>
              </span>
              <span class="inlineblock">
                <span class="block name">CO2排放量</span>
                <span class="block">{{co2}}</span>
              </span>
            </div>

            <div class="tag">
              <span class="tagicon tagicona4579d">
                <i class="iconfont icon-feishui font34"></i>
              </span>
              <span class="inlineblock">
                <span class="block name">废水排量</span>
                <span class="block">{{water}}</span>
              </span>
            </div>

            <div class="tag">
              <span class="tagicon tagicon1afa29">
                <i class="iconfont icon-dianli font34"></i>
              </span>
              <span class="inlineblock">
                <span class="block name">电力用量</span>
                <span class="block">{{electric}}</span>
              </span>
            </div>

            <div class="tag">
              <span class="tagicon tagiconeb6877">
                <i class="iconfont icon-shuidi font34"></i>
              </span>
              <span class="inlineblock">
                <span class="block name">无尘室PPM</span>
                <span class="block">{{ppm}}</span>
              </span>
            </div>

            <div class="tag">
              <span class="tagicon tagicon1296db">
                <i class="iconfont icon-PM font34"></i>
              </span>

              <span class="inlineblock">
                <span class="block name">PM2.5</span>
                <span class="block">{{pm}}</span>
              </span>
            </div>

            <div class="tag">
              <span class="tagicon tagicon87a7d6">
                <i class="iconfont icon-zhiban font34"></i>
              </span>
              <span class="inlineblock">
                <span class="block name">值班人数</span>
                <span class="block">7</span>
              </span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="martop20">
      <div class="wapper">
        <div class="title">
          <span>产品详情</span>
        </div>
        <div class="content">
          <el-form
            :inline="true"
            class="demo-form-inline"
            style="text-align:left"
            label-width="85px"
          >
            <el-form-item label="产品名称">
              <el-select v-model="productname">
                <el-option label="UTCP4050" value="UTCP4050"></el-option>
                <el-option label="UTCP7070" value="UTCP7070"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="订单编号">
              <el-select v-model="order">
                <el-option
                  v-for="(order,index) in orderlist"
                  :label="order"
                  :value="order"
                  :key="index"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="product_detail_wapper">
                <div class="product_title">
                  <span class="circle"></span>
                  <span>平均产量</span>
                </div>
                <mypie :mydata="piedata"></mypie>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="product_detail_wapper">
                <div class="product_title">
                  <span class="circle"></span>
                  <span>平均良率</span>
                </div>
                <mywave :myrate=waverate></mywave>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="product_detail_wapper">
                <div class="product_title">
                  <span class="circle"></span>
                  <span>产品外形</span>
                </div>
                <img style="width:180px;height:180px;" :src="productsrc" />
              </div>
            </el-col>
            <el-col :span="6">
              <div class="product_detail_wapper">
                <div class="product_title">
                  <span class="circle"></span>
                  <span>ICQ状况</span>
                </div>

                <img style="width:240px;height:180px;" :src="icqsrc" />
              </div>
            </el-col>
          </el-row>
          <div class="product_detail_wapper">
            <div class="product_title marbottom10">
              <span class="circle"></span>
              <span>库存状况</span>
            </div>
            <el-table
              :data="stockdatas"
              border
              :header-cell-style="{background:'#1a2241',color:'#fff'}"
            >
              <el-table-column prop="orderid" label="订单编号" align="center"></el-table-column>
              <el-table-column prop="requirement" label="成品需求量" align="center"></el-table-column>
              <el-table-column prop="purchase" label="原料进货量" align="center"></el-table-column>
              <el-table-column prop="materialInvenry" label="原料库存量" align="center"></el-table-column>
              <el-table-column prop="goodsInvenry" label="成品库存量" align="center"></el-table-column>
              <el-table-column prop="goodsShipment" label="成品出货量" align="center"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="martop20">
      <div class="wapper">
        <div class="title">
          <span>数据统计</span>
        </div>
        <div class="content">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="product_detail_wapper">
                <div class="product_title">
                  <span class="circle"></span>
                  <span>产量</span>
                </div>
                <index-line :title="yieldtitle" :lineColor="yieldcolor" :datas="yielddatas"></index-line>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="product_detail_wapper">
                <div class="product_title">
                  <span class="circle"></span>
                  <span>良率</span>
                </div>
                <index-line
                  :title="shipmenttitle"
                  :lineColor="shipmentcolor"
                  :datas="shipmentdatas"
                ></index-line>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="martop20">
            <el-col :span="12">
              <div class="product_detail_wapper">
                <div class="product_title">
                  <span class="circle"></span>
                  <span>出货量</span>
                </div>
                <index-line
                  :title="yieldratetitle"
                  :lineColor="yieldratecolor"
                  :datas="yieldratedatas"
                ></index-line>
              </div>
            </el-col>

            <el-col :span="12">
              <div class="product_detail_wapper">
                <div class="product_title">
                  <span class="circle"></span>
                  <span>累计营业额</span>
                </div>
                <index-line
                  :title="turnovertitle"
                  :lineColor="turnovercolor"
                  :datas="turnoverdatas"
                ></index-line>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="martop20">
      <div class="wapper">
        <div class="title">
          <span>设备状态</span>
        </div>
        <div class="content clearfix">
          <div
            v-for="(device,index) in devicelist"
            :key="index"
            style="width:25%;position:relative;"
            class="fl"
          >
            <div class="deviceimg">
              <img style="width:180px;height:180px;" :src="device.src" />
            </div>

            <span class="devicedetail">
              <span>设备：{{device.name}}</span>
              <span>
                状态：
                <span v-if="device.status == 1" style="display:inline;color:#069a14;">正常</span>
                <span v-if="device.status == 2" style="display:inline;color:#f4800e;">警戒</span>
                <span v-if="device.status == 3" style="display:inline;color:red;">维修</span>
              </span>
              <span>产能：<span style="display:inline;color:#0264b0">{{device.capacity}}</span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mypie from "@/components/index/mypie";
import mywave from "@/components/index/mywave";
import indexLine from "@/components/index/indexline";
export default {
  data() {
    return {
      intemperature: 20,
      outtemperature: 20,
      airquality: "优",
      co2: 888,
      ppm: 22,
      pm: 33,
      electric: 44,
      water: 99,
      devicelist: [
        {
          src: require("../../assets/images/1.png"),
          name: "全自动切管机",
          status: 1,
          capacity: "30%"
        },
        {
          src: require("../../assets/images/2.png"),
          name: "超音波清洗机",
          status: 2,
          capacity: "30%"
        },
        {
          src: require("../../assets/images/3.png"),
          name: "全自动缩管机",
          status: 3,
          capacity: "30%"
        },
        {
          src: require("../../assets/images/4.png"),
          name: "震动填粉平台",
          status: 1,
          capacity: "30%"
        },
        {
          src: require("../../assets/images/5.png"),
          name: "缩口平台",
          status: 1,
          capacity: "30%"
        },
        {
          src: require("../../assets/images/6.png"),
          name: "电阻定网",
          status: 1,
          capacity: "30%"
        },
        {
          src: require("../../assets/images/7.png"),
          name: "定柱平台",
          status: 2,
          capacity: "30%"
        },
        {
          src: require("../../assets/images/8.png"),
          name: "微米级光学平面度检侧仪",
          status: 1,
          capacity: "30%"
        }
      ],
      orderlist: ["100001", "100002", "100003", "100004", "100005", "100006"],
      src: require("../../assets/images/device.png"),
      productsrc: require("../../assets/images/UTCP4050.gif"),
      icqsrc: require("../../assets/images/UTCP4050.png"),
      yieldtitle: "产量",
      yieldcolor: "#eb6100",
      yielddatas: [],
      yielddataslist:{},
      yieldratetitle: "良率",
      yieldratecolor: "#0264b0",
      yieldratedatas: [],
      yieldratedataslist:{},
      shipmenttitle: "出货量",
      shipmentcolor: "#32b16c",
      shipmentdatas: [],
      shipmentdataslist:{},
      turnovertitle: "营业额",
      turnovercolor: "#521c79",
      turnoverdatas: [],
      turnoverdataslist:{},
      productname: "UTCP4050",
      piedata:345,
      waverate:0.93,
      waveratelist:{
        'UTCP4050':0.93,
        'UTCP7070':0.98
      },
      pielist:{
        'UTCP4050':345,
        'UTCP7070':564
      },
      order: "",
      productoder: {
        UTCP4050: [
          "405000001",
          "405000002",
          "405000003",
          "405000004",
          "405000005",
          "405000006"
        ],
        UTCP7070: [
          "707000001",
          "707000002",
          "707000003",
          "707000004",
          "707000005",
          "707000006"
        ]
      },
      orderdetail: {
        "405000001": [
          {
            orderid: "405000001",
            requirement: 333,
            purchase: 222,
            materialInvenry: 3333,
            goodsInvenry: 999,
            goodsShipment: 8888
          }
        ],
        "405000002": [
          {
            orderid: "405000002",
            requirement: 333,
            purchase: 222,
            materialInvenry: 3333,
            goodsInvenry: 999,
            goodsShipment: 8888
          }
        ],
        "405000003": [
          {
            orderid: "405000003",
            requirement: 333,
            purchase: 222,
            materialInvenry: 3333,
            goodsInvenry: 999,
            goodsShipment: 8888
          }
        ],
        "405000004": [
          {
            orderid: "405000004",
            requirement: 333,
            purchase: 222,
            materialInvenry: 3333,
            goodsInvenry: 999,
            goodsShipment: 8888
          }
        ],
        "405000005": [
          {
            orderid: "405000005",
            requirement: 333,
            purchase: 222,
            materialInvenry: 3333,
            goodsInvenry: 999,
            goodsShipment: 8888
          }
        ],
        "405000006": [
          {
            orderid: "405000006",
            requirement: 333,
            purchase: 222,
            materialInvenry: 3333,
            goodsInvenry: 999,
            goodsShipment: 8888
          }
        ],
        "707000001": [
          {
            orderid: "707000001",
            requirement: 333,
            purchase: 222,
            materialInvenry: 3333,
            goodsInvenry: 999,
            goodsShipment: 8888
          }
        ],
        "707000002": [
          {
            orderid: "707000002",
            requirement: 333,
            purchase: 222,
            materialInvenry: 3333,
            goodsInvenry: 999,
            goodsShipment: 8888
          }
        ],
        "707000003": [
          {
            orderid: "707000003",
            requirement: 333,
            purchase: 222,
            materialInvenry: 3333,
            goodsInvenry: 999,
            goodsShipment: 8888
          }
        ],
        "707000004": [
          {
            orderid: "707000004",
            requirement: 333,
            purchase: 222,
            materialInvenry: 3333,
            goodsInvenry: 999,
            goodsShipment: 8888
          }
        ],
        "707000005": [
          {
            orderid: "707000005",
            requirement: 333,
            purchase: 222,
            materialInvenry: 3333,
            goodsInvenry: 999,
            goodsShipment: 8888
          }
        ],
        "707000006": [
          {
            orderid: "707000006",
            requirement: 333,
            purchase: 222,
            materialInvenry: 3333,
            goodsInvenry: 999,
            goodsShipment: 8888
          }
        ]
      },
      stockdatas: [
        {
          orderid: "405000001",
          requirement: 333,
          purchase: 222,
          materialInvenry: 3333,
          goodsInvenry: 999,
          goodsShipment: 8888
        }
      ]
    };
  },
  watch: {
    productname: {
      handler(v) {
        this.orderlist = this.productoder[v];
        if (v == "UTCP4050") {
          this.order = "405000001";
        } else {
          this.order = "707000001";
        }
        this.piedata = this.pielist[v];
        this.waverate = this.waveratelist[v];
        if(this.yielddataslist[v] && this.yielddataslist[v].length>0)
        {
          this.yielddatas = this.yielddataslist[v];
        }
        if(this.yieldratedataslist[v] && this.yieldratedataslist[v].length>0)
        {
          this.yieldratedatas = this.yieldratedataslist[v];
        }
        if(this.shipmentdataslist[v] && this.shipmentdataslist[v].length>0)
        {
          this.shipmentdatas = this.shipmentdataslist[v];
        }
        if(this.turnoverdataslist[v] && this.turnoverdataslist[v].length>0)
        {
          this.turnoverdatas = this.turnoverdataslist[v];
        }
        this.productsrc = require("../../assets/images/" + v + ".gif");
        this.icqsrc = require("../../assets/images/" + v + ".png");
      },
      immediate: true
    },
    order: {
      handler(v) {
        this.stockdatas = this.orderdetail[v];
      }
    }
  },
  created() {
    let date = new Date().getDate();
    var sum = 0;
    for (let i = 1; i <=date; i++) {
      this.yielddatas.push(Math.floor(Math.random() * 100));
      this.yieldratedatas.push(Math.floor(Math.random() * 100));
      this.shipmentdatas.push(Math.floor(Math.random() * 100));

      var data = Math.floor(Math.random() * 100);
      sum += data;
      this.turnoverdatas.push(sum);
    }
    this.yielddataslist['UTCP4050'] = this.yielddatas;
    this.yielddataslist['UTCP7070'] = this.yielddatas.map(item=>{
      return item+Math.floor(Math.random() * 10)
    });
    this.yieldratedataslist['UTCP4050'] = this.yieldratedatas;
    this.yieldratedataslist['UTCP7070'] = this.yieldratedatas.map(item=>{
      return item-Math.floor(Math.random() * 10)
    });
    this.shipmentdataslist['UTCP4050'] = this.shipmentdatas;
    this.shipmentdataslist['UTCP7070'] = this.shipmentdatas.map(item=>{
      return item-Math.floor(Math.random() * 10)
    });
    this.turnoverdataslist['UTCP4050'] = this.turnoverdatas;
    this.turnoverdataslist['UTCP7070'] = this.turnoverdatas.map(item=>{
      return item-Math.floor(Math.random() * 10)
    });
    setInterval(() => {
      this.intemperature = Math.floor(Math.random() * 100);
      this.outtemperature = Math.floor(Math.random() * 100);
      this.co2 = Math.floor(Math.random() * 100);
      this.electric += Math.floor(Math.random() * 10);
      this.water += Math.floor(Math.random() * 10);
      this.ppm = Math.floor(Math.random() * 100);
      this.pm = Math.floor(Math.random() * 100);
      this.airquality = this.pm > 100 ? "良" : "优";

      let randomdeviceid = Math.floor(Math.random()*(this.devicelist.length-1));
      let status = Math.floor(Math.random()*3);
      this.$set(this.devicelist[randomdeviceid],"status",status);
      this.$set(this.devicelist[randomdeviceid],"capacity",Math.floor(Math.random() * 100)+"%");
      
    }, 5000);
  },
  components: {
    mypie,
    mywave,
    indexLine
  }
};
</script>