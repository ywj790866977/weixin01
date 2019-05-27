// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  switch:function(){
    this.setData({
      textFlag:!this.data.textFlag
    })
  },
  data: {
    textFlag:true,
    playlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      textFlag:false
    })
    var mid = options.mid
    var reqTask = wx.request({
      url: 'http://localhost:3000/playlist/detail?',
      data: {id:mid},
      method: 'GET',
      success: (result) => {
        var resList = result.data.playlist
        var newCount = resList.playCount
        newCount = (newCount/10000).toFixed(1);
        resList.playCount = newCount
        console.log(resList.playCount)
        this.setData({
          playlist:resList
        })
          console.log(result.data.playlist)
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