//index.js
//获取应用实例
const app = getApp()
const innerAudioContext = wx.createInnerAudioContext()
Page({
  data: {
    word: [
      {
        id: "0",
        katakana: "ア",
        hiragana: "あ",
        choosed: 0,
        audio:"http://d1.g.hjfile.cn/voice/jpsound/C231.mp3",
        romaji: "a"
      },
      {
        id: "1",
        katakana: "イ",
        hiragana: "い",
        choosed: 0,
        audio: "https://tts.hjapi.com/jp/2C8E8193EE6356B5.mp3",
        romaji: "i"
      },
      {
        id: "2",
        katakana: "ウ",
        hiragana: "う",
        choosed: 0,
        audio: "http://d1.g.hjfile.cn/voice/jpsound/J05637.mp3",
        romaji: "u",
        related: [43]
      },
      {
        id: "3",
        katakana: "エ",
        hiragana: "え",
        audio: "http://d1.g.hjfile.cn/voice/jpsound/J07201.mp3",
        choosed: 0,
        romaji: "e"
      },
      {
        id: "4",
        katakana: "オ",
        hiragana: "お",
        audio: "http://d1.g.hjfile.cn/voice/jpsound/J08111.mp3",
        choosed: 0,
        romaji: "o"
      },
      {
        id: "5",
        katakana: "カ",
        hiragana: "か",
        audio: "http://d1.g.hjfile.cn/voice/jpsound/J10889.mp3",
        choosed: 0,
        romaji: "ka"
      },
      {
        id: "6",
        katakana: "キ",
        hiragana: "き",
        audio: "https://tts.hjapi.com/jp/9FA0E19DC651750E.mp3",
        choosed: 0,
        romaji: "ki"
      },
      {
        id: "7",
        katakana: "ク",
        hiragana: "く",
        choosed: 0,
        audio: "https://tts.hjapi.com/jp/839B844E3E8EA199.mp3",
        romaji: "ku",
        related: [8, 15]
      },
      {
        id: "8",
        katakana: "ケ",
        hiragana: "け",
        choosed: 0,
        audio: "https://tts.hjapi.com/jp/1A60C68F8286360E.mp3",
        romaji: "ke",
        related: [7, 15]
      },
      {
        id: "9",
        katakana: "コ",
        hiragana: "こ",
        audio: "https://tts.hjapi.com/jp/A2DD701D57F190EF.mp3",
        choosed: 0,
        romaji: "ko",
        related: [37]
      },
      {
        id: "10",
        katakana: "サ",
        hiragana: "さ",
        audio: "https://tts.hjapi.com/jp/CBCD4A43F202F9E9.mp3",
        choosed: 0,
        romaji: "sa"
      },
      {
        id: "11",
        katakana: "シ",
        hiragana: "し",
        audio: "http://d1.g.hjfile.cn/voice/jpsound/J30042.mp3",
        choosed: 0,
        romaji: "shi",
        related:[45]
      },
      {
        id: "12",
        katakana: "ス",
        hiragana: "す",
        choosed: 0,
        audio: "http://d1.g.hjfile.cn/voice/jpsound/J37573.mp3",
        romaji: "su"
      },
      {
        id: "13",
        katakana: "セ",
        hiragana: "せ",
        audio: "https://tts.hjapi.com/jp/B7AF856731FE9AF3.mp3",
        choosed: 0,
        romaji: "se"
      },
      {
        id: "14",
        katakana: "ソ",
        hiragana: "そ",
        audio: "https://tts.hjapi.com/jp/32F47F627DA4B2B6.mp3",
        choosed: 0,
        romaji: "so",
        related: [17]
      },
      {
        id: "15",
        katakana: "タ",
        hiragana: "た",
        audio: "http://d1.g.hjfile.cn/voice/jpsound/J43115.mp3",
        choosed: 0,
        romaji: "ta",
        related: [7, 8]
      },
      {
        id: "16",
        katakana: "チ",
        hiragana: "ち",
        audio: "https://tts.hjapi.com/jp/5B9DDC9E7ABC0EAF.mp3", 
        choosed: 0,
        romaji: "chi"
      },
      {
        id: "17",
        katakana: "ツ",
        hiragana: "つ",
        choosed: 0,
        romaji: "tsu",
        audio: "https://tts.hjapi.com/jp/869C94B92CE7A0E8.mp3", 
		    related:[14]
      },
      {
        id: "18",
        katakana: "テ",
        hiragana: "て",
        audio: "http://d1.g.hjfile.cn/voice/jpsound/J49259.mp3",
        choosed: 0,
        romaji: "te"
      },
      {
        id: "19",
        katakana: "ト",
        hiragana: "と",
        choosed: 0,
        audio: "https://tts.hjapi.com/jp/80CE367D4BD1D963.mp3",
        romaji: "to"
      },
      {
        id: "20",
        katakana: "ナ",
        hiragana: "な",
        audio: "http://d1.g.hjfile.cn/voice/jpsound/C300.mp3",
        choosed: 0,
        romaji: "na",
		related:[24]
      },
      {
        id: "21",
        katakana: "ニ",
        hiragana: "に",
        audio:"https://tts.hjapi.com/jp/1C4EC458D8290DD5.mp3",
        choosed: 0,
        romaji: "ni"
      },
      {
        id: "22",
        katakana: "ヌ",
        hiragana: "ぬ",
        audio: "http://d1.g.hjfile.cn/voice/jpsound/C302.mp3",
        choosed: 0,
        romaji: "nu",
        related: [27, 44, 38]
      },
      {
        id: "23",
        katakana: "ネ",
        hiragana: "ね",
        audio: "https://tts.hjapi.com/jp/76ADD12968C47BF9.mp3",
        choosed: 0,
        romaji: "ne"
      },
      {
        id: "24",
        katakana: "ノ",
        hiragana: "の",
        audio: "https://tts.hjapi.com/jp/7CA555D14FC62E85.mp3",
        choosed: 0,
        romaji: "no",
		related:[20]
      },
      {
        id: "25",
        katakana: "ハ",
        hiragana: "は",
        audio: "https://tts.hjapi.com/jp/E056378BC691BBD9.mp3",
        choosed: 0,
        romaji: "ha"
      },
      {
        id: "26",
        katakana: "ヒ",
        hiragana: "ひ",
        audio: "https://tts.hjapi.com/jp/0ADE1A975DB1C731.mp3",
        choosed: 0,
        romaji: "hi"
      },
      {
        id: "27",
        katakana: "フ",
        hiragana: "ふ",
        audio: "https://tts.hjapi.com/jp/FD924F9D36D60304.mp3",
        choosed: 0,
        romaji: "fu",
        related: [22, 44, 38]
      },
      {
        id: "28",
        katakana: "ヘ",
        hiragana: "へ",
        audio: "https://tts.hjapi.com/jp/052086AEBDEEF7C1.mp3",
        choosed: 0,
        romaji: "he"
      },
      {
        id: "29",
        katakana: "ホ",
        hiragana: "ほ",
        audio: "https://tts.hjapi.com/jp/8D56F90C0EA27641.mp3",
        choosed: 0,
        romaji: "ho"
      },
      {
        id: "30",
        katakana: "マ",
        hiragana: "ま",
        audio: "https://tts.hjapi.com/jp/E1807006F68A89E0.mp3",
        choosed: 0,
        romaji: "ma"
      },
      {
        id: "31",
        katakana: "ミ",
        hiragana: "み",
        audio: "https://tts.hjapi.com/jp/98AA18EC2577C8A9.mp3",
        choosed: 0,
        romaji: "mi"
      },
      {
        id: "32",
        katakana: "ム",
        hiragana: "む",
        audio: "https://tts.hjapi.com/jp/973DAB38DDF6551C.mp3",
        choosed: 0,
        romaji: "mu"
      },
      {
        id: "33",
        katakana: "メ",
        hiragana: "め",
        audio: "https://tts.hjapi.com/jp/7F586E8E23DD9DD6.mp3",
        choosed: 0,
        romaji: "me"
      },
      {
        id: "34",
        katakana: "モ",
        hiragana: "も",
        audio: "https://tts.hjapi.com/jp/EBFFD5FEDEA6FAB3.mp3",
        choosed: 0,
        romaji: "mo"
      },
      {
        id: "35",
        katakana: "ヤ",
        hiragana: "や",
        audio: "https://tts.hjapi.com/jp/66B10BC2BEA287FD.mp3",
        choosed: 0,
        romaji: "ya"
      },
      {
        id: "36",
        katakana: "ユ",
        hiragana: "ゆ",
        audio: "https://tts.hjapi.com/jp/4E17BCC4157D06B0.mp3",
        choosed: 0,
        romaji: "yu",
        related: [9]
      },
      {
        id: "37",
        katakana: "ヨ",
        hiragana: "よ",
        audio: "https://tts.hjapi.com/jp/3D1A4827A48F29C9.mp3",
        choosed: 0,
        romaji: "yo",
        related: [27, 22, 44]
      },
      {
        id: "38",
        katakana: "ラ",
        hiragana: "ら",
        audio: "https://tts.hjapi.com/jp/5F7872F59F3F95E3.mp3",
        choosed: 0,
        romaji: "ra",
        related: [27, 44, 22]
      },
      {
        id: "39",
        katakana: "リ",
        hiragana: "り",
        audio: "https://tts.hjapi.com/jp/A6E11B6600E2E3BF.mp3",
        choosed: 0,
        romaji: "ri"
      },
      {
        id: "40",
        katakana: "ル",
        hiragana: "る",
        audio: "https://tts.hjapi.com/jp/2C0AEC1409C647B7.mp3",
        choosed: 0,
        romaji: "ru"
      },
      {
        id: "41",
        katakana: "レ",
        hiragana: "れ",
        audio: "https://tts.hjapi.com/jp/3A12880126F597E9.mp3",
        choosed: 0,
        romaji: "re"
      },
      {
        id: "42",
        katakana: "ロ",
        hiragana: "ろ",
        audio: "https://tts.hjapi.com/jp/70EEF5CBFBA369F0.mp3",
        choosed: 0,
        romaji: "ro"
      },
      {
        id: "43",
        katakana: "ワ",
        hiragana: "わ",
        audio: "http://d1.g.hjfile.cn/voice/jpsound/C10.mp3",
        choosed: 0,
        romaji: "wa",
        related: [2]
      },
      {
        id: "44",
        katakana: "ヲ",
        hiragana: "を",
        audio: "http://d1.g.hjfile.cn/voice/jpsound/C386.mp3",
        choosed: 0,
        romaji: "wo",
        related: [27, 22, 38]
      },
      {
        id: "45",
        katakana: "ン",
        hiragana: "ん",
        audio: "http://d1.g.hjfile.cn/voice/jpsound/C387.mp3",
        choosed: 0,
        romaji: "n",
        related: [11]
      }
    ],
    isPlay:false,
    related:null,
    examList: [],
    examId:null,
    currentRomaji:null,
    currentKatakana:null,
    currentIndex:null,
    tmpObj: {},
    timer:null,
    selectId:null,
    isCorrect:null,
    isDisabled:false,
    isHit:false,
    isFinish:false,
    optionNum: 4,
    questionNum: 10,
    correctNum: 0,
    rate:null
  },
  text_hint:function(){
    this.setData({
      isHit:!this.data.isHit
    });
  },
  audio_hint:function(){
    var me = this;
    var index = me.data.currentIndex;
    console.log(me.data.examList[index].exam.audio);
    innerAudioContext.src = me.data.examList[index].exam.audio;
    innerAudioContext.onPlay(function(){
      //开启按钮播放动画
      me.setData({
        isPlay:true
      });
    });
    innerAudioContext.onError(function(res){
      console.log(res.errMsg)
      console.log(res.errCode)
    });
	innerAudioContext.onEnded(function(){
      //停止按钮播放动画
      me.setData( {
        isPlay: false
      });
    });
  innerAudioContext.play();
  },
  radom: function (Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
  },

  init_question: function () {
    var me = this;
    var canChooseList = [];
    for (var i in me.data.word) {
      if (me.data.word[i].choosed == 0) {
        canChooseList.push(me.data.word[i]);
      }
    }

    if (canChooseList.length == 0) {
      console.log("所有单词都已被遍历过");
      return 0;
    }
    else {
      var rand = this.radom(0, canChooseList.length - 1);
      me.data.tmpObj.exam = canChooseList[rand];
      var related = canChooseList[rand].related;
      if (related){
        me.data.tmpObj.related = [];
        for (var i in related){
          me.data.tmpObj.related.push(me.data.word[related[i]]);
        }
      }
      return 1;
    }
  },
  init_question_list: function () {
    var me = this;
    me.data.examList = [];
    for (var i = 0; i < me.data.questionNum; i++) {
      me.data.tmpObj = {};
      if (me.init_question()) {
        me.init_option();
        me.randomilize();
        me.data.tmpObj.isCorrect = null;
        me.data.examList.push(me.data.tmpObj);
      }
      else
        break;
    }
  },
  init_option: function () {
    var me = this;
    var tmp = [];
    me.data.tmpObj.option = [];
    var len = 0;
    for (var i in me.data.word) {
      //在整个列表中剔除题目
      if (me.data.word[i].id == me.data.tmpObj.exam.id) {
        me.data.word[i].choosed = 1;
        continue;
      }
      //在整个列表中剔除混淆项,把相关联的项目全部放入选项中
      if (me.data.tmpObj.related) {
        var flag = false;
        var tmpList = [];
        len = me.data.tmpObj.related.length;
        for (var j in me.data.tmpObj.related) {
          if (me.data.word[i].id == me.data.tmpObj.related[j].id) {
            flag = true;
            tmpList = me.data.tmpObj.related[j];
          }
        }
        if (flag){
          me.data.tmpObj.option.push(tmpList);
          continue;
        }
      }
      tmp.push(me.data.word[i]); 
    }

    //选出另外的项目
    for (var i = 0; i < me.data.optionNum - len - 1; i++) {
      var rand = this.radom(0, tmp.length - 1);
      me.data.tmpObj.option.push(tmp[rand]);
      tmp.splice(rand, 1);
    }

    //和题目合并
    me.data.tmpObj.option.push(me.data.tmpObj.exam);
  },
  randomilize: function () {
    var me = this;
    var length = me.data.tmpObj.option.length;
    var arr1 = []; 
    for (var i = 0; i < length; i++) {//建立数组下标数组
      arr1[i] = i;
    }
    var arr2 = [];
    for (var i = 0; i < length; i++) {//将数组下标随机打乱
      arr2[i] = arr1.splice(Math.floor(Math.random() * arr1.length), 1);
    }
    var arr3 = [];
    for (var i = 0; i < length; i++) {//将数组按打乱后的下标输出
      arr3[i] = me.data.tmpObj.option[arr2[i]];
    }
    me.data.tmpObj.option = arr3;
  },
  get_answer:function(e){
    var me = this;
    var jump_time = null;
    var isHit = false;
    var index = e.target.dataset.index;
    me.data.examList[index].answer = e.target.dataset.value;
    if (me.data.examList[index].exam.id == me.data.examList[index].answer) {
      me.data.examList[index].isCorrect = 1;
      me.data.correctNum++;
    }
    else {
      me.data.examList[index].isCorrect = 0;
      isHit = true;
    }

    if (me.data.examList[index].isCorrect){
      if (me.data.examList[index].related)
        jump_time = 5 * 1000;
      else
        jump_time = 0.5 * 1000;
    }
    else{
      if (me.data.examList[index].related)
        jump_time = 10 * 1000;
      else
        jump_time = 3 * 1000;
    }
   
    me.setData({
      isHit:isHit,
      isDisabled:true,
      selectId: me.data.examList[index].answer,
      related: !!me.data.examList[index].related ? me.data.examList[index].related : '',
      isCorrect: me.data.examList[index].isCorrect
    });

    if(me.timer)
      clearTimeout(me.timer);
    me.timer = setTimeout(function(){
      me.render(++index);
    },jump_time);
    
  },
  show_result:function(){
    var me = this;
    var rate = (me.data.correctNum / me.data.examList.length).toFixed(2);
    me.setData({
      rate: rate * 100,
      isFinish:true
    });
  },
  render:function(index){
    var me = this;
	  innerAudioContext.stop();
    var list = me.data.examList;
    if (index < list.length) {
      me.setData({
        selectId:null,
        isDisabled:false,
        isCorrect:null,
        isPlay:false,
        isHit:false,
        isFinish:false,
        rate:null,
        related: null,
        examId: list[index].exam.id,
        currentKatakana: list[index].exam.katakana,
        currentRomaji: list[index].exam.romaji,
        currentOptions: list[index].option,
        currentIndex:index
      });
    }
    else{
      me.show_result();
    }
  },
  redo:function(){
    var me = this;
    var errorList = [];
    for(var i in me.data.examList){
      me.data.examList[i].answer = null;
      if (!me.data.examList[i].isCorrect) {
        errorList.push(me.data.examList[i]);
      }
    }
    me.data.examList = errorList;
    me.data.correctNum = 0;
    me.render(0);
    
  },
  restart:function(){
    this.data.correctNum = 0;
    this.init();
  },
  init:function(){
    this.init_question_list();
    this.render(0); 
/*    wx.request({
      url: 'http://192.168.0.1/router/interface_status_show.cgi',
      header:{
        token_id: '5c7ecf2188d5bcfac0f01f7343711a13',
        Cookie: 'Qihoo_360_login=a2ef182e90c6e04d1bc436219567c8c8; us=b28ef77043ce41b0cc819b9be6e0bf61d24035f9f6cb419b4933ddc3e72a097f; ukey=27937c2021b0a12614690d8a4d966ea6'
      },
      success(res) {
        console.log(res);
      }
    })*/

  },
  onLoad: function () {
    this.init();
    console.log(this.data.examList);
  },
  onShareAppMessage:function(){

  }
})
