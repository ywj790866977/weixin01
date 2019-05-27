Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    newList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  showdetail:function(e){
    var mid = e.target.dataset.mid;
    console.log(mid);
    wx.navigateTo({
      url: '../detail/detail?mid='+mid
    });
  },
  onLoad: function (options) {
    wx.request({
      url: 'http://localhost:3000/personalized',
      method: 'GET',
      success: (result) => {
        if(result.data.code === 200){
          var resList = result.data.result
          resList = resList.slice(0,6)
          for (var i=0;i<resList.length;i++){
            var newNum = (resList[i].playCount/10000).toFixed(1)
            if(newNum.length>5) newNum = newNum.split(".")[0]
            resList[i].playCount = newNum;
          }
          this.setData({
            list:resList
          })
        }
      },
    });
    wx.request({
      url: 'http://localhost:3000/personalized/newsong',
      method: 'GET',
      success: (result) => {
        if(result.data.code === 200 ){
          this.setData({
            newList:result.data.result
          })
        }
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})